const { app, BrowserWindow } = require("electron");

require("electron-reload")(__dirname, {
	awaitWriteFinish: true
});

const createWindow = () => {
	const mainWindow = new BrowserWindow({
		width: 1280,
		height: 720,
		webPreferences: {
			nodeIntegration: true
		}
	});
	mainWindow.loadFile("../public/index.html");
};

app.whenReady().then(() => {
	createWindow();
	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	})
});

app.on("window-all-closed", () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

