# V51.1 Country Search Fix
Root cause fixed: the World search input previously called renderCountries() on every keystroke, which rebuilt and replaced the focused input node. Live search now updates only the country grid and result count, preserving keyboard focus and typed text. Filters retain the active search query.
