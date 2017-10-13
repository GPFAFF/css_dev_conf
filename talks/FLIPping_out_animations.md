# FLIPping Out about Animated Layouts

## [David Khourshid](https://twitter.com/davidkpiano?lang=en)

### [FLIP ANIMATIONS](http://slides.com/davidkhourshid/flip)

### [Flip Beta](https://github.com/davidkpiano/flipping)

### Current Problems

#### SUX - suprise user experience

#### Jump Cuts - fast moving transitions

Try and make applcation structure as flat as possible. Functional animnation is a sublte animation that has a clear purpose.  Lightens cognitive load, very important.

Never animate margin.

Transitions should be 3 things,

1. quick
1. clear
1. cohesive

[Stripe Animations](https://stripe.com/docs/elements)

FLIP TECHNIQUE

F - First
  get dimensions and position of what we want to animate
  `getBoundingClientRect`

  size and position before action

L - Last
  get the last
  size and position after action
I - Invert
  calculate x, y, width, height

  ```deltaX = lastLeft - firstLeft
  deltaY = lastTop - firstTop
  deltaWidth = lastWidth - firstWidth
  deltaHeight = lastHeight - firstHeight
  ```

P - Play

  animate