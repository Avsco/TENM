/* Recien trabajamos con las consulatas de la base de datos */
import ModelSchema, { Interface } from "./modelSchema";

class Service {
  async show(id: string): Promise<Interface | null> {
    const model = await ModelSchema.findById(id);
    if (!model) return null;
    return model;
  }

  async put(id: string, newModel: any): Promise<Interface | null> {
    const updated = await ModelSchema.findByIdAndUpdate(id, newModel, {
      new: true,
    });
    if (!updated) return null;
    return updated;
  }

  async signIn(username: string, password: string): Promise<Interface | null> {
    const model = await ModelSchema.findOne({ username: username });
    if (!model) return null;

    const isMatch = model.password == password;
    if (isMatch) return model;

    return null;
  }

  async signUp(model: Interface): Promise<Interface> {
    const newModel = new ModelSchema(model);
    await newModel.save();
    return newModel;
  }
}

export default new Service();
