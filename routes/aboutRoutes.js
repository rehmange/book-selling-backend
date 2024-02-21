import { Router } from "express";
import {
  fetchAbout,
  createAbout,
  updateAbout,
  fetchAboutAll,
  deleteAbout
} from "../Controller/About.js";

const router = Router();



router.get("/", fetchAbout);
router.get("/all", fetchAboutAll);
router.post("/", createAbout);
router.put("/:id", updateAbout);
router.delete("/:id", deleteAbout);

export default router;
