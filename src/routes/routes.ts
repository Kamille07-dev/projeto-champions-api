import { Router } from "express"; // Importa gerenciador de rotas do express
import * as PlayerControler from "../controllers/players-controller";

const router = Router();

router.get("/players", PlayerControler.getPlayer);
router.get("/players/:id", PlayerControler.getPlayerById);

router.post("/players", PlayerControler.postPlayer);

export default router
