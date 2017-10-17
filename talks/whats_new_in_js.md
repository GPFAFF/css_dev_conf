# Whats new in JavaScript

## [Wes Bos](https://twitter.com/wesbos)

### [Slides](https://wesbos.github.io/future-js/#1)

1. Promises

    * Promises are an IOU for something that returns something in future.
    * ajax call
    * access to webcam
    * resize image
    * almost everything is async
    * Most new browser APIs are built on promises or observables. ex.  Fetch, axios, web animation api, paymentrequest

* beauty of promises is that you can avoid call back hell.
* .then() still kinda callback-y

* enter async + await
  ```js
    moveTo(50, 50)
      .then(() => moveTo(20, 20))
      .then(() => moveTo(20, 20))
      .then(() => moveTo(20, 20))

    async
  ```

  * JS is almost entirely async and non blocking

1. mark function as async
  ```js
    async function go() {
      await sleep(1000);
      const respone = await sleep(750);
      console.log(response);
    }
  ```

1. try/catch for error handling, async functions return a promise.

1. Intersection Observer
* How do you know when an element is on screen?
* With Intersection Observer you can be alerted when an element is fully or partially scrolled into or out of view.
  * animate elements on scroll
  * lazy load images
  * sticky headers

```js
  const options = {
    root: document.querySelector('.scrollingDiv');
    rootMargin: '100px'
    threshold: [0, 0.5, 1.0]
  }

  const observer = new IntersectionObserver();

  const callback = (entries, obserer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 1) {
        entry.target.classList.add('visible');
      }
    })
  }
  ```

1. Payment Request API
* new standard to request billing and shipping information from user.  Can pass to any cc processsing third party.
* Your broser does not charge your card, only creates token to pass to your service.
* Is it secure?  Yes, you don't handle the CC numbers you just pass the token.

1. getUserMedia()

```js

  const video = document.querySelector('.video')
  async function go() {}

```

1. Resize Observer