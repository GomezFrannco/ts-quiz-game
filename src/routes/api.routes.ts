import { Router } from "express";
import { getApi, postApi } from "../controllers/api.controllers.js";

const router: Router = Router();

router.get("/", getApi);
router.post("/new?", postApi);

export default router;
