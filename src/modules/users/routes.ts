import { Router } from 'express'

import controller from './controller'

class Routes {

    createRoutes(router: Router, route: string): Router{
        router.get(`${route}/:id`, controller.show)
        router.put(`${route}/:id`, controller.put)

        router.post(`${route}/signin`, controller.signIn)
        router.post(`${route}/signup`, controller.signUp)

        return router
    }
}

export default new Routes()