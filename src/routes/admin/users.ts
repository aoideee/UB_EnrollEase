import { Router } from "express";
import { AdminUsersController } from "../../controllers/admin/users";

const router = Router();
router.get("/users", AdminUsersController.list);
router.get("/users/new", AdminUsersController.renderNew);
router.post("/users", AdminUsersController.create);
router.get("/users/:id/edit", AdminUsersController.renderEdit);
router.post("/users/:id", AdminUsersController.update);
router.post("/users/:id/delete", AdminUsersController.delete);

export default router;