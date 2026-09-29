# Astra V46.3 — Navigation Geometry Fix

Fixes the bottom navigation displacement visible on desktop and wide viewports.
Cause: the legacy centered navigation's `transform: translateX(-50%)` survived the V46.2 geometry override.
V46.3 explicitly resets transform, translate, max-width and box sizing while keeping the docked Flutter-style navigation.
No app/data logic changed.
