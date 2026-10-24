# Reference Architecture

## Initial vertical slice
The first implementation is an enterprise knowledge assistant scaffold. The repository is deliberately modular so individual projects can evolve without coupling everything to one model provider.

```text
Browser (Angular 19)
        |
        | HTTPS / JSON
        v
Spring Boot API  -----> Identity provider / authorization
        |
        +-----> Retrieval adapter -----> approved document sources
        |
        +-----> Model-provider adapter (server-side credentials)
        |
        +-----> telemetry / audit events
```

## Responsibilities
- **Angular:** user experience, input validation for usability, loading/error states. It is not a security boundary.
- **Spring Boot:** API contracts, authentication/authorization, request validation, rate limits, tool permission checks, provider orchestration, audit events.
- **Retrieval adapter:** document ingestion, chunking, metadata filters, retrieval and source references.
- **Model adapter:** provider-specific implementation behind an interface; keys remain in server-side secret storage.
- **Deployment:** immutable container images, health probes, least-privilege identities, environment-specific configuration.

## Key decisions
- Start with a modular monolith and explicit interfaces; split services only when a real scaling or ownership need exists.
- Keep model-provider details out of controllers.
- Require authorization checks for every retrieved resource and every agent tool call.
- Set request timeouts and bounded retries; do not retry non-idempotent actions blindly.
- Use synthetic data until privacy, retention, and access policies are approved.

## Production-readiness gaps
Authentication/SSO, persistent conversation storage, document ingestion, vector search, provider implementation, secrets integration, threat modelling, load testing, dashboards, and operational runbooks are not implemented by the starter.
