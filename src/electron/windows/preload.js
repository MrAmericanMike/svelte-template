const { contextBridge, ipcRenderer } = require("electron");

const API = {
	openConfigsPage: (data) => {
		ipcRenderer.send("openConfigsPage", data);
	}
};

contextBridge.exposeInMainWorld("API", API);
