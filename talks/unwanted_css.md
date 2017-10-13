# UnwantedCSS - Methods for removing unwanted css from the frameworks and components we depend on

## [Chris Hawkins](https://twitter.com/chriswhawkins)

### [Slides]()

Consultant who worked on a contact site refactoring their sass.

### Some initial Best Practices

  1. Google's recommendation is to inline critical and async the rest.

  1. Audit can show you unused rules on the page.  Legacy audit will show more.  An option of coverage,command + shift + p. type coverage.  Also can access it from elipsis and in more tools.  You can see line to line what is and isn't being used.

### Some Tools

1. UnCss

* [UnCSS](https://githbu.com/giakki/uncs)
* ex.  uncss > link > stylesheet du -h stylesheet.scss` disk     usage human readout

* [CSS ByeBye](https://github.com/AoDev/grunt-css-byebye)
  * supply list of selectors
  * explicitly list out what you want to remove.

* [PurifyCSS](https://github.com/purifycss/purifycss)

  * Like unCSS
  * Potentially better?
  * On LPACA why did we use unCSS instead

1. UI toolkits

* [Fabricator](https://fbrctr.github.io/)
* [Storybook](https://storybook.js.org/)
* [Blueprint](http://blueprintjs.com/)
