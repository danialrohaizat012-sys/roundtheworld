# Astra · Danial Journey V39

Experience cleanup hard-fix:
- Experiences has one top destination only: Adventure List.
- Legacy 7 Continents and 7 Wonders tabs are removed from source UI, not merely hidden after rendering.
- Legacy First 100 label is retired from the Experience navigation.
- New 7 Wonders remain a special collection inside Adventure List.
- 7 Continents remains derived automatically inside World.
- Added an integrity guard so obsolete Experience tab controls cannot survive stale markup.
- V38 multi-user isolation and all Journey/World/Memory features are preserved.
