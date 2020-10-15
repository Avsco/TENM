import { Application } from 'express'

import { users } from "../modules/users/routes";

export default function (app: Application) {
    app.use(users)
}