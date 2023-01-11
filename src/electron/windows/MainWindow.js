const { BrowserWindow } = require("electron");
const PATH = require("path");
const Utils = require("../Utils");
const serve = require("electron-serve");

const loadURL = serve({ directory: "../../public" });

const MAIN_WINDOW = {
	window: null,
	init: () => {
		MAIN_WINDOW.window = new BrowserWindow({
			width: 1280,
			height: 720,
			show: false,
			webPreferences: {
				preload: PATH.join(__dirname, "preload.js")
				// nodeIntegration: true
			}
		});
		MAIN_WINDOW.window.once("ready-to-show", () => {
			MAIN_WINDOW.window.show();
		});

		if (Utils.isDev() && !Utils.isSimulate()) {
			MAIN_WINDOW.window.loadURL("http://localhost:3000");
		} else {
			console.log("simulate");
			loadURL(MAIN_WINDOW.window);
		}
	}
};

module.exports = MAIN_WINDOW;
