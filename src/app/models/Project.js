const mogoose = require("../../database");

const ProjectSchema = new mogoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	user: {
		type: mogoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	tasks: [{
		type: mogoose.Schema.Types.ObjectId,
		ref: 'Task',
	}],
	createAt: {
		type: Date,
		default: Date.now(),
	},
});


const Project = mogoose.model("Project", ProjectSchema);

module.exports = Project;
