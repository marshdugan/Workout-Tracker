const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
	day: Date,
	exercises: [
		{
      type: {
        type: String,
        require: true
      },
      name: {
        type: String,
        require: true
      },
      duration: Number,
      distance: Number,
      weight: Number,
      reps: Number,
      sets: Number
		}
	]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
