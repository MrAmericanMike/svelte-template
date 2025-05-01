# Svelte-Template

## Usage:

In the folder we want to clone the template you need to run this command, replacing the #branch with the desired one you want to use. For example, to get the `ionic` branch you would do:

`pnpx degit MrAmericanMike/svelte-template#ionic`

`pnpm install`

`pnpm run dev`

---

Installed on VSCode:

-   https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode

### VSCODE Workspace Settings

```json
{
	"folders": [
		{
			"path": "."
		}
	],
	"settings": {
		"editor.formatOnSave": true,
		"[svelte]": {
			"editor.defaultFormatter": "svelte.svelte-vscode"
		}
	}
}
```

## Why this repo is even a thing?

-   It presets most of the linting options I like
-   It provides a base to work with Svelte under different scenarios

---

## Any feedback is welcome, just create an [issue](https://github.com/MrAmericanMike/svelte-template/issues)

---

## Dropped branches `basic` `kit` and `page` For these ones use the package `pnpm create svelte-template` [Link](https://www.npmjs.com/package/create-svelte-template) It provides templates for Svelte, Svelte + Page and SvelteKit in Javascript or Typescript flavors.
