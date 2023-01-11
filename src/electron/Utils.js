let isDevelopment;

const Utils = {
	init: (app) => {
		isDevelopment = !app.isPackaged;
	},
	isDev: () => {
		return isDevelopment;
	},
	isSimulate: () => {
		return process.env.SIMULATE;
	}
};

module.exports = Utils;
