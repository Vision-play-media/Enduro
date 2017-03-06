var yargs = require('yargs')

module.exports = {
	command: 'pull',
	desc: 'downloads remote content and merges with local',
	builder: () => {
		return yargs
			.usage('enduro juice pull')
	},
	handler: function (cli_arguments) {
		var enduro_instance = require('../../index')

		enduro_instance.init()
			.then(() => {
				var juicebox = require(enduro.enduro_path + '/libs/juicebox/juicebox')

				if (enduro.flags.force) {
					return juicebox.pull(true)
				} else {
					return juicebox.pull()
				}
			})
	}
}
