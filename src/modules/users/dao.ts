/* Recien trabajamos con las consulatas de la base de datos */
import { response } from 'express'
import ModelSchema, { Interface } from './modelSchema'

class Dao{
    public show = async (id: string): Promise<Interface | null> => {
        // const model = await ModelSchema.findById(id)
        // if(!model) return null
        // return model

        return new Promise((resolve, reject) => ModelSchema.findById({id: id}, (err, doc) => {
            if(err) return reject(err)
            return resolve(doc)
        }))
    }

    public put = async (id: string, newModel: any): Promise<Interface | null> => {
        const updated = await ModelSchema.findByIdAndUpdate(id, newModel)
        if(!updated) return null
        return updated
    }

    public signIn = async (username: string, password: string): Promise<Interface | null> => {
        const model = await ModelSchema.findOne({username: username})
        if(!model) return null

        const isMatch = await model.comparePassword(password)
        if (isMatch) return model

        return null
    }

    public signUp = async (model: Interface): Promise<Interface> => {
        const newModel = new ModelSchema(model)
        await newModel.save()
        return newModel
    }
}

export default new Dao()