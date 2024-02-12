import { Router } from "express";
import EmailCaptureRoutes from "./emailCaputreRoutes.js";
import SocialLinkRoutes from "./socialLinks.js";

const router = Router();

// * For Email Capture Routes
router.use("/api/email-capture", EmailCaptureRoutes);
router.use("/api/social-link", SocialLinkRoutes);

export default router;
