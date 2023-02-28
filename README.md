# Astro Sanity live preview

### Info

This setup allows SSR-preview in Sanity.\
pages/[...slug].astro handles all static requests\
pages/preview/[...slug].astro handles Sanity-previews using SSR\
To avoid redundancy, all html is templated inside components/Content.astro
