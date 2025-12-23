import { Router } from 'express';
import jwt from 'jsonwebtoken';
const router = Router();
router.post('/login',(req,res)=>{
 const {user,password}=req.body;
 if(user==='admin' && password==='admin'){
  return res.json({token:jwt.sign({user},'secret',{expiresIn:'1d'})});
 }
 res.status(401).json({error:'Credenciais inválidas'});
});
export default router;
