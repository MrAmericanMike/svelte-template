# Svelte-Electron

This template uses the Svelte-Base branch and on top of it adds Electron.
Changes for this branch. `main.js` (The Svelte entry point) is now `app.js`
`main.js` is the Electron App entry point.

This package comes with hot-reload while using `npm run dev`

### Usage:

In the folder we want to install the template

`npx degit MrAmericanMike/svelte-template#electron`

`npm install`

`npm run dev`

***

Installed on VSCode:
* https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
* https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode

### What's missing?

* Still haven't added scripts to build the Electron App and let it ready to distribute. This could be done following [electron-builder](https://www.electron.build/) Documentation and OS Specific cases.
* Needs optimized `script` to launch development in Electron at once.
* https://www.youtube.com/watch?v=yEmtAKyiLtQ

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

