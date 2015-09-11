## JavaScript
All Javascript related articles.

- [MVC Architecture](https://developer.chrome.com/apps/app_frameworks) - overall knowledge about MVC architecture
- [Building a desktop application with Electron](https://medium.com/developers-writing/building-a-desktop-application-with-electron-204203eeb658) - fundementals behind building an electron app, structuring files, communicating between windows and processes
- [DevTools Tips For Sublime Text Users](https://medium.com/@addyosmani/devtools-tips-for-sublime-text-users-cdd559ee80f8) - usefull keyboard shortcuts or less known features of Chrome dev tools
- [Debounce and Throttle: a visual explanation](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation) - excellent guide for learning debounce and throttling
- [Welcome to the front, new JavaScript recruit! Good to have you.](https://medium.com/humans-create-software/welcome-to-the-front-new-javascript-recruit-good-to-have-you-6dc4dff2b773) - basic info about what hip JavaScripters should be doing
- [How to miss the point when comparing web framework performance](https://medium.com/@djsmith42/how-to-miss-the-point-when-comparing-web-framework-performance-50ac0d8d9d71) - title says it all
- [The Evolution of Asynchronous JavaScript](https://blog.risingstack.com/asynchronous-javascript/) - new information about genrators async in es7
- [You’re welcome: cutting the mustard then and now.](https://medium.com/@zeldman/you-re-welcome-cutting-the-mustard-then-and-now-f339abd9e4c5) - about the history of cutitng mustard and web standarts
- [Measuring JavaScript Functions’ Performance](http://www.sitepoint.com/measuring-javascript-functions-performance/) - about practices of measuring performance of function. You never know the perforamnce until you measure it, its possible that on paper faster function might be actualy slower
- [Staying relevant as a programmer](https://medium.com/humans-create-software/staying-relevant-as-a-programmer-e9f18b1b0e43) - about staying relevant by learning the fundementals over tools.
- [Lint Like It’s 2015](https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48) - godlike tutorial about setting up eslint to work with es6(babel), react and sublime
- [5-step quick start guide to ESLint](http://codeutopia.net/docs/eslint/) - covers briefly what `Lint Like It’s 2015` tells but includes how to add an automatic git hook for linting
- [Want to learn JavaScript in 2015?](https://medium.com/@_cmdv_/i-want-to-learn-javascript-in-2015-e96cd85ad225) - about how the author learned JavaScripts and his recommendation on how others should learn it
- [Javascript is the new Java](https://medium.com/@Maephisto/javascript-is-the-new-java-d14f0585d05e) - `If you want to build iOS, (Android, soon), MacOS, Windows, Linux or Web apps and you want to master only one language, choose Javascript.`

### ES6(2015)
- [ECMAScript 6 modules: the final syntax](http://www.2ality.com/2014/09/es6-modules-final.html) - about es2015 modules
- :tv: [Javascript ES6 Cheatsheet #1 - the best of JS ES6](https://www.youtube.com/watch?v=AfWYO8t7ed4) - an authors thoughts on usefull ES6 features. Very usefull about destructing function variables in fucntions `funcion calcDim({width, heigth, max:25}){...}` that can be called by `calcDim({width: 10, height: 240})` or `calcDim({width: 10, height: 240, max: 14})` and template strings
- :tv: [Javascript ES6 Cheatsheet #2 - the best of JS ES6](https://youtu.be/LmL0Gh193M0) - about `let`, `const`, `class`, arrow functions and modules. Great tutorial, but nothing new for me.
- :tv: [Javascript Generators - THEY CHANGE EVERYTHING - ES6 Generators Harmony Generators](https://youtu.be/QO07THdLWQo) - new perspective on generators, so far understood them wrong. Usefull to write asynchronous code that like synchronous. Example getting user then his profile, profile data etc.
- :tv: [Are you bad, good, better or best with Async JS? JS Tutorial: Callbacks, Promises, Generators](https://youtu.be/obaSQBBWZLk) - general tutorial about promises and how generators are better for async callback handling.
- :tv: [Javascript is Weird...and AWESOME](https://www.youtube.com/playlist?list=PLoYCgNOIyGABI011EYc-avPOsk1YsMUe_)(5 videos) - video series that covers such fundemental aspects of JavaScript as `First class functions`, `Event-driven Environment`, `Closures`, `Scope`, `Context` a.k.a `this`.

### Node.js
- :tv: [Benjamin Gruenbaum - io.js and the future of server side JavaScript | YGLF2015](https://www.youtube.com/watch?v=LGpmUyFnyuQ) - about io.js, es2015, contributing to os contributions
- [40 NPM Modules We Can’t Live Without](https://medium.com/startup-study-group/40-npm-modules-we-can-t-live-without-36e29e352e3a)
- [The Incomplete Collection of
Node.js Performance Tips](https://medium.com/node-and-beyond/the-incomplete-collection-of-node-js-performance-tips-94cc712661bd) - talks about using node.js [clusters](https://nodejs.org/api/cluster.html), view caching by `app.set('view cache', true);` in express, client side session variables, datba optimizations
- [5 Easy Performance Tweaks for Node.js Express](http://www.sitepoint.com/5-easy-performance-tweaks-node-js-express/?utm_source=nodeweekly&utm_medium=email) - nothing new
- [Node.js in Production](http://blog.carbonfive.com/2014/06/02/node-js-in-production/) - GREAT tutorial about clustering node process, seting up a load balancer, automatic deployment, automatic node process restart handler
- [Node.js v4.0.0 — Node at its best](https://medium.com/@nodesource/node-js-v4-0-0-node-at-its-best-54a93fd2e0c6) - about Node v4 release and its future
- :tv: [Deploying node.js applications #2 - provision server & setup flightplan](https://youtu.be/XxRuW1pfGTI) - deploying node.js applications with [flightplan](https://github.com/pstadler/flightplan). More extensible then capistrano. Checkout the gist in the description for a sample file. 
- :tv: [Deploying Node.js Applications - Deploy Node the right way - as an Upstart Service](https://youtu.be/BJZZnhGtR4A) - addding a system service with `upstart` so that the server restarts and boots automaticly in favour of forever. A single config that can be launched `start <service-name>` and `stop <service-name>`. Talks how to add specific sudo commands to a non-sudo user.

### React.js
- [Stop Using React for EVERYTHING!](https://medium.com/@zackargyle/stop-using-react-for-everything-c8297ac1a644) - nothing new
- [React Native In Production](https://medium.com/@clayallsopp/react-native-in-production-2b3c6e6078ad) - about integrating React Native in their iOS app production and what conclusions they had about using it.
- [Smart and Dumb Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) - about component seperation beetween rendered dom and app logic
- [Ajax Calls with React and Flux](http://www.thedreaming.org/2015/03/14/react-ajax/) - looks at different ways that ajax calls can be made. Either in component[bad], action[better], store[better] - going voer the pros and cons of each. But there isn't a clear best solution - yet.
- :tv: [reactjs - Learn React, Flux, and Flow: Part I](https://www.youtube.com/watch?v=Pd6Ub7Ju2RM) - introduction about react
- :tv: [reactjs - Learn React, Flux, and Flow: Part II](https://www.youtube.com/watch?v=iR22EWW-CVc) - about react-router and flux
- :tv: [reactjs - Learn React, Flux, and Flow: Part III](https://www.youtube.com/watch?v=6fhTawDEE9k) - about api calls, [radium](https://github.com/FormidableLabs/radium). [Git repo](https://github.com/FormidableLabs/recipes-flux)
- :tv: [reactjs - netflix - tony casparro - chasing 60fps](https://www.youtube.com/watch?v=g01dGsKbXOk) - about how netflix redesigned app with help react and challenges/problems they faced

### D3.js
- [a fun, difficult introduction to d3](http://www.macwright.org/presentations/dcjq/) - introduction to d3
- [Thinking with Joins](http://bost.ocks.org/mike/join/) - about the importance and way it gets managed in d3
- [Binding data](http://alignedleft.com/tutorials/d3/binding-data) - about data binding in d3