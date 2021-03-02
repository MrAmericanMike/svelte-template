# Svelte-Ionic

`Work in progress - Need to add Capacitor`
`Ionic is installed as a devDependency but is not been used - Ionic is imported from a CDN`
	This will have when I figure out the correct way to import this into the project.

### Usage:

In the folder we want to install the template

`npx degit MrAmericanMike/svelte-template#ionic`

`npm install`

`npm run dev`

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

## Why?

> It presets all the linting options I like (for the most part as I'm still working on it)