# Using CSS Grid in Real World

## [Brenda Storer](https://twitter.com/brendamarienyc)

### [Slides](http://brendastorer.com/presentations/2017-10-CSSDevConf/assets/player/KeynoteDHTMLPlayer.html#0)

### Grid for the everyday

Grid support went from 0% to 70% in 7 months.

How?

* Bye Bye cendor prefixes
* Hello Feature flags
* Prefixed verison of Grid only in IE `-ms` prefix.

### Step By Step Process

1. Identify a good use case

* Flexbox v. Grid:
  * Flexbox - great for laying out items in one direction, in rows.
  * Grid allows you to lay out elements in two directions rows and columns

* When normally reaching for layout properties like Flexbox, floats, position. Consider Grid.

1. Write Grid Code
  Like flexbox the parent declration controls the children

```html
  <ul class="search-results">
    <li class="results">A</li>
    <li class="results">B</li>
    <li class="results">C</li>
  </ul>
```

```css
  .search-results {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    padding: 10px;
  }
```

1. Supports for gracefull fallback

```css
    @supports (display: grid) {
      .search-results {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        padding: 10px;
      }
    }
```

Order Matters

* Fallback first
* Grid code second

#### Helpful Links

[CSS GRID](https://www.heartinternet.uk/blog/fearless-guide-using-css-grid-today/)