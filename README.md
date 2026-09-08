# Phoenix → Astra Master UI V2

Deploy-ready PWA for GitHub Pages.

## Core Phoenix gates
1. RM1,000,000 cash savings
2. Reach 70 kg
3. Meney 90-day owner-independence test
4. Meney >= RM30,000 6-month average profit
5. Complete degree + graduation + convocation

Target: 31 December 2027.

## Astra modules
- Astra Home
- 195 country cards with flags/status
- Country detail: overview, quests, photos, journal, people, food, language, business, spiritual reflections, expenses
- IndexedDB local photo vault
- First 100
- 7 Continents
- 7 Wonders
- Route Planner / regional lifetime route
- Preview Astra before launch
- Real Astra launch gated by Phoenix 5/5

## Deploy
Upload all files in this folder to your GitHub Pages repository root.

## Important
Photo Vault is local to the browser/device. For irreplaceable memories, add cloud sync/backup before long-term use.


## V3 upgrades
- Cash and weight progress trail with timestamps, line chart and history list
- World map motivational hero on Phoenix
- World map panels in Astra and Countries
- Country cards now have unique visual identity, country-specific signature text, quest counts and Wonder badges
- Route Planner redesigned as a visual journey timeline with transport and quest clusters


## V4 Logic + Memory upgrades
- Detailed coastlines/country-boundary world map asset instead of schematic block map
- People, Food, Language, Business and Spiritual logs now support optional photos via IndexedDB
- 7 Wonders have independent completion state; visiting a country no longer auto-completes its Wonder
- Meney average profit can be built from monthly profit entries and rolling average
- Meney 90-day owner-independence test can start/reset and counts calendar days automatically
- Priority country cards use relevant country imagery; all countries retain unique flag/signature/quest metadata


## V5
- Phoenix world map remains static/motivational only
- Astra home now has a colorful interactive geographic map
- Tap supported countries on the Astra map to open Country Detail
- Map colors: Malaysia gold, visited green, planned blue, remaining colored by continent
- People of Astra now stores name, story, social media, phone/WhatsApp and optional photo
- Static map fallback remains available if the interactive atlas cannot load


## V6 upgrades
- New colorful Phoenix static motivational hero: world map + sunrise + traveller silhouette
- Astra interactive map now supports zoom in/out, drag/pan, double-tap zoom, Fit/reset
- Fullscreen world map mode with landscape orientation request when supported
- Small countries are easier to tap after zooming up to 12x
- Countries tab no longer duplicates a map image
- Route Planner no longer duplicates a map image
- Route stops show a green Visited marker when that country is already visited


## V9 Restoration
- Rebuilt from V7, not V8
- Preserves all V7 functions and data flow
- Restores cinematic visual character while keeping professional polish
- Phoenix uses hero + countdown + launch card + unified requirement panel
- Avoids both extremes: excessive boxiness and over-flat editorial layout


## V10 Original Visual Assets
- All app photography-style visuals are now original SVG artwork bundled in `assets/`
- No Unsplash/photo hotlinks remain
- 7 Wonders each have their own original illustrated image
- Phoenix/Astra/map/countries/quests/route/journal/archive/people/food/language/business/spiritual icons are custom SVG assets
- Phoenix and Astra have original cinematic hero artwork
- Featured journey cards use original local visual assets
- Country hero/card visuals for key countries use local original artwork
- PWA manifest and service worker added; all local assets are precached
- Interactive map still loads D3/TopoJSON/world-atlas from jsDelivr when online and falls back to the local static map if unavailable


## V11 Interactive Map Name Fix
- Expanded map ISO numeric-name dictionary from partial coverage to the full pycountry ISO set
- All 195 Astra canonical countries map back to the exact country names used by the app
- Remaining territories/map areas still show a readable geographic name even when they are outside the 195-country tracker
- Fullscreen map now has the same country tooltip as the embedded Astra map
- Pointer/touch interaction shows country names in fullscreen as well

## V12 Photography Rebuild
- Vector scenic cards removed from main travel visuals
- Phoenix/Astra heroes use real photography
- Featured journey cards use real destination photos
- Key country cover visuals use real destination photos
- Seven Wonders use actual photographs
- Custom SVGs remain for navigation/action icons only
- V11 interactive-map fixes are preserved

## V13 Clean Layout
- Interactive world map remains in Astra only
- Countries tab no longer shows a duplicate map
- Route Planner no longer shows a duplicate map
- Existing country, route, quest, archive and map functionality preserved

## V14 Single-File Visual Cleanup
- Removed the `assets/` folder completely
- Custom navigation/brand icons are inline SVG inside `index.html`
- Photography is referenced directly in code, no separate image folder
- Countries tab has no map card; it uses a cinematic travel photography banner
- Route Planner has no map card; it uses a subtle expedition photography intro
- Key country cards still use iconic real destination photography
- Countries without a dedicated image use a clean UI card rather than a fake/block map
- Interactive world map remains only inside Astra

## V15 Card Redesign
- Countries cards redesigned as cinematic destination cards with photo backdrop, glass flag block, clearer hierarchy and less database-like styling
- Countries without dedicated photography use polished continent gradients instead of fake maps
- Route Planner cards redesigned as clean journey-leg cards with completion %, compact stop chips and progress state
- No maps added back into Countries or Route Planner
- All previous functionality preserved

## V16 World Archive Photography
- World Archive/Countries hero card upgraded to a full cinematic scenery photograph
- Country cards no longer fall back to abstract/map-like visual treatment
- Every country card is photo-led; countries with dedicated destination photography keep their own image, others use a cinematic travel-photo fallback pending country-specific expansion


## V17 Firebase Ready

### Firebase services expected
1. Authentication → enable Email/Password
2. Firestore Database
3. Storage
4. Hosting (optional, if you want Firebase Hosting instead of GitHub Pages)

### Connect
1. Create/open your Firebase project.
2. Add a Web App.
3. Copy the Firebase config into `firebase-config.js`.
4. Enable Email/Password under Authentication → Sign-in method.
5. Create Firestore and Storage.
6. Deploy `firestore.rules` and `storage.rules`.

### Available JS API
The app exposes:
- `astraFirebase.signUp(email, password)`
- `astraFirebase.signIn(email, password)`
- `astraFirebase.signOut()`
- `astraFirebase.pushState()` → saves Phoenix/Astra state to Firestore
- `astraFirebase.pullState()` → restores cloud state to this device
- `astraFirebase.uploadMedia(file, {country, kind})`
- `astraFirebase.deleteMedia(path)`
- `astraFirebase.snapshot()`

Firestore path:
`users/{uid}/astra/state`

Storage path:
`users/{uid}/media/{country}/...`

Firestore uses persistent local cache, so the app remains offline-first after Firebase has initialized successfully.

## V18 Firebase Project Connected
Firebase project configuration is now set to `roundtheworld-a47a8`.
The app will initialize Firebase automatically when served over HTTP/HTTPS.

Remaining Firebase Console setup:
- Enable Authentication provider(s)
- Create Firestore Database
- Enable Storage
- Deploy Firestore/Storage rules


## V19 Free Media Architecture

Firebase Storage has been removed intentionally.

### What syncs through Firebase
- Authentication
- Phoenix progress
- Visited / planned countries
- Journal text
- Country metadata
- First 100 progress/evidence metadata
- Wonder progress
- Other lightweight Astra state

### What stays on the device
Photos and visual memories are stored in IndexedDB after browser-side compression:
- Maximum image edge: 1280 px
- Output format: WebP
- Quality: 78%

The compressed image bytes are **not** written into Firestore, avoiding document-size and database-cost problems.

### Important limitation
Photos do not automatically sync between devices in V19. Use the app's Export My Life / archive backup workflow to preserve media before clearing browser data or changing devices.

Firebase Console only needs:
1. Authentication → Email/Password
2. Firestore Database

Firebase Storage is not required.

## V20 Authentication + Auto Sync
- Full-screen cinematic Firebase login UI
- Uses the Email/Password user already created in Firebase Authentication
- Firebase Auth session persists locally, so normal refreshes do not require repeated login
- Firestore state restores automatically after sign-in
- Existing `save()` flow now queues a debounced cloud sync
- Offline changes remain local and sync when connectivity returns
- Visible sync state: Saving / Synced / Saved locally / Sync error
- Photos remain compressed WebP in local IndexedDB and never enter Firestore
- Sign out control added to the journal/account area

## V21 PWA Identity + Splash
- Recreated the approved ASTRA emblem as a clean standalone SVG, not cropped from the concept artwork.
- Added the emblem as PWA icon, favicon and install icon.
- Added native animated splash sequence: horizon glow → ASTRA emblem → wordmark/tagline → journey loading bar → login/app.
- Existing Firebase Authentication, Firestore auto-sync and local compressed media architecture preserved.

## V22 Phoenix Dashboard Fix
- Restored Phoenix as the primary dashboard after V21 splash/auth regression
- Phoenix tab now always renders the 5 launch requirements
- Countdown, 5-gate progress, cash/weight trails and Astra lock retained
- Splash, Firebase Authentication, Firestore auto-sync and PWA identity remain intact

## V23 Astra Hard Lock
- Removed Astra Preview Mode completely
- Removed the Preview Astra button from Phoenix
- Astra tab cannot open the Astra experience while Phoenix is incomplete
- Astra shows only a locked screen before completion
- Project Astra becomes accessible only after all 5 Phoenix requirements are complete
- Launch function is hard-guarded against early access
- Existing Firebase Auth, Firestore auto-sync, PWA icon and splash animation remain intact
