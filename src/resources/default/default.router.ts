import { Router } from "express";
import defaultController from "./default.controller";
const router = Router();

router.route("/").get(defaultController.greet);

export default router;
