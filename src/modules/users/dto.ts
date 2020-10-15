import { Interface } from "./modelSchema";

class UserDto {
    public single = (model: Interface) => ({
      name: model.name,
      usermane: model.username
    })
}

export default new UserDto()