# Connectors

---

- Bridges specific services or sites with Cenote.
- Think of these as plugins/adapters. These are _just_ examples/ Feel free to make any source a target:
  - `YahooNewsConnector`
  - `RedditConnector`
  - `MSNBCConnector`
  - `TwitterConnector`
  - `BlueSkyConnector`
  - `GoogleNewsConnector`
  - `RSSConnector`
  - `PinterestConnector`
- Each connector:
  - Knows what endpoints/URLs to call.
  - Provides `collector` configs (`headers`, `cookies`, etc.).
  - Returns **raw payloads** for `parsing`.
