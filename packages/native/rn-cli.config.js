const path = require('path')
module.exports = {
	projectRoot: __dirname,
	watchFolders: [path.resolve(__dirname, '../..')],
	// If, for some reason, Haste becomes unable to resolve a
	// module, you can try messing around with
	// "resolver.providesModuleNodeModules" and
	// "resolver.blacklistRE"
}
