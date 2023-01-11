const { app, BrowserWindow } = require("electron");
const IPCMain = require("./IPCMain");
const MAIN_WINDOW = require("./windows/MainWindow");
const Utils = require("./Utils");

require("electron-reload")(__dirname, {
	awaitWriteFinish: true
});

Utils.init(app);

IPCMain.init();

app.whenReady().then(() => {
	MAIN_WINDOW.init();
	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			MAIN_WINDOW.init();
		}
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});
