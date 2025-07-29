# Collector

---

- Handles the raw gathering of data (HTTP calls, headless browser sessions, API calls).
- Each collector is source-type specific:
- HttpCollector for simple GET/POST requests.
- BrowserCollector for JS-heavy sites (via Playwright or similar).
- ApiCollector for REST/GraphQL APIs.
- Deals with:
  - Rate limiting & retry logic
  - Proxy rotation
  - Headers & auth injection
