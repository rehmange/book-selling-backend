import { Router } from "express";
import {
    createBook,
    updateAvailableBook,
    fetchBooks,
    fetchBook
} from "../Controller/BookController.js";

const router = Router();

router.get("/", fetchBooks);
router.get("/:id", fetchBook);
router.post("/", createBook);
router.put("/availability/:id", updateAvailableBook);


export default router;
