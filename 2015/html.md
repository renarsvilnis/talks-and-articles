## HTML
All HTML related articles and talks. Usualy about new tags or attributes.

- [Preconnect, prefetch, prerender ...](https://docs.google.com/presentation/d/18zlAdKAxnc51y_kj-6sWLmnjl6TLnaru_WH0LJTjP-o/present?slide=id.p19) - google tech talk slides about `dns-prefetch`, `subresource`, `prefetch`, `prerender`. More numbers then about using them
- [Prefetching, preloading, prebrowsing](https://css-tricks.com/prefetching-preloading-prebrowsing/?utm_source=html5weekly&utm_medium=email)
  - `dns-prefetch` - resolves ahead of time all DNS lookups
  - `preconnect` - `dns-prefetch` + TCP handshake and negotiation
  - `prefetch` - downloads and caches a file, but can be ignored by the browser 
  - `subresources` - helps identify the resources that are the highest priority and should be requested before `prefetch` items
  - `prerender` - load all of the assets of a certain document
  - `preload` -  future, new spec similar to `prefetch` but defines that you always need to download the asset
- [Preload Hints For Web Fonts](http://www.bramstein.com/writing/preload-hints-for-web-fonts.html) - talks about using `<link rel="preload" href="path/to/font.woff" as="font">` load fonts before they get first time they are used in CSS. Ass `preload` is for the future for now you can use `prefetch` to achieve similar results
