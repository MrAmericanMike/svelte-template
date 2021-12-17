# Svelte-Ionic

`Work in progress - Need to add Capacitor`
`Ionic is installed as a devDependency but is not been used - Ionic is imported from a CDN`
	This will have a "fix" when I figure out the correct way to import it into the project.

### Usage:

In the folder we want to install the template

`npx degit MrAmericanMike/svelte-template#ionic`

`npm install`

`npm run dev`

## For a more complete base template check:

> [Svelte Ionic App](https://github.com/Tommertom/svelte-ionic-app)

***

Installed on VSCode:
* https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
* https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode

### VSCODE Workspace Settings

```json
{
	"folders": [
		{
			"path": "."
		}
	],
	"settings": {
		"eslint.validate": [
			"javascript",
			"css"
		],
		"editor.codeActionsOnSave": {
			"source.fixAll.eslint": true
		},
		"editor.formatOnSave": true,
		"[svelte]": {
			"editor.defaultFormatter": "svelte.svelte-vscode"
		}
	}
}
```

## Why this repo is even a thing?

* It presets most of the linting options I like
* It provides a base to work with Svelte under different scenarios

***

## Any feedback is welcome, just create an [issue](https://github.com/MrAmericanMike/svelte-template/issues)

