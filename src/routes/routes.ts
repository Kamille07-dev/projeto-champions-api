import { Router } from "express"; // Importa gerenciador de rotas do express
import * as PlayerControler from "../controllers/players-controller";
import * as ClubesController from "../controllers/Clubes-Controller"

const router = Router();

router.get("/players", PlayerControler.getPlayer);
router.get("/players/:id", PlayerControler.getPlayerById);
router.delete("/players/:id" , PlayerControler.deletePlayer);
router.post("/players", PlayerControler.postPlayer);
router.patch("/players/:id", PlayerControler.updatePlayer);

router.get("/clubs", ClubesController.getClubs);


export default router
