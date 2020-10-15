import { Router } from 'express'
const router = Router()

import controller from './controller'

router.get('/user/:id', controller.show)
router.put('/user/:id', controller.put)

router.post('/user/signin', controller.signIn)
router.post('/user/signup', controller.signUp)

export { router as users }