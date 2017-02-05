
- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/)

## Accessibillity

- :notebook: :tv: [The art of labeling -- A11ycasts #12](https://youtu.be/8dCUzOiMRy4)
  - Enable Chrome devtools accessibillity tools under `chrome://flags`
  - Wrapping an `<input />` element in an `<label>` will specify the `name` attribute from the text content
  - `<input for="<id>" />` attribute references to an id. Works for `<button />`, `<input />`, `<select />` a.k.a native inputs
  - `aria-label="Menu"` attribute allows to add aria name . **Text if present in the element will override the `aria-label`**
  - `aria-labelledby="mens-shirts mens-shirt-btn <id>"` allow reference to different element (by `id`), such as `label` attribute in input fields. Can be composed with multiple entries to reference to itself
