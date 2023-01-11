const { BrowserWindow } = require("electron");
const PATH = require("path");
const Utils = require("../Utils");

const CONFIGS_WINDOW = {
	window: null
};

CONFIGS_WINDOW.init = () => {
	CONFIGS_WINDOW.window = new BrowserWindow({
		width: 1280,
		height: 720,
		show: false,
		webPreferences: {
			preload: PATH.join(__dirname, "preload.js")
		}
	});

	CONFIGS_WINDOW.window.once("ready-to-show", () => {
		CONFIGS_WINDOW.window.show();
	});

	if (Utils.isDev()) {
		CONFIGS_WINDOW.window.loadURL("http://localhost:3000/configs");
	} else {
		CONFIGS_WINDOW.window.loadURL("app://-/configs");
	}
};

module.exports = CONFIGS_WINDOW;
