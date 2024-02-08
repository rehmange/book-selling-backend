import { Router } from "express";
import EmailCaptureRoutes from "./emailCaputreRoutes.js";

const router = Router();

// * For Email Capture Routes
router.use("/api/email-capture", EmailCaptureRoutes);

export default router;
