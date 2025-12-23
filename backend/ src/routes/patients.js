import { Router } from 'express';
const router = Router();
router.get('/',(_,res)=>res.json([]));
router.post('/',(_,res)=>res.json({status:'Paciente salvo'}));
export default router;
