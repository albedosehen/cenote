# Pipelines

Post-parse processing layer. **Not intended for data enrichment**

---

## What does it do?

- Cleans and trasnforms parsed data before it is **stored**.
- Example:
  - Deduplication: Ensures no duplicate entries are stored.
  - Entity extraction: Pulls out specific fields (e.g., author, tags) from parsed data.
  - Sentiment analysis: Determines the sentiment (e.g., positive, negative) of the content.
  - Formatting for storage targets: Prepares data in a format suitable for the storage layer (e.g., SurrealDB, Qdrant, TimescaleDB).
- Allows chaining: `parser -> pipeline stage A -> pipeline stage B -> store`

## Why not enrich it too?

- Pipelines are focused on cleaning and transforming data, not enriching it.
- Enrichment needs to be handled by a separate external process so that:
  - Scraping stays fast & lightweight.
  - Enrichment can scale independently (even offload to GPU nodes, cloud services, whatever).
  - Easier to experiment with multiple enrichment models without touching the core scrape pipeline.
- That just means we will eventually want a queue (RabbitMQ) to kick off enrichment Agents
