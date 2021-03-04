import Dao from "./dao";
import { Interface } from "./modelSchema";

class BusniesController{
    public show = async (id: string): Promise<Interface | null> => 
        await Dao.show(id)
    
    public put = async (id: string, model: any): Promise<Interface | null> => 
        await Dao.put(id, model)
    
    public signIn = async (username: string, password: string): Promise<Interface | null> => 
        await Dao.signIn(username, password)
    
    public signUp = async (model: any): Promise<Interface | null> =>
        await Dao.signUp(model)
}

export default new BusniesController() 
