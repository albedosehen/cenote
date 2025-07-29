# Stores

Manages state and data persistence.

---

## What data goes where?

- **SurrealDB** (source of truth)
  - Perfect for structured + semi-structured data like:
    - Articles (title, URL, content, tags, etc.)
    - API responses (metadata-rich JSON)
    - Site metadata (when/where data came from)
  - Can also store relationships between sources, jobs, and parsed items.
- **Qdrant** (searchable memory)
  - Only store vectorized representations of text (embeddings) for:
    - Full-text semantic search (e.g., "find articles about renewable energy")
    - AI queries ("what has been scraped about climate change?")
  - Qdrant does **not** store raw text or metadata, only embeddings.
- **TimescaleDB** (timeline and analytics)
  - Store time-series data for:
    - Job execution logs (when jobs ran, how long they took)
    - Performance metrics (e.g., average response times)
    - Historical data trends (e.g., how many articles scraped per day)
    - Data trends over time (e.g., review scores over time, pricing over time, etc.)
    - Examples:
      - Price monitoring (e.g., "track price changes for this product")
      - Headline changes (e.g., "how has this news story evolved?")
      - Site text updates (e.g., "what's the latest content on this site?")
      - API values over time (e.g., "how has this API response changed?")

---

## Flow

1. Raw scrape -> Parsed -> cleaned -> SurrealDB (structured data)
2. Content text -> Embedded -> Qdrant (Semantic search / AI)
3. Job logs -> Time-series data -> TimescaleDB (analytics)

Note: Just like we don't want to scrape the same data twice, we never want to store the same data twice to reduce storage usage.
