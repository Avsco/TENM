/* Los parametros que recivo del controlador despues de que vea obtenido la  
respuesta de la base de datos aqui los transformo para poder mandarlos bonito*/
import { Interface } from "./modelSchema";

class Dto {
    public single = (model: Interface) => ({
      name: model.name,
      usermane: model.username
    })
}

export default new Dto()