# Ops Chatbot - Project Overview

An AI-powered Operations Chatbot built with **Next.js**, **Supabase**, and **LlamaIndex**. This system allows administrators to upload PDF documents (contracts, policies, etc.) and enables users to query that knowledge base using a Retrieval-Augmented Generation (RAG) approach.

---

## 🌟 Why This Tech Stack?

- **Next.js (App Router)**: Provides a unified framework for frontend and backend (Server Actions), enabling seamless data fetching, SEO optimization, and high-performance server-side rendering.
- **Supabase & pgvector**: Offers a robust, scalable PostgreSQL database with native support for vector similarity search. This eliminates the need for a separate vector database (like Pinecone) and keeps application data and embeddings in one place.
- **LlamaIndex.ts**: A powerful data framework for LLM applications that simplifies data ingestion, indexing, and querying, providing built-in support for complex agentic workflows.
- **Gemini & OpenAI**: Combines the multimodal strengths of Gemini (for high-quality, cost-effective embeddings and OCR) with the advanced reasoning and tool-calling capabilities of GPT-4o.

---

## 🚀 Key Advantages

### 1. Hybrid PDF Intelligence
Unlike basic RAG systems, this project can "see" content in scanned or image-based PDFs using Gemini's multimodal OCR fallback. This ensures no data is left behind during ingestion.

### 2. Intelligent Tool Selection (Agentic RAG)
The system doesn't just search documents; it *reasons* about the user's intent. If internal documents are insufficient, it autonomously decides to search the web, providing a truly comprehensive assistant experience.

### 3. Native Postgres Vector Search
By using `pgvector`, we benefit from:
- **ACID Compliance**: Your embeddings are stored with the same reliability as your user data.
- **Cost Efficiency**: No additional monthly subscription for a standalone vector DB.
- **Simplified Backups**: One single database backup contains everything.

### 4. Enterprise-Grade Citations
Every response includes numbered citations linked back to the original source. For local documents, the system generates temporary signed URLs, allowing users to verify the information directly in the source PDF.

---

### 5. LlamaIndex vs. Manual RAG
While a "Manual RAG" (custom scripts for retrieval) works for simple use cases, **LlamaIndex** was chosen to provide:
- **Agentic Intelligence**: Instead of a linear script, the system uses an *Agent* that can reason. It decides whether to use local documents, search the web, or ask for clarification.
- **Unified Tooling**: It provides a standardized way to wrap functions (like vector search) and external APIs (like web search) into tools that an LLM can understand.
- **Advanced Processing**: Out-of-the-box support for complex sentence splitting, node management, and (optionally) reranking, which are tedious to implement manually.
- **Observability**: Built-in callback managers track exactly what was retrieved and how the LLM responded, making debugging significantly easier.

---

## 🏗️ System Architecture

- **Frontend**: Next.js (App Router), Tailwind CSS.
- **Backend**: Next.js Server Actions & API Routes.
- **Database**: Supabase (PostgreSQL) with `pgvector` for vector storage.
- **AI Orchestration**: LlamaIndex.ts for RAG and Agentic workflows.
- **Embeddings**: Gemini Embedding (truncated to 1536 dimensions).
- **LLM**: OpenAI GPT-4o for reasoning and tool calling.

---

## 🛠️ Key Components & Logic

### 1. PDF Processing & Ingestion
Located in `src/lib/pdf-loader.ts` and `src/app/admin/upload/actions.ts`.

- **Hybrid Parsing**: Uses `pdf2json` for standard text extraction. If extraction yields minimal text (e.g., image-based PDFs), it falls back to **Gemini 1.5/2.0 Flash** for multimodal OCR.
- **Chunking**: Documents are split into segments (approx. 1024 tokens with 256 token overlap) to ensure context fits within LLM window limits.
- **Vector Transformation**: Chunks are sent to the Gemini Embedding model. The resulting 3072-dim vectors are truncated to 1536-dims to stay within `pgvector` index limits while maintaining high search quality.

### 2. AI Chat Engine (Agent)
Located in `src/lib/llamaindex.ts`.

The system uses an **OpenAIAgent** with two primary tools:
- **`local_rag_tool`**: Performs vector similarity search against the `document_sections` table in Supabase. It retrieves the most relevant chunks and resolves them back to signed PDF URLs for citations.
- **`openai_native_search`**: A fallback tool that allows the agent to search the web if the required information is not found in the local knowledge base.

### 3. Database Schema
Defined in `supabase/schema.sql`.

- **`documents`**: Metadata for uploaded files (name, storage path, uploader).
- **`document_sections`**: Stores text chunks and their corresponding vector embeddings.
- **`chat_sessions` & `chat_messages`**: Persistent storage for user conversations.
- **`users_chatbot` & `admins_chatbot`**: Custom authentication tables.

---

## 🔐 Authentication Flow

The project implements a custom JWT-based authentication system using `jose`:
- **Admin Auth**: Managed via `admin_session` cookies. Admins can upload and delete documents.
- **User Auth**: Managed via `user_session` cookies. Users can chat and view their own history.
- **RLS (Row Level Security)**: Supabase policies ensure users can only access their own chat data, while admins manage the document repository.

---

## 🔄 Data Flow Summary

1. **Admin Upload**: PDF -> `pdf-loader` (OCR fallback) -> Text Chunks -> Embeddings -> `document_sections` (Supabase).
2. **User Query**: User Question -> AI Agent -> `local_rag_tool` (Vector Search) -> Contextual Snippets -> LLM -> Response with Citations.
3. **Web Fallback**: If `local_rag_tool` fails -> `openai_native_search` -> Internet Context -> LLM -> Response.
