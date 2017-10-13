# Ride the Lightning - Making fast websites

## [Matt James](https://twitter.com/mattfrankjames)

### Average web page size over the last 7 years has tripled

#### 700 kb in 2010 to 3376kb in 2017

#### Average bytes per page

* Images 1810kb
* HTML 52kb
* Fonts 109kb
* Scripts 454kb
* Stylesheets 89kb
* Video 789kb
* Other 16kb

#### From 13 to 15 users doubled relying on mobile for their connection to high speed web

### Images

#### squeeze em down

* imageOptim
* tinyPng
* svgoUI
* compressor.IO

### Fonts

embrace FOUT not FOIT

new rules coming to css `font-display: block, swap(invisible text), fallback(use browser fallback), optional`

can use this currently, because of progressive enhancement.

Font Face Observer a polyfill to load system fonts over webfonts and then when a class is applied after the promise is resolved it will load said webfonts.

### Scripts

* async and defer,  defer loads in the order you give it.
* `link rel="preload"` to css.  Not well supported but essentially operates like async.  Will swap in your css once loaded.

* `gulp userref` can write a task that can concatenate and minify in one fell swoop.

* Time for Critical CSS  by isolating CSS for above the fold content and inlining it, we dramatcially improve perceived performance. Critical path CSS generator.

* Add gulp task for critical css.  then async the rest of the css. Polyfill done by filament group.

* [Prefetch](https://css-tricks.com/prefetching-preloading-prebrowsing/)

### [Service Workers](https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker)

* Add service worker - this could be done in terms of LPACA.  Can control static, dynamic and how to control page requests.

Tool called workbox