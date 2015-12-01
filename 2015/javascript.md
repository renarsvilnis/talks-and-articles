## JavaScript
All Javascript related articles.

- [MVC Architecture](https://developer.chrome.com/apps/app_frameworks)
- [Building a desktop application with Electron](https://medium.com/developers-writing/building-a-desktop-application-with-electron-204203eeb658) - fundementals behind building an electron app, structuring files, communicating between windows and processes.
- [DevTools Tips For Sublime Text Users](https://medium.com/@addyosmani/devtools-tips-for-sublime-text-users-cdd559ee80f8) - usefull keyboard shortcuts or less known features of Chrome dev tools.
- [Debounce and Throttle: a visual explanation](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation) - excellent guide for learning debounce and throttling.
- [Welcome to the front, new JavaScript recruit! Good to have you.](https://medium.com/humans-create-software/welcome-to-the-front-new-javascript-recruit-good-to-have-you-6dc4dff2b773) - basic info about what hip JavaScripters should be doing.
- [How to miss the point when comparing web framework performance](https://medium.com/@djsmith42/how-to-miss-the-point-when-comparing-web-framework-performance-50ac0d8d9d71) - title says it all.
- [The Evolution of Asynchronous JavaScript](https://blog.risingstack.com/asynchronous-javascript/) - new information about genrators async in es7.
- [You’re welcome: cutting the mustard then and now.](https://medium.com/@zeldman/you-re-welcome-cutting-the-mustard-then-and-now-f339abd9e4c5) - about the history of cutitng mustard and web standarts.
- [Measuring JavaScript Functions’ Performance](http://www.sitepoint.com/measuring-javascript-functions-performance/) - about practices of measuring performance of function. You never know the perforamnce until you measure it, its possible that on paper faster function might be actualy slower.
- [Staying relevant as a programmer](https://medium.com/humans-create-software/staying-relevant-as-a-programmer-e9f18b1b0e43) - about staying relevant by learning the fundementals over tools.
- [Lint Like It’s 2015](https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48) - godlike tutorial about setting up eslint to work with es6(babel), react and sublime.
- [5-step quick start guide to ESLint](http://codeutopia.net/docs/eslint/) - covers briefly what `Lint Like It’s 2015` tells but includes how to add an automatic git hook for linting.
- [Want to learn JavaScript in 2015?](https://medium.com/@_cmdv_/i-want-to-learn-javascript-in-2015-e96cd85ad225)
- [Javascript is the new Java](https://medium.com/@Maephisto/javascript-is-the-new-java-d14f0585d05e) - `If you want to build iOS, (Android, soon), MacOS, Windows, Linux or Web apps and you want to master only one language, choose Javascript`.
- :tv: [Factory Functions in JavaScript](https://www.youtube.com/watch?v=ImwrezYhw4w) - about factory functions for more readable code. It is simply a function that returns an object and uses closures to have private class variables, but at the 2x initiantion cost from classes.
- [Optimization killers in V8 engine](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers) - a guide that covers most patterns that cause the containing function go to "deopitmization hell". Haven't got into it, but usefull if needed to squeze out performance out of a node.js code.
- :tv: [Jenn Schiffer: What's the Harm In Sorting: Sanitizing Inputs For More Optimized JS [JSConf2014]](https://www.youtube.com/watch?v=pj4U_W0OFoE&index=18&list=WL) - sarcastic talk about sorting in JavaScript - Useless.
- :tv: [Sebastián Markbage: Moving JS from Libraries to Polyfills](https://www.youtube.com/watch?v=UZjqdW9_qSg&index=43&list=WL) - one JavaScript to remove [bikeshedding](https://en.wikipedia.org/wiki/Parkinson%27s_law_of_triviality). So `No Abstraction` > `Wrong Abstraction`, use transpilers. [Polyfill service](https://cdn.polyfill.io/v1/docs/).
- :tv: [Spike Brehm: Building Isomorphic Apps](https://youtu.be/tcbcERdxjIc) - pros and cons of isomorphic webapps. Listing webapps that uses it, and how they do it. Talks about `Environment agnostic` (example - Handlebars) and `Shimmed per environment` (example - [Superagent](https://visionmedia.github.io/superagent/)) works in browser and node.js but the code that handles the processes are different. Mentions `browser`, a package.json field for browserify to swap out modules or just different libraries.
- :tv: [Sam Saccone: Recreating a dialup modem in javascript](https://youtu.be/UKa20yPzGbU) - history of communication - morse code, borse code. About Baud rate and why dial-ups has the iconic sound due to baud and how he built a dialup modem in JavaScript wtih help of [Goertzel algorithm](https://en.wikipedia.org/wiki/Goertzel_algorithm) for getting a single frequenc intensity over time from a audio process nodes and other algorithms for encoding
- [12 Rules for Professional JavaScript in 2015](https://medium.com/@housecor/12-rules-for-professional-javascript-in-2015-f158e7d3f0fc) - js in `.js` file, use json instead of creating dynamic javascript server, js at bottom of page, use linters and automated tests.
- :tv: [Quo vadis, JavaScript?](https://www.youtube.com/watch?v=GvT5s1HQVRg) - about the current state of JavaScript and where is it going. About new IE. Don't detect browsers by user-agents rather then functionality.
- :tv: [HTML5DevConf: Rajesh Kumar, Uber: Data Structures with Javascript](https://youtu.be/7WWHZgoidu0) - goes over O-notation algorithm speed logn, n, nlogn n^2, n^3. Also cover basic and advanced data structures - which I have learned in CS classes, but covers Bloom Filters.
- [We spent a week making Trello boards load extremely fast. Here’s how we did it.](http://blog.fogcreek.com/we-spent-a-week-making-trello-boards-load-extremely-fast-heres-how-we-did-it/) - about the optimization trello team did to make the initial render faster by reducing layout trashing, freeing up UI by changing `click … long task … paint` to `click … paint … long task`. Placing some images on GPU by `translateZ: 0`.
- :tv: [Tim Griesser: Making Relational Cool Again (or: JavaScript on ACID)](https://youtu.be/19Av0Lxml-I) - talk about how make Web applications with old RDBMS.
- [IndexedDB, WebSQL, LocalStorage – what blocks the DOM?](http://nolanlawson.com/2015/09/29/indexeddb-websql-localstorage-what-blocks-the-dom/) - writes about how IndexedDB, WebSQL, LocalStorage blocks the DOM in most browsers and that WebWorkers can solve the issue as you can use and only use IndexedDB in WebWorkers (except safari for now). Concludes that IndexedDB doesn't work so fast as promised.
- :notebook: [10 Interview Questions Every JavaScript Developer Should Know](https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95) - TODO
- :notebook: [Optimizing JavaScript code](https://developers.google.com/speed/articles/optimizing-javascript) - build large strings from arrays with a join, define class default properties and methods outside of constructor, avoid using closures as they don't allow optimizations, avoid with, don't forget to remove event listeners to avoid memory leak.
- [The Open Minded Explorer’s Guide to Object Composition](https://medium.com/javascript-scene/the-open-minded-explorer-s-guide-to-object-composition-88fe68961bed) - favour composition `Object.assign({}, a, b, c)` with factory functions over inheritance `class Dog extends Animal` as it allows more flexability as something can be and has stuff. Example - Dog class can be an Animal and it has Bark, which with inheritance woudln't be so easy to achieve.
- [Parallaxin'](http://www.html5rocks.com/en/tutorials/speed/parallax/) - for optimized parallax use *DOM elements and absolute positioning* or *DOM elements and 3D transforms* or *canvas or WebGL* similar as [flipbook does](engineering.flipboard.com/2015/02/mobile-web/) and top of all use *requestAnimationFrame*.
- :tv: [JSConf 2015 Charlie McConnell](https://www.youtube.com/watch?v=6xZeJS4_2J8) - Peeble developers talk about the JavaScript Pebble api and Containers such as Docker and CoreOS.
- :tv: [JSConf 2015 Laney Kuenzel](https://www.youtube.com/watch?v=mmke4w4gc6c&list=WL&index=214) - talk about building *relay*, *GraphQL*
- :tv: [JSConf 2015 Jory Burson](https://www.youtube.com/watch?v=Yn9RHDPwSic&index=213&list=WL) - talks about issues faced when creating open source projects on organisations. Created an MVC (Mission Value Change).
- :tv: [JSConf 2015 Kassandra Perch](https://youtu.be/M5gUJntx-CY) - about robotics with JavaScript and Node. Nothing particulary worthy.
- :tv: [JSConf 2015 Myles Borins](https://youtu.be/gmQ1kcj8Q2k) - talk about the basic fundementals of sound - rate, bit depth, sampling rate. Why the values are such and how we have come to this.
- :notebook: :tv: [JSConf 2015 Mike Ball](https://youtu.be/aGIJWWKLzF8) - headless browser testing with Xvfb which might help when testing Flash, NW.js Polymer web-components. Xvfb allows to run GUI applications with no GUI withing a vagrant box. Also mentions how to debug and see the gui from an external source (for example mac). [Repo on how to debug nw.js apps with that pattern.](https://github.com/mdb/nw-testing-box)
- [nodeValue vs innerHTML and textContent. How to choose?](http://stackoverflow.com/a/21311670/1378261) - use `textContent` instead of `innerHTML` as it doesn't do any html parsing and [is safe against XSS](https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet#Web_Messaging).
- [Michael Matuzak: Amazing Things One Can Do With JS and the NES | JSConf US 2015](https://youtu.be/NiOW-swy2Ys)
- :notebook: [Not so micro optimizations](https://medium.com/@cramforce/not-so-micro-optimizations-f867c47b832d) - Shows how to polypill `prefetch` (*only non iOS devices*) and `preconnect`.
- [How JavaScript Event Delegation Works](https://davidwalsh.name/event-delegate)
- [You should use [insert library/framework], it's the bestestest! / Paul Lewis](https://youtu.be/_yCz1TA0EL4) - [big rig](https://aerotwist.com/blog/bigrig/) for performance testing
- [Why you should embrace JavaScript](https://medium.com/@lukin0110/why-you-should-embrace-javascript-64b2b8209145#.huoua34eq)

### ES6 (ES2015)
- [ECMAScript 6 modules: the final syntax](http://www.2ality.com/2014/09/es6-modules-final.html) - about es2015 modules.
- :tv: [Javascript ES6 Cheatsheet #1 - the best of JS ES6](https://www.youtube.com/watch?v=AfWYO8t7ed4) - an authors thoughts on usefull ES6 features. Very usefull about destructing function variables in fucntions `funcion calcDim({width, heigth, max:25}){...}` that can be called by `calcDim({width: 10, height: 240})` or `calcDim({width: 10, height: 240, max: 14})` and template strings.
- :tv: [Javascript ES6 Cheatsheet #2 - the best of JS ES6](https://youtu.be/LmL0Gh193M0) - about `let`, `const`, `class`, arrow functions and modules. Great tutorial, but nothing new for me.
- :tv: [Javascript Generators - THEY CHANGE EVERYTHING - ES6 Generators Harmony Generators](https://youtu.be/QO07THdLWQo) - new perspective on generators, so far understood them wrong. Usefull to write asynchronous code that like synchronous. Example getting user then his profile, profile data etc.
- :tv: [Are you bad, good, better or best with Async JS? JS Tutorial: Callbacks, Promises, Generators](https://youtu.be/obaSQBBWZLk) - general tutorial about promises and how generators are better for async callback handling.
- :tv: [Javascript is Weird...and AWESOME](https://www.youtube.com/playlist?list=PLoYCgNOIyGABI011EYc-avPOsk1YsMUe_)(5 videos) - video series that covers such fundemental aspects of JavaScript as `First class functions`, `Event-driven Environment`, `Closures`, `Scope`, `Context` a.k.a `this`.
- [ES6 Spread and Butter in Depth](http://ponyfoo.com/articles/es6-spread-and-butter-in-depth) - `let test = (a, b, ...c) => [a, b, c];` `test(1,2,3,4,5,6)); // [1,2,[3,4,5,6]]`, also looks at default operators on functions.
- [ES6 Iterators in Depth](http://ponyfoo.com/articles/es6-iterators-in-depth) - object iterators useful to make cleaner iteration with help of `Array.from()` and `for-of`.
- [Why is there a “temporal dead zone” in ES6?](http://www.2ality.com/2015/10/why-tdz.html) - "temporal dead zone" place to cathc programming errors, such as using an `let` or `const` before declaration will cause a ReferenceError, but undefined variables will just return undefined.
- [Hail, Babel! The Transpiling Overlord](http://developer.telerik.com/featured/hail-babel-the-transpiling-overlord/?utm_source=javascriptweekly&utm_medium=email)
- [JavaScript ES6+: var, let, or const?](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

### ES2016
- :notebook: [Exploring ES2016 Decorators](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841) - wrapper functions that can go on classe methods on class itselfs. It is possible to use multiple decorators for a single class, class-method.


### Node.js
- :tv: [Benjamin Gruenbaum - io.js and the future of server side JavaScript | YGLF2015](https://www.youtube.com/watch?v=LGpmUyFnyuQ) - about io.js, es2015, contributing to os contributions.
- :notebook: [40 NPM Modules We Can’t Live Without](https://medium.com/startup-study-group/40-npm-modules-we-can-t-live-without-36e29e352e3a) - the title says it all.
- [The Incomplete Collection of
Node.js Performance Tips](https://medium.com/node-and-beyond/the-incomplete-collection-of-node-js-performance-tips-94cc712661bd) - talks about using node.js [clusters](https://nodejs.org/api/cluster.html), view caching by `app.set('view cache', true);` in express, client side session variables, database optimizations.
- [5 Easy Performance Tweaks for Node.js Express](http://www.sitepoint.com/5-easy-performance-tweaks-node-js-express/?utm_source=nodeweekly&utm_medium=email) - nothing new.
- [Node.js in Production](http://blog.carbonfive.com/2014/06/02/node-js-in-production/) - GREAT tutorial about clustering node process, seting up a load balancer, automatic deployment, automatic node process restart handler.
- [Node.js v4.0.0 — Node at its best](https://medium.com/@nodesource/node-js-v4-0-0-node-at-its-best-54a93fd2e0c6) - about Node v4 release and its future.
- :tv: [Deploying node.js applications #2 - provision server & setup flightplan](https://youtu.be/XxRuW1pfGTI) - deploying node.js applications with [flightplan](https://github.com/pstadler/flightplan). More extensible then capistrano. Checkout the gist in the description for a sample file. 
- :tv: [Deploying Node.js Applications - Deploy Node the right way - as an Upstart Service](https://youtu.be/BJZZnhGtR4A) - addding a system service with `upstart` so that the server restarts and boots automaticly in favour of forever. A single config that can be launched `start <service-name>` and `stop <service-name>`. Talks how to add specific sudo commands to a non-sudo user.
- [My 7 Node.js mantras](https://medium.com/@c2c/my-7-node-js-mantras-edd6c148e8dc) - use promises and es6, [semver](http://semver.org/), write tests, [get to know v8 engine](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers) and use linters. *Javascript is a language. Node.js a runtime. V8 is it’s engine.*
- [Useful tools for your Node.js projects](https://medium.com/@anephenix/useful-tools-for-your-node-js-projects-20fd1f7c860a) - all about testing tools - [Mocha](http://mochajs.org/), [CucumberJS](https://cucumber.io/), [Instabul](https://github.com/gotwarlost/istanbul), [Coveralls](https://coveralls.io/). Talks about code consistency and quality using linters, [Code Climate](https://codeclimate.com/), [Codacy](https://www.codacy.com/). Documentation creation with tools as [Raneto](http://raneto.com/). Keeping track of dependencies with [David](https://david-dm.org/) and [npm-dview](https://www.npmjs.com/package/npm-dview).
- [Best Practices for Deploying Node.js in Production](https://youtu.be/7TZrkJBxDJw) - mentions [`npm shrinkwarp`](https://docs.npmjs.com/cli/shrinkwrap) to freeze dependency versions then deploying, but vulnerable if any npm service is down. So he talks about a different way of using github to package node modules. In my opinion a way to complex way to deploy for most cases.
- [Pragmatic Semantic Versioning](https://ponyfoo.com/articles/semver) - avoid `~` and `^` as the tend to break stuff. Use `npm set save-exact true` to save curent versions.
- :tv: [Ryan Dahl: Original Node.js presentation](https://youtu.be/ztspvPYybIY) - node was created to solve concurrency, existing IO issues.
- [Fundamental Node.js Design Patterns]

### React and Flow*
- [Stop Using React for EVERYTHING!](https://medium.com/@zackargyle/stop-using-react-for-everything-c8297ac1a644)
- [React Native In Production](https://medium.com/@clayallsopp/react-native-in-production-2b3c6e6078ad)
- [Smart and Dumb Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [Ajax Calls with React and Flux](http://www.thedreaming.org/2015/03/14/react-ajax/)
- :tv: [reactjs - Learn React, Flux, and Flow: Part I](https://www.youtube.com/watch?v=Pd6Ub7Ju2RM)
- :tv: [reactjs - Learn React, Flux, and Flow: Part II](https://www.youtube.com/watch?v=iR22EWW-CVc)
- :tv: [reactjs - Learn React, Flux, and Flow: Part III](https://www.youtube.com/watch?v=6fhTawDEE9k)
- :tv: [reactjs - netflix - tony casparro - chasing 60fps](https://www.youtube.com/watch?v=g01dGsKbXOk)
- :tv: [React.js Conf 2015 - Hype!](https://www.youtube.com/watch?v=z5e7kWSHWTg)
- :tv: [Michael Ridgway - Isomorphic Flux at react-europe 2015](https://youtu.be/MrozpFEBEBE)
- [Pros and Cons of Facebook's React vs. Web Components (Polymer)](http://programmers.stackexchange.com/a/237762/198408) - Writes about why the native implementation of DOM is slower then react.js.
- [React-Motion and Animated](https://medium.com/@chenglou/react-motion-and-animated-4b3edf671cba) - writes about what animation problems there are and how [react-motion](https://github.com/chenglou/react-motion) and other libraries are or is trying solve these problems.
- :tv: [Sebastian Markbåge - DOM as a Second-class Citizen at react-europe 2015](https://youtu.be/Zemce4Y1Y-A) - talks about how react is a toolbox for abstractions for building other tools (such as components). Presents an idea bypass dom/cssom api and html/css model and let react talk to box tree directly, but beeing alongside the traditional html/css model. A w3 working group called houdini is trying to figure it out how to make it working browsers. Mentioned that facebook uses machine learning on packaging systems to detect which code fragments are more important and load first depending on usage data and use case. Crazy!
- [Atomic Components: Managing Dynamic React Components using Atomic Design — Part 1](https://medium.com/@yejodido/atomic-components-managing-dynamic-react-components-using-atomic-design-part-1-5f07451f261f) - writes about how to structure react projects by usage of enviroment(top level app, single), ecosystems (container components of multiple organism components, can be nested ecosystems). The first part doesn't look over other Atomomic design elements.
- [React Native — the solution to Hybrid apps?](https://medium.com/@satya164/react-native-solution-to-hybrid-apps-5ff4d5696061) - Compares React Native to other hybrid app solutions like PhoneGap, Cordova. React Native solves different WebView version problem. Mentions [Stetho](http://facebook.github.io/stetho/) as a tool for better debugging Android applications.
- [Functional Stateless Components in React 0.14](https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d) - statless components are awesome and use them, the still allow to define `propTypes`, `defaultProps`.
- [A cartoon guide to Flux](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207) - history of flux, and how all flux parts work.
- [A cartoon guide to Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6) - Redux solves Flux problems and more - hot reload, time travel *(undo/redo)*, 3rd party plugins iwht support of middlewares, reduced boilerplate, serverside rendering, develeper tools, [simplicity](http://stackoverflow.com/questions/32461229/why-use-redux-over-facebook-flux/32920459#32920459).
- :tv: [Dan Abramov - Live React: Hot Reloading with Time Travel at react-europe 2015](https://youtu.be/xsSnOQynTHs)
- :notebook: [The Provider and Higher-Order Component patterns with React](https://medium.com/@bloodyowl/the-provider-and-higher-order-component-patterns-with-react-d16ab2d1636)
- :notebook: [Introduction to Contexts in React.js](https://www.tildedave.com/2014/11/15/introduction-to-contexts-in-react-js.html) - context is a set of attributes that are implicitly passed down from an element to all of its children and grandchildren. Currently not documented but will change as of React v1.0.
- [React + Performance = ?](https://aerotwist.com/blog/react-plus-performance-equals-what/) - React performance on mobile isn't that good.
- [Mixins Are Dead. Long Live Composition](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750) - Higher-Order Components > Mixins.
- [Advanced Performance](https://facebook.github.io/react/docs/advanced-performance.html) - you can increase performance by implementing a `shouldComponentUpdate` method, instead of letting react compare virtual DOMs. Example a simple text component (*applies to most dump components aswell*), for these kind of situaction you can use the `PureRenderMixin`.
- [The React.js Way: Flux Architecture with Immutable.js](https://blog.risingstack.com/the-react-js-way-flux-architecture-with-immutable-js/)
- [Pros and Cons of using immutability with React.js](http://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/) - copy arrays - `[].concat(...)`, objects - `Object.assign({}, ...)`.
- [Understanding The React.js PureRenderMixin](http://ilikekillnerds.com/2015/10/understanding-the-react-js-purerendermixin/)
- [Functional UI and Components as Higher Order Functions](https://blog.risingstack.com/functional-ui-and-components-as-higher-order-functions/)
- :tv: [React.js Conf 2015 - Immutable Data and React](https://youtu.be/I7IdS-PbEgI)
- :tv: [React.js Conf 2015 - Making your app fast with high-performance components](https://youtu.be/KYzlpRvWZ6c) - seperation of huge DOM components that have frequent props ans state updates will increase performance, *loose coupling*, such as doing some manipulations on a table wrapper, won't trigger a heavy the table re-render. Wrap Components into Containers, where Container as data layers handle state, talk to stores and pass data to Components as props, issolating children from parent.
- [Why FluxComponent > fluxMixin](https://github.com/acdlite/flummox/blob/v3.5.1/docs/docs/guides/why-flux-component-is-better-than-flux-mixin.md) - favour controller components over mixins as you can predict the data flow more easily as there is a *owner/parent*.
- [React: A (very brief) talk about immutability.](https://medium.com/@cassiozen/a-brief-talk-about-immutability-and-react-s-helpers-70919ab8ae7c)
- [Managing UI Complexity With React: Part I](https://medium.com/@_alanbsmith/managing-ui-complexity-with-react-part-i-179b43a29728)
- [Managing UI Complexity With React: Part II](https://medium.com/@_alanbsmith/managing-ui-complexity-with-react-part-ii-6e0d65ab9357)
- [Best practices for building large React applications](http://blog.siftscience.com/blog/2015/best-practices-for-building-large-react-applications) - use `componentDidUpdate` to encapsulate functionality that would be needed to called in multiple places, enforce composition.
- [React Tips and Best Practices](http://aeflash.com/2015-02/react-tips-and-best-practices.html)
- :notebook: [Context](https://facebook.github.io/react/docs/context.html) - use context for themes, passing logged-in user, current language information.
- :tv: [Developer Experience & Tools](https://youtu.be/qXVakfdA040)
- [An iOS Developer on React Native](https://medium.com/ios-os-x-development/an-ios-developer-on-react-native-1f24786c29f0#.vo410nnjg)
- [Tips to handle Authentication in Redux](https://medium.com/@MattiaManzati/tips-to-handle-authentication-in-redux-4d596e11bb21#.jr6kwksj7) - use JSON Web Token for auth, response with: 401 - unauthenticated, 403 - no rights. Use namespaces for redux actions `AUTH_SET_TOKEN: 'auth/SET_TOKEN',`.
- :notebook: [Introducing the VelocityReact Library](https://fabric.io/blog/introducing-the-velocityreact-library) - *Velocity.js* animation library in *React.js*.
- :tv: [Jeremy Morrell - Flux in large applications - JSConfUY 2015](https://www.youtube.com/watch?v=Dm9NgjR5Jn4)
- [A Simple Way to Route with Redux](http://jlongster.com/A-Simple-Way-to-Route-with-Redux)
- :notebook: [Redux best practices](https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e) - shows a interesting way of structuring a redux project, name actions, reducers
- [Understanding Redux Middleware](https://medium.com/@meagle/understanding-87566abcfb7a)
- [Implementing a smart Login Modal with Redux, reselect and ReactJS](https://medium.com/@dorsha/implement-login-modal-with-redux-reselect-and-reactjs-668c468bcbe3#.jptwkpaon)
- :tv: [Abstracting just enough — James Long](https://youtu.be/764wvf8KuTw)
- :notebook: [Full-Stack Redux Tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html) -  covers testing, webpack, redux and a bit of immutable.js

### D3.js
- [a fun, difficult introduction to d3](http://www.macwright.org/presentations/dcjq/)
- [Thinking with Joins](http://bost.ocks.org/mike/join/)
- [Binding data](http://alignedleft.com/tutorials/d3/binding-data)
- [How to Make Charts with SVG](https://css-tricks.com/how-to-make-charts-with-svg/)

### WebRTC
- :tv: [Google: What's next for WebRTC?](https://youtu.be/HCE3S1E5UwY) - about future of WebRTC - defining open codes, `getUserMedia` only on https, massive performance increase on mobile devices and desktop.
- :tv: [Decisions & considerations in building your WebRTC app](https://youtu.be/HJU15kH5z3k) - about regular automated tests that check system availability, debugging WebRTC apps.

### WebPack
- [Backend Apps with Webpack (Part I)](http://jlongster.com/Backend-Apps-with-Webpack--Part-I) - part 1 on a guide for using WebPack for backend apps. Goes a little on how webpack works. Don't get it why you should webpack backend apps and so does [hackernews](https://news.ycombinator.com/item?id=9212088)
- [Beginner’s guide to Webpack](https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460) - things the author wished he knew when started with WebPack. Writes about defining configs, watching files, using `webpack-dev-server`, loads (*allow you to preprocess files as you require() or “load” them, example ES6 to ES5 transpile*) and preloaders (*they run before loaders, example linting*). Writes also about bundling ES6 files and adding react into the mix.
- [Browserify VS Webpack - JS Drama](http://blog.namangoel.com/browserify-vs-webpack-js-drama) - writes about differences and philosophies of Browserify and WebPack. Mentions how adding CSS, [`urify-emitter`](https://www.npmjs.com/package/urify-emitter), bundle splitting and react hot-loading is done withing each of the tools.
- :notebook: [webpack-howto](https://github.com/petehunt/webpack-howto) - cookbook for getting things done with WebPack which includes methods that guys at instagram does.
- [Building modular javascript applications in ES6 with React, Webpack and Babel](https://medium.com/@yamalight/building-modular-javascript-applications-in-es6-with-react-webpack-and-babel-538189cd485f) - guide on creating react components with webpack that has component specific code. Tips on publishing modules - adding `es6` field to `package.json`. Also covers how to test ES6 code with mocha by addding a compiler, adding instabul coverage, component seperation in react and backend which talks to eachother with [`postal.js`](https://github.com/postaljs/postal.js).
