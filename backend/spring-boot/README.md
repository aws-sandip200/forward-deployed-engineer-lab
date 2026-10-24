# Spring Boot API

Java 21 / Spring Boot starter for the lab.

## Run
Requires Java 21 and Maven 3.9+.
```bash
mvn spring-boot:run
```

Check `GET /api/health` for a basic liveness response.

## Next steps
- Add authentication/authorization before exposing business endpoints.
- Replace demo health response with readiness checks for dependencies.
- Add OpenAPI, metrics, structured logging, and tests.
- Implement AI/retrieval integrations behind service interfaces; do not call providers directly from controllers.
