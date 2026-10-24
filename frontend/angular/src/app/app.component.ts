import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="shell">
      <header>
        <p class="eyebrow">FORWARD DEPLOYED ENGINEER LAB</p>
        <h1>Enterprise AI, built responsibly.</h1>
        <p class="intro">A hands-on workspace for RAG, safe agents, enterprise integrations, and cloud delivery.</p>
      </header>
      <section class="cards" aria-label="Project focus areas">
        <article><span>01</span><h2>Knowledge assistant</h2><p>Grounded answers, access-aware retrieval, and source references.</p><small>RAG · Evaluation · Security</small></article>
        <article><span>02</span><h2>Safe AI agents</h2><p>Typed tools, server-side authorization, and human approval gates.</p><small>Tools · Guardrails · Audit</small></article>
        <article><span>03</span><h2>Enterprise integration</h2><p>Reliable APIs with timeouts, retries, observability, and clear contracts.</p><small>Java · Spring Boot · Azure</small></article>
      </section>
      <footer>Starter UI · Connect to the Spring Boot API as the next step.</footer>
    </main>
  `,
  styles: [`
    :host { display: block; min-height: 100vh; }
    .shell { max-width: 1100px; margin: 0 auto; padding: 64px 28px; }
    header { max-width: 760px; margin-bottom: 42px; }
    .eyebrow { color: #176b87; font-size: 12px; font-weight: 800; letter-spacing: .16em; }
    h1 { margin: 12px 0; font-size: clamp(2.4rem, 6vw, 4.5rem); line-height: 1.04; letter-spacing: -.045em; }
    .intro { color: #526174; font-size: 1.15rem; line-height: 1.7; }
    .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 18px; }
    article { border: 1px solid #dbe4ec; border-radius: 18px; padding: 24px; background: #fff; box-shadow: 0 12px 36px #17324d0b; }
    article span { color: #176b87; font-weight: 800; font-size: .85rem; }
    h2 { margin-bottom: 8px; font-size: 1.3rem; }
    article p { color: #526174; line-height: 1.6; }
    small { color: #176b87; font-weight: 700; }
    footer { margin-top: 40px; color: #64748b; font-size: .9rem; }
    @media (max-width: 600px) { .shell { padding: 38px 18px; } }
  `]
})
export class AppComponent {}