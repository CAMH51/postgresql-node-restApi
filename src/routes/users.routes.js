import { Router } from "express"; 
import {pool} from '../db.js';

const router = Router();

router.get('/users', async(req, res) => {
   const {rows} = await pool.query('SELECT * FROM users');
   res.json(rows);
});

router.get('/users/:id', async(req, res) => {
  const {id} = req.params;
  const {rows} = await pool.query('SELECT * FROM users WHERE id =$1 ',[id]);
  if(rows.length === 0){
      return res.status(404).json({message:'User not found'});
  }
  res.json(rows);
});

router.post('/users', (req, res) => {
    res.send('Creando usuario')
});

router.delete('/user/:id', (req, res) => {
    res.send('Eliminar usuario')
});

router.put('/users/:id', (req, res) => {
    const {id} = req.params;
    res.send('Actualizando usuario'+ id)
});


export default router;