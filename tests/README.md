# Test Strategy

## Backend
- Unit tests for validation and orchestration.
- MVC tests for API status codes and response contracts.
- Integration tests using mock upstream services.
- Security tests for unauthorized resource access and tool execution.
- Resilience tests for timeouts, rate limits, and provider failures.

## RAG and agent evaluation
Maintain a versioned synthetic test set covering:
- Correct answer with sufficient evidence.
- No relevant documents and expected abstention.
- Conflicting sources and stale documents.
- Cross-user/tenant access attempts.
- Prompt injection in retrieved content.
- Malformed tool arguments and unauthorized actions.

Record metrics, test dataset version, model/provider configuration, and known limitations with each evaluation run.
