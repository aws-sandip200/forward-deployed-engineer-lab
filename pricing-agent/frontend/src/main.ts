import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Offer {
  productName: string; seller: string; source: string; productUrl: string;
  itemPrice: number; shippingCost: number; totalPrice: number; currency: string;
  inStock: boolean; observedAt: string;
}
interface CompareResponse {
  query: string; recommendation: Offer | null; offers: Offer[];
  rankingMethod: string; notes: string[];
}
@Component({
  selector: 'app-root', standalone: true,
  imports: [CommonModule, FormsModule, CurrencyPipe, DatePipe],
  template: `
  <main class="shell">
    <header>
      <div class="eyebrow">FORWARD DEPLOYED ENGINEER LAB</div>
      <h1>Automated Pricing Agent</h1>
      <p>Compare product offers and find the lowest in-stock total price.</p>
    </header>
    <form class="search" (ngSubmit)="compare()">
      <label>Product name or model
        <input name="query" [(ngModel)]="query" required minlength="2" placeholder="e.g. wireless headphones">
      </label>
      <div class="fields">
        <label>Maximum budget (optional)
          <input name="budget" type="number" min="0" step="0.01" [(ngModel)]="budget" placeholder="5000">
        </label>
        <label>Currency
          <select name="currency" [(ngModel)]="currency"><option value="INR">INR — Indian Rupee</option><option value="USD">USD — US Dollar</option><option value="GBP">GBP — Pound Sterling</option><option value="EUR">EUR — Euro</option></select>
        </label>
      </div>
      <button type="submit" [disabled]="loading || query.trim().length < 2">{{ loading ? 'Comparing…' : 'Compare prices' }}</button>
      <p class="error" *ngIf="error">{{ error }}</p>
    </form>
    <section *ngIf="result as r">
      <div class="result-heading"><div><div class="eyebrow">RESULTS FOR</div><h2>{{ r.query }}</h2></div><span class="pill">{{ r.offers.length }} offers</span></div>
      <article class="recommendation" *ngIf="r.recommendation as best">
        <div><div class="eyebrow">BEST MATCH BY TOTAL PRICE</div><h3>{{ best.seller }}</h3><p>{{ best.productName }}</p></div>
        <div class="price">{{ best.totalPrice | currency:best.currency:'symbol':'1.2-2' }}<small>including listed shipping</small></div>
        <a [href]="best.productUrl" target="_blank" rel="noopener noreferrer">View offer ↗</a>
      </article>
      <p class="empty" *ngIf="!r.recommendation">No in-stock offer met your budget. Try raising the budget or clearing it.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Seller / source</th><th>Item price</th><th>Shipping</th><th>Total</th><th>Availability</th><th>Link</th></tr></thead>
        <tbody><tr *ngFor="let o of r.offers" [class.unavailable]="!o.inStock">
          <td><strong>{{ o.seller }}</strong><small>{{ o.source }}</small></td>
          <td>{{ o.itemPrice | currency:o.currency:'symbol':'1.2-2' }}</td>
          <td>{{ o.shippingCost | currency:o.currency:'symbol':'1.2-2' }}</td>
          <td><strong>{{ o.totalPrice | currency:o.currency:'symbol':'1.2-2' }}</strong></td>
          <td><span [class.stock]="o.inStock" [class.out]="!o.inStock">{{ o.inStock ? 'In stock' : 'Out of stock' }}</span></td>
          <td><a [href]="o.productUrl" target="_blank" rel="noopener noreferrer">Open ↗</a></td>
        </tr></tbody>
      </table></div>
      <aside><strong>Agent notes</strong><ul><li *ngFor="let note of r.notes">{{ note }}</li></ul></aside>
      <p class="timestamp">Prices observed: sample provider timestamp. Verify the final price and availability with the merchant before purchase.</p>
    </section>
    <footer>Prototype · Demo prices are illustrative and are not live retailer offers.</footer>
  </main>`
})
class AppComponent {
  private http = inject(HttpClient);
  query = 'wireless headphones';
  budget: number | null = 5000;
  currency = 'INR';
  loading = false;
  error = '';
  result: CompareResponse | null = null;

  compare(): void {
    if (this.query.trim().length < 2) return;
    this.loading = true; this.error = ''; this.result = null;
    const maxBudget = this.budget === null || this.budget === undefined || Number.isNaN(Number(this.budget)) ? null : Number(this.budget);
    this.http.post<CompareResponse>('/api/pricing/compare', {
      query: this.query.trim(), maxBudget, currency: this.currency
    }).subscribe({
      next: response => { this.result = response; this.loading = false; },
      error: err => { this.error = err?.error?.detail || err?.error?.message || 'Could not compare offers. Is the Spring Boot API running on port 8080?'; this.loading = false; }
    });
  }
}
bootstrapApplication(AppComponent, { providers: [provideHttpClient()] }).catch(err => console.error(err));