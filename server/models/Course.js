import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseTitle: String,
  category: String,
  enrolledStudents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Course = mongoose.model("Course", courseSchema);
export default Course;
