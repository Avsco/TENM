import { Router } from "express";
import controller from "./controller";

const router = Router();
const breakPoint = "/user";

router.get(`${breakPoint}/:id`, controller.show);
router.put(`${breakPoint}/:id`, controller.put);

router.post(`${breakPoint}/signin`, controller.signIn);
router.post(`${breakPoint}/signup`, controller.signUp);

export { router as users };
