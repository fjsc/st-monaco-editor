st-monaco-editor
===========================
Monaco Editor Library for Angular v8 and above

## Demo
* [Simple Editor](https://stratio.github.io/st-monaco-editor/demo/index.html#/)
* [Diff Editor](https://stratio.github.io/st-monaco-editor/demo/index.html#/diff-editor)
* [Input Editor](https://stratio.github.io/st-monaco-editor/demo/index.html#/input-editor)

## Docs
* [Documentation](https://stratio.github.io/st-monaco-editor/index.html)

## Download & Installation
### Installing

You can install st-monaco-editor package from npm:

```
npm i @stratio/st-monaco-editor -S
```

Add the glob config to assets in angular.json:
```typescript
{
    ...
    "projects": {
      "APP_NAME": {
          ...
          "architect": {
              "build": {
                ...
                "options": {
                    ...
                    "assets": [
                      { 
                        "glob": "**/*", 
                        "input": "node_modules/monaco-editor/min", 
                        "output": "./assets/monaco/" 
                      },
                    ],
                    ...
                }
                ...
              }
            }
            ...
        }
    },
    ...
}
 ```
