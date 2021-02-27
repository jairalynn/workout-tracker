const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date,
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Type is required."
                },
                name: {
                    type: String,
                    trim: true,
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
    },
    {
        toJson: {
            virtuals: true,
        }
    }
);

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0)
})

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;