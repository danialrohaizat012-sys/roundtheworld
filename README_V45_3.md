# Astra V45.3 — Adventure Sequence Fix

Built from the working V45.2.

Root cause:
`customActivities.unshift()` stores the newest Adventure first. The unified list therefore displayed newer custom Adventures before older custom Adventures.

Fix:
- Custom Adventures are sorted by their existing `created` timestamp from oldest to newest inside `allAdventures()`.
- Existing data does not need to be recreated.
- The first custom Adventure remains 100, the next becomes 101, then 102, etc.
- V45.2 unified list, Delete, Restore Deleted, Journey references and Firebase behavior are preserved.
- Service-worker cache bumped.
