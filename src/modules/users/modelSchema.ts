import { model, Schema, Document } from "mongoose";

export interface Interface extends Document {
  name: string;
  username: string;
  password: string;
  comparePassword: (password: string) => Promise<boolean>;
  encryptPassword: (password: string) => Promise<string>;
}

const modelSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

export default model<Interface>("users", modelSchema);
