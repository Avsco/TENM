import service from "./service";
import { Interface } from "./modelSchema";

class Model {
  async show(id: string): Promise<Interface | null> {
    return await service.show(id);
  }

  async put(id: string, model: any): Promise<Interface | null> {
    return await service.put(id, model);
  }

  async signIn(username: string, password: string): Promise<Interface | null> {
    return await service.signIn(username, password);
  }

  async signUp(model: any): Promise<Interface | null> {
    return await service.signUp(model);
  }
}

export default new Model();
