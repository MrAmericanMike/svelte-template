# Svelte-Electron

This templase uses the Svelte-Base branch and on top of it adds Electron.
Changes for this branch. `main.js` (The Svelte entry point) is now `app.js`
(Changed `rollup.config.js` to reflect this change)
`main.js` is the Electron App entry point.

This package comes with hot-reload while using `npm run dev`

### Usage:

In the folder we want to install the template

`npx degit MrAmericanMike/svelte-template#electron`

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

