import { Interface } from "./modelSchema";

class UserDto {
    single = (model: Interface) => ({
      name: model.name,
      usermane: model.username
    })

    forLogin = (model: Interface) => ({
      id: model.id,
      name: model.name,
      username: model.username
    })
}

export default new UserDto()