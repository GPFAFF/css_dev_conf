# Animating in Vue

## [Sarah Drasner](https://twitter.com/sarah_edo)

### [Slides](http://slides.com/sdrasner/animating-vue-e17)

### Why Animate?

* You have 2 seconds to grab a users attention
* If you wait for 4 seconds on the web MRI scans show that has same effect as horror film

#### Animation can help with perceived performance

Saccade - Creating spatial awarness, anytime were evolved to perform actions that flow more or less seamlessly.

We aren't wired to deal wit the fits and starts of HCI.  Occiptial lobe only stores things for 100ms

1. start with end state
1. Then you know how to get the in-between

#### How to animate in Vue

1. How to work with it
1. `<Transition>`
1. Watchers/Reactivity
1. SVG

FLIP - First, Last, Invert, Play

Leverage the reactivity system for transitions.

#### What is reactive?

Giant premise of programming, is programming with async data streams.

A stream is a sequence of sequence of ongoing eevnts that offer some hooks of which to observe it.

1. Watchers
* Good for async updates 