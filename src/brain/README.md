# Cenote Brain

Orchestration Engine

---

- The central command module — coordinates the entire scraping process.
- Holds job orchestration logic: what sources to hit, in what order, with what frequency.
- Decides which collector/parser/pipeline combo gets called.
- Eventually could support:
  - Job queue management (e.g., prioritizing urgent scrapes)
  - Scheduling integration (ties into scheduler/)
  - Agent hooks (so an AI agent can say “brain.scrape(‘news’, { limit: 5 })”)
