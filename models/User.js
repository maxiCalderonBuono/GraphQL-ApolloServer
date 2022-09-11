import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.plugin(uniqueValidator);

export default model("User", UserSchema);
