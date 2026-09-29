# Astra V45.1 — Adventure List Fix

Surgical patch from V45's active Adventure renderer.

- Custom Adventures no longer appear in a separate “Added By Me” section.
- The active list renders from `allAdventures()` as one master database.
- New Adventures continue the visible sequence automatically: 99, 100, 101...
- Existing deleted-ref filtering remains intact, so Delete now disappears from the rendered list.
- Restore Deleted remains intact.
- Existing Adventure IDs, completion history, Journey references, World, country selector and Firebase architecture are preserved.
