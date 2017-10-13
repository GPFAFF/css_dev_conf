# The Transformation of the Transform

## [Dan Wilson](https://twitter.com/dancwilson)

### [Slides](https://danielcwilson.com/talks/2017/transform/)

#### Pillars of Transform, What does it do

* move
* rotate
* scale
* skew
* rotateX

Main gotchas

WIth independent properties, you get at most on transform per axis.

Have to have this order.

## Friends of Transforms

### transform-origin

## Frenemies of Transforms

### will-change

* Cue the browser in that the element will change however trying to maximize performance of actual moving elements

* If everything is on own layer, you can have performance problems.

* Different support amongst browsers

### Independent Properties

Soon browsers should have the ability to parse transition properties line by line.

* `rotate: (45deg)`

* `scale: (.8)`

Enter CSS Variables.  Use it like a Sass/Less var.

```css
:root {
  --primary: #BADA55
}
```

Real power when you think of them as properties
They respect cascade and inheritance in CSS
Are straight forward to change via JS

```css
  .logo {
    --translate-x: 80px;
    --scale: .5;
    --rotate: (30deg);

    transform:
      translateX(var(--translate-x))
      scale(var(--scale))
      rotate(var(--rotation));
  }
```

Alternative to scroll events, interjection observer.
