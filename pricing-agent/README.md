# Automated Product Pricing Agent

A starter full-stack app for comparing product offers and recommending the lowest in-stock total price.

## Features
- Product query and optional budget.
- Offer normalization: item price, shipping, total price, seller, stock, source, and URL.
- Ranking by landed cost (item price + shipping).
- Angular 19 comparison UI and Spring Boot REST API.
- Demo provider lets you run locally without API keys.

**Important:** Demo offers are sample data, not live market prices. To compare real prices, connect official retailer/marketplace APIs or licensed product feeds. Respect provider terms and do not represent stale/demo values as live prices.

## Architecture
```text
Angular 19 UI -> Spring Boot REST API -> PricingAgentService -> ProductProvider(s)
                                                           -> DemoProductProvider
```

## Run backend
Requirements: JDK 21+, Maven 3.9+.
```bash
cd pricing-agent/backend
mvn spring-boot:run
```
Health: `GET http://localhost:8080/api/health`

## Run frontend
Requirements: Node.js 20+.
```bash
cd pricing-agent/frontend
npm install
npm start
```
Open http://localhost:4200.

## Compare API
`POST /api/pricing/compare`
```json
{"query":"wireless headphones","maxBudget":5000,"currency":"INR"}
```
Returns a recommendation, all offers, ranking method, and notes.

## Add real data providers
1. Implement `ProductProvider` for an official API or licensed feed.
2. Store API credentials in environment variables or a secret manager.
3. Map returned offers to `ProductOffer`.
4. Add request timeouts, retry/backoff, caching, rate limits, and provider attribution.
5. Display observed time, taxes, delivery, returns, warranty, and exact variant.
6. Add integration tests for API errors and stale/missing prices.
