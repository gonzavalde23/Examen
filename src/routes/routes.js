import { Router } from 'express';
import { home,pruebacon, showUsers, insertUsers } from '../controllers/controllers.js';
const router = Router();


//Definir rutas
router.get('/', home);

//prueba de conexion 
router.get('/pruebacon', pruebacon);

//Mostrar usuarios
router.get('/showUsers',showUsers)
//insertar rutas
router.post('/insertUsers',insertUsers);
export default router;