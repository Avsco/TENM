import { Response } from "express";

function handlerError(errorCode: number, errorMsg: string, res: Response){
    return res.status(500).json({code:errorCode ,msg: errorMsg})
}

export { handlerError }