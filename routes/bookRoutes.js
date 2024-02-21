import { Router } from "express";
import {
    createBook,
    updateAvailableBook
} from "../Controller/BookController.js";

const router = Router();

router.post("/", createBook);
router.put("/availability/:id", updateAvailableBook);


export default router;
