# Svelte-Template

## Usage:

In the folder we want to clone the template you need to run this command, replacing the #branch with the desired one you want to use. For example, to get the `basic` branch you would do:

`npx degit MrAmericanMike/svelte-template#basic`

`npm install`

`npm run dev`

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