import { Router } from "express";
import {
  createEmailCapture,
} from "../Controller/EmailCaputeController.js";

const router = Router();

router.post("/", createEmailCapture);

export default router;
