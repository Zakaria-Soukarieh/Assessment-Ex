const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
	{
		text: {
			type: String,
			required: [true, "Please add a text value"],
		},
		phone: {
			type: String,
			required: [true, "Please add a phone number"],
		},
		age: {
			type: Number,
			required: [true, "Please add an age"],
			min: [0, "Age must be a positive number"],
			max: [120, "Age must be less than or equal to 120"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Goal", goalSchema);
