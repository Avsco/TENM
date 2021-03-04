import { Router } from 'express'
const router = Router()

import controller from './controller'

router.get('/users/:id', controller.show)
router.put('/users/:id', controller.put)

router.post('/users/signin', controller.signIn)
router.post('/users/signup', controller.signUp)

export { router as users }