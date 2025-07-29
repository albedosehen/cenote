# Parsers

Converts raw responses into structured data objects.

---

- Each parser is responsible for transforming raw payloads into structured and typed data objects.
- Has specialized parsers:
  - HtmlParser → uses DOM parsing/Cheerio-style extraction.
  - JsonParser → cleanly extracts keys.
  - RssParser → handles RSS/Atom feeds.
  - ApiParser → processes REST/GraphQL responses.
  - Any custom parser as needed for the scenario being developed for.
- Each parser returns a normalized format (e.g., { title, url, publishedAt, content }).
