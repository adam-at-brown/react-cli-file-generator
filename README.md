# CLI Tool for base React Component Files

## This is to be added to a React Component Library

### Installation

#### Add to the scripts in your `package.json` to have

```
"scripts": {
  "make": "node ./gen-templates $1"
}
```

#### copy `gen-templates` directory and contents to the root of your project

### Usage

Run `yarn make MyComponentName` in your projects directory. It will then add the following to your `src/components` directory

```
MyComponentName
  - index.ts
  - MyComponentName.stoies.jsx
  - MyComponentName.test.tsx
  - MyComponentName.tsx
  ```

  and add the appropriate `import` and export to the `index.ts` file on `src`
  
  *it does work in this project as well if you wish to test it out
