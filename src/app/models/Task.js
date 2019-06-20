const mogoose = require("../../database");

const TaskSchema = new mogoose.Schema({
	title: {
		type: String,
		required: true,
	},
	project: {
		type: mogoose.Schema.Types.ObjectId,
		ref: 'Project',
	},
	assignedTo: {
		type: mogoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	completed: {
		type: Boolean,
		required: true,
		default: false,
	},
	createAt: {
		type: Date,
		default: Date.now(),
	},
});

const Task = mogoose.model("Task", TaskSchema);

module.exports = Task;
