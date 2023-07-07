


const scriptsInEvents = {

	async Egame_Event1_Act1(runtime, localVars)
	{
		screen = 3;
		
	},

	async Egame_Event1_Act2(runtime, localVars)
	{
		localStorage.setItem('screen', '3');
	},

	async Egame_Event1_Act7(runtime, localVars)
	{
		localStorage.setItem('color', '#fcf99b');
	},

	async Egame_Event1_Act10(runtime, localVars)
	{
		runtime.globalVars.per2 = localStorage.getItem('screenshot2');
	},

	async Egame_Event8_Act1(runtime, localVars)
	{
		runtime.globalVars.per = localStorage.getItem('screenshot');
	},

	async Egame_Event16_Act2(runtime, localVars)
	{
		localStorage.setItem('color', runtime.globalVars.HEXcolor);
	},

	async Egame_Event18_Act2(runtime, localVars)
	{
		screen = 3;
		
	},

	async Egame_Event18_Act3(runtime, localVars)
	{
		localStorage.setItem('screen', '3');
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

