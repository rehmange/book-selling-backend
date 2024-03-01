import { Router } from "express";
import EmailCaptureRoutes from "./emailCaputreRoutes.js";
import SocialLinkRoutes from "./socialLinksRoutes.js";
import AboutRoutes from "./aboutRoutes.js";
import BookRoutes from "./bookRoutes.js";
import LandingRoutes from "./landingRoutes.js";

const router = Router();
// * For Email Capture Routes
router.use("/api/email-capture", EmailCaptureRoutes);
router.use("/api/social-link", SocialLinkRoutes);
router.use("/api/about", AboutRoutes);
router.use("/api/book", BookRoutes);
router.use("/api/landing", LandingRoutes);

export default router;
