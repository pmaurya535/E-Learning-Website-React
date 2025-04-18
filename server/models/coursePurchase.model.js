import mongoose from "mongoose";

const coursePurchaseSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "failed"],
    default: "pending",
    index: true, // optional, if you filter by status a lot
  },
  paymentId: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Optional virtual field (not required, but you can use it later)
coursePurchaseSchema.virtual('isSuccess').get(function () {
  return this.status === 'completed';
});

export const CoursePurchase = mongoose.model("CoursePurchase", coursePurchaseSchema);
