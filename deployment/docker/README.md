# Docker

Build a backend image from the backend module after adding a Dockerfile and verifying the build in CI.

Recommended baseline:
- Multi-stage build; use a supported JRE image for runtime.
- Run as a non-root user.
- Pin image versions/digests and scan dependencies and images.
- Expose only the required application port.
- Use environment variables or a secret manager for runtime configuration.
- Add health checks and resource limits.
