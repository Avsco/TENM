import service from "./service";
import { Interface } from "./modelSchema";

class Model {
  show = async (id: string): Promise<Interface | null> =>
    await service.show(id);

  put = async (id: string, model: any): Promise<Interface | null> =>
    await service.put(id, model);

  signIn = async (
    username: string,
    password: string
  ): Promise<Interface | null> => await service.signIn(username, password);

  signUp = async (model: any): Promise<Interface | null> =>
    await service.signUp(model);
}

export default new Model();
