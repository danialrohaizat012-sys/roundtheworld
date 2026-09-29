# Astra V46.2 Fixed

Hotfixes:
- Preserves V46.1 Share Studio modal fix.
- Completed Journey date is now formatted through `safeJourneyCompletedDate()`.
- Completion date fallback order: `completedAt` → `endDate` → `startDate`.
- Invalid/missing date values no longer render `Invalid Date`.
- Legacy completed Journeys without `completedAt` therefore remain readable.
- Classic JS and Firebase module syntax checks pass.
