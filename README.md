# Stimulus-Library

[Documentation](https://sub-xaero.github.io/stimulus-library/)  |  [Full List of Controllers](https://sub-xaero.github.io/stimulus-library/)

---
![npm](https://img.shields.io/npm/dt/stimulus-library)
![npm bundle size (version)](https://img.shields.io/bundlephobia/minzip/stimulus-library/latest?label=minified%20size)
---

## Installation

To get started, you'll need to add the `stimulus-library` package to your project.

To do so, either add `stimulus-library` to your package.json manually

```json
{
  "dependencies": {
    "stimulus-library": "latest"
  }
}
```

or run
`npm install --save stimulus-library` or `yarn add stimulus-library`

Then, to get started import and register the controllers you want to use

```js
import { Application } from "stimulus";
import { AutoSubmitFormController } from "stimulus-library";

const application = Application.start();
application.register("auto-submit-form", AutoSubmitFormController);
```

## Tree-shaking
If you use the ESM builds of the library, this library fully supports tree-shaking, 
only the controllers you directly import will be bundled with your application.  

