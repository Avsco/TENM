import { Request, Response } from 'express'
import Dto from "./dto";
import busiessController from './busiessController'

import { handlerError } from "../../services/handlerError";

class Controller {
    async show (req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id
    
            const model = await busiessController.show(id)
            if(!model) return res.status(404).json({msg: 'El recurso no existe' }) 
            
            return res.status(200).json(Dto.single(model))
        } catch (error) {
            return handlerError(error.code, error.message, res)
        }
    }
    
    async put (req: Request, res: Response): Promise<Response> {
        try {
            const model: any = {... req.body}
            
            const newModel = await busiessController.put(req.params.id, model)
            if(!newModel) return res.status(404).json({msg: 'El recurso no existe' }) 
            
            return res.status(200).json(Dto.single(newModel))
        } catch (error) {
            return handlerError(error.code, error.message, res)
        }
    }
    
    async signUp (req: Request, res: Response): Promise<Response> {
        try {
            const newModel = await busiessController.signUp({
                username: req.body.username,
                name: req.body.name,
                password: req.body.password
            })
            if(!newModel) return res.status(500).json({msg: 'El recuso no pudo ser creado'})
    
            return res.status(201).json(Dto.single(newModel))
        } catch (error) {
            return handlerError(error.code, error.message, res)
        }
    }
    
    async signIn (req: Request, res: Response) {
        try {
            if(!req.body.username) return res.status(400).json({ msg: 'Error en username o password' })

            const model = await busiessController.signIn(req.body.username, req.body.password)
            if(!model) return res.status(404).json({msg: 'Error en username o password' }) 
            
            return res.status(200).json(Dto.single(model))
        } catch (error) {
            return handlerError(error.code, error.message, res)
        }
    }
}

export default new Controller()