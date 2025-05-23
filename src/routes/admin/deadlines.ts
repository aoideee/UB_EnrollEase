// File: src/routes/admin/deadlines.ts

import { Router } from "express";
import { AdminDeadlinesController } from "../../controllers/admin/deadlines";

const router = Router();
router.get("/deadlines", AdminDeadlinesController.list);
router.get("/deadlines/:type/edit", AdminDeadlinesController.renderEdit);
router.post("/deadlines/:type", AdminDeadlinesController.update);

export default router;