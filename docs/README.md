# Installation

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
import {AutosizeController} from "stimulus-library";

Application.register(AutosizeController);
```
