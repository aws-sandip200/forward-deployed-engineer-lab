# Forward Deployed Engineer Learning Roadmap

## Phase 1 — Foundation
- [ ] Build and test the Spring Boot API.
- [ ] Generate the Angular 19 workspace and connect it to the API.
- [ ] Add request validation, error contracts, and API documentation.
- [ ] Add unit tests and a CI build.

## Phase 2 — Enterprise integration
- [ ] Integrate one mock REST service.
- [ ] Add authentication and role-based authorization.
- [ ] Add retries, timeouts, idempotency, and structured logs.
- [ ] Document failure modes and a support runbook.

## Phase 3 — RAG knowledge assistant
- [ ] Define a document ingestion pipeline and allowed file types.
- [ ] Add chunking, metadata, access-control filtering, and retrieval.
- [ ] Return grounded answers with source references.
- [ ] Evaluate retrieval quality and answer faithfulness using a small golden dataset.

## Phase 4 — Safe AI agents
- [ ] Define typed tools with narrow permissions.
- [ ] Validate arguments and authorize actions in Spring Boot.
- [ ] Require human approval for consequential actions.
- [ ] Test prompt injection, malformed arguments, unauthorized actions, and provider errors.

## Phase 5 — Delivery
- [ ] Build non-root containers and scan dependencies/images.
- [ ] Deploy to a non-production Kubernetes namespace.
- [ ] Add probes, resource limits, secret references, metrics, and alerts.
- [ ] Create rollback and incident-response runbooks.

## Portfolio evidence
For each project, record the customer problem, constraints, architecture, demo, test evidence, deployment steps, measurable outcome, and lessons learned.
