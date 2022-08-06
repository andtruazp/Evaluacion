const{Router}= require('express');
const librosCtrl = require('../controllers/libros-controller');

const router= Router();

//Consultar todos los libros
router.get('/libros',librosCtrl.getlibros);
//Consultar libro
router.get('/libros/:id',librosCtrl.getLibro);
//Crear Libro
router.post('/libros',librosCtrl.createLibro);
// //Actualizar Libro
 router.put('/libros/:id',librosCtrl.editLibro);
// //Eliminar Libro
 router.delete('/libros/:id',librosCtrl.deleteLibro);

module.exports= router;