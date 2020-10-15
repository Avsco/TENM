import { Application, Router } from 'express'

import Users from "../modules/users/routes";

let router = Router()

router = Users.createRoutes(router, '/users')

export default function (app: Application) {
    app.use(router)
}