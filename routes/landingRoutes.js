import { Router } from "express";
import {
  fetchLanding,
  createLanding,
  updateLanding,
  fetchLandingAll,
  deleteLanding,
} from "../Controller/Landing.js";

const router = Router();

router.get("/", fetchLanding);
router.get("/all", fetchLandingAll);
router.post("/", createLanding);
router.put("/:id", updateLanding);
router.delete("/:id", deleteLanding);

export default router;
