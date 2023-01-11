const { ipcMain } = require("electron");

const CONFIGS_WINDOW = require("./windows/ConfigsWindow");

const IPCMain = {
	init: () => {
		ipcMain.on("openConfigsPage", (event, data) => {
			console.log(data);
			CONFIGS_WINDOW.init();
		});
	}
};

module.exports = IPCMain;
