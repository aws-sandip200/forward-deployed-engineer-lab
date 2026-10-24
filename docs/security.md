# Security Baseline

- Never commit API keys, passwords, tokens, private certificates, or production data.
- Store runtime secrets in a managed secret store (for example, Azure Key Vault) and inject them through approved workload identity/secret mechanisms.
- Authenticate users and enforce resource-level authorization on the server.
- Validate request bodies, lengths, content types, file types, and tool arguments.
- Treat prompts, retrieved documents, tool output, and model responses as untrusted input.
- Do not let a model decide its own authorization. Enforce permissions in deterministic application code.
- Use least privilege for identities, database roles, cloud roles, and Kubernetes service accounts.
- Avoid logging access tokens, full prompts, sensitive document text, or personal data.
- Apply timeouts, quotas, rate limits, bounded retries, and safe error messages.
- Add tests for prompt injection, cross-tenant retrieval, unauthorized tool calls, malformed JSON, provider outages, and data leakage.
