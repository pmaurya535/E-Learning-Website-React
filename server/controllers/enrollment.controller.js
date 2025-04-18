import Enrollment from "../models/enrollment.model.js";

export const getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find()
      .populate("user", "name") // must match your User model field
      .populate("course", "courseTitle"); // must match your Course model
      

    const formatted = enrollments.map((e) => ({
      id: e._id,
      name: e.user?.name || "N/A",
      courseTitle: e.course?.courseTitle || "N/A",
      date: e.date,
    }));

    res.json(formatted);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Failed to fetch enrollments" });
  }
};
