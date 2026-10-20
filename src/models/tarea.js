import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema(
  {
    nombreTarea: {
      type: String,
      unique: true,
      required: true,
      minLength: 4,
      maxLength: 100,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Tarea = mongoose.model('tarea', tareaSchema)

export default Tarea