# Astra · Danial Journey V38

## Multi-user isolation
- One deployment can now be used by Danial, Fakhri, or other Firebase Auth users.
- Firestore remains isolated by Firebase UID.
- On login, Astra restores only that UID's cloud state or that UID's offline cache.
- A brand-new account starts with a blank atlas. It no longer inherits Danial's Thailand/China/New Zealand progress.
- Sign-out caches only the current user's local state.
- Photo Vault records now carry `ownerUid`; photo listing/deletion is filtered by the signed-in UID.
- Legacy unowned photos can only be claimed by an account that already had an Astra cloud document.

## Logic audit fixes
- Experiences has only Adventure List at the top.
- 7 Wonders remains a special collection inside Adventure List.
- 7 Continents is derived automatically in World instead of manually ticked.
- Antarctica continent completion is derived from the Antarctica adventure, without pretending Antarctica is one of the 195 countries.
- Adventure #99 wording changed from old-era language to “Watch a sunset that closes a meaningful journey”.
- Backup exports are labeled with the signed-in account and schema v38.

## Preserved
V37 Experience cleanup, V36 Story Layer, V35 multi-country Journey/final review, Firebase sync, local Photo Vault, Backup Center.

Firestore rules do not need changing if they remain UID-scoped:
`request.auth.uid == userId`.
