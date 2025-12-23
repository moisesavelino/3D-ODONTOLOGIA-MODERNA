import { Router } from 'express';
const router = Router();
router.get('/',(_,res)=>res.json({total:0}));
export default router;
