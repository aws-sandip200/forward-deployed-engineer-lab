# Angular 19 Frontend

This folder is the intended home for the Angular 19 client. Generate the workspace here using Angular CLI, then add a feature module/page for the enterprise knowledge assistant.

## Create the workspace
From this folder, run:
```bash
npx -p @angular/cli@19 ng new . --directory . --routing --style=scss --standalone
```
If the CLI refuses a non-empty directory, generate into a temporary directory and move the generated files here.

## API integration
- Backend base URL: `http://localhost:8080/api` for local development.
- Keep provider credentials exclusively in the backend.
- Add loading, empty, retry, and error states.
- Configure a development proxy rather than hardcoding environment-specific URLs.
- Add accessibility and component tests.
