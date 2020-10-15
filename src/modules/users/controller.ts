import { Request, Response } from 'express'
import Dto from "./dto";
import Model from './model'

class Controller{
    public show = async (req: Request, res: Response): Promise<Response> => {
        try {
            const id = req.params.id
    
            const model = await Model.show(id)
            if(!model) return res.status(404).json({msg: 'El recurso no existe' }) 

            return res.status(200).json(Dto.single(model))
        } catch (error) {
            return res.status(422).json({ code: error.code, msg: error.message })
        }
    }
    
    public put = async (req: Request, res: Response): Promise<Response> => {
        try {
            let model: any = {}
            if(req.body.name) model.name = req.body.name
            if(req.body.namusernamee) model.username = req.body.username
            if(req.body.password) model.password = req.body.password

            const newModel = await Model.put(req.params.id, model)
            if(!newModel) return res.status(404).json({msg: 'El recurso no existe' }) 
            
            return res.status(200).json(Dto.single(newModel))
        } catch (error) {
            return res.status(422).json({ code: error.code, msg: error.message })
        }
    }
    
    public signUp = async (req: Request, res: Response): Promise<Response> => {
        try {
            if(!req.body.name) return res.status(400).json({msg: 'falta el nombre'})
            if(!req.body.username) return res.status(400).json({msg: 'falta el username'})
            if(!req.body.password) return res.status(400).json({msg: 'falta el password'})

            const newModel = await Model.signUp({
                username: req.body.username,
                name: req.body.name,
                password: req.body.password
            })
            if(!newModel) return res.status(500).json({msg: 'El recuso no pudo ser creado'})
    
            return res.status(201).json(Dto.single(newModel))
        } catch (error) {
            return res.status(422).json({ code: error.code, msg: error.message })
        }
    }
    
    public signIn = async (req: Request, res: Response) => {
        try {
            if(!req.body.username) return res.status(400).json({msg: 'falta el username'})
            if(!req.body.password) return res.status(400).json({msg: 'falta el password'})

            const model = await Model.signIn(req.body.username, req.body.password)
            if(!model) return res.status(404).json({msg: 'Erorr en username o password' }) 
            
            return res.status(200).json(Dto.single(model))
        } catch (error) {
            return res.status(422).json({ code: error.code, msg: error.message })
        }
    }
}

export default new Controller()