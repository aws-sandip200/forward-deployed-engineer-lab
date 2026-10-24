# Project 1 — Enterprise Knowledge Assistant (RAG)

## Problem
Employees need answers from approved internal documents with traceable sources and access controls.

## Planned capabilities
- Ingest approved documents with metadata and ownership.
- Split documents into chunks and index them for retrieval.
- Apply authorization filters before content reaches a model.
- Generate concise answers grounded in retrieved passages.
- Display source titles/links and a clear “not enough evidence” response.
- Collect evaluation feedback without exposing sensitive content in logs.

## Suggested milestones
1. API contract and mock retrieval.
2. Document ingestion and metadata model.
3. Search/retrieval adapter.
4. Server-side model adapter.
5. Source citations and abstention behavior.
6. Evaluation set, security tests, and deployment.

## Acceptance criteria
- A user cannot retrieve a document they are not authorized to access.
- Answers show sources when evidence is used.
- Empty or weak retrieval produces an explicit uncertainty response.
- Provider errors and timeouts are handled without leaking secrets.
- Retrieval and answer quality are measured against a versioned test set.

This folder is a project brief; retrieval, indexing, and model calls are not implemented yet.
