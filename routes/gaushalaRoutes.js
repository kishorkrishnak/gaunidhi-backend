import { Router } from 'express';
import * as gaushalaController from '../controllers/gaushalaController.js';

const router = Router();

router.get('/', gaushalaController.getAllGaushalas);
router.get('/:id', gaushalaController.getGaushala);
router.post('/:id/donate', gaushalaController.donateToGaushala);
router.post('/', gaushalaController.addGaushala);

export default router;
