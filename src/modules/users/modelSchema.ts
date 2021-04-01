import { model, Schema, Document } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

export interface Interface extends Document {
  name: string;
  username: string;
  password: string;
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

modelSchema.plugin(mongoosePaginate);
export default model<Interface>("users", modelSchema);
