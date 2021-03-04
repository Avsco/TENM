import ModelSchema, { Interface } from './modelSchema'
import { comparePassword, encryptPassword } from "../../services/encriptor";

class Dao{
    async show (id: string): Promise<Interface | null> {
        const model = await ModelSchema.findById(id)
        if(!model) return null
        return model
    }

    async put (id: string, newModel: Interface): Promise<Interface | null> {
        if(newModel.password) newModel.password = await encryptPassword(newModel.password)
        const updated = await ModelSchema.findByIdAndUpdate(id, newModel)
        if(!updated) return null
        return updated
    }

    async signIn (username: string, password: string): Promise<Interface | null> {
        const model = await ModelSchema.findOne({username: username})
        if(!model) return null

        const isMatch = await comparePassword(password, model.password)
        if (isMatch) return model

        return null
    }

    async signUp (model: Interface): Promise<Interface> {
        const newModel = new ModelSchema(model)
        newModel.password = await encryptPassword(newModel.password)
        await newModel.save()
        return newModel
    }
}

export default new Dao()