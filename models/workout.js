const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    required: "Type is required."
                },
                name: {
                    type: String,
                    required: "Name is required."
                },
                duration: {
                    type: Number,
                    required: "Enter duration in seconds"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                },
            }
        ]
    });

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;