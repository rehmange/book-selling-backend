import { Router } from "express";
import {
  createSocialLink,
  deleteSocialLink,
  fetchSocialLink
} from "../Controller/SocialLinks.js";

const router = Router();



router.get("/", fetchSocialLink);
router.post("/", createSocialLink);
router.delete("/:id", deleteSocialLink);

export default router;
