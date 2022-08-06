const librosCtrl={};

//obtener todos los libros
librosCtrl.getlibros= (req,res)=>{
    req.getConnection((err,conn) => {
    conn.query('SELECT * FROM libro', (err,rows) =>{
        if(err){
            res.json(err);
        }
        res.json(rows);
    });
});
    
}

//crear un libro
librosCtrl.createLibro= (req,res)=>{
     const data= req.body;
     console.log(data);
     req.getConnection((err,conn)=>{
         conn.query('INSERT INTO libro SET ?',[data],(err,libro)=>{
             res.redirect('/libros');
         });
     });
 }

 //consultar solo un libro
librosCtrl.getLibro= (req,res)=>{
    const { id }= req.params;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM libro WHERE _id = ?', [id],(err,rows)=>{
            res.json(rows);
        });
    });
 }
//editar un libro
 librosCtrl.editLibro= (req,res)=>{
    const { id }= req.params;
    const data= req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE libro SET ? WHERE _id = ?',[data, id],(err,rows)=>{
            res.redirect('/libros');
        });
    });
     
 }

 //eliminar libro
 librosCtrl.deleteLibro= (req,res)=>{
     const { id }=req.params;
     req.getConnection((err,conn) =>{
         conn.query('DELETE FROM libro WHERE _id = ?', [id],(err,rows) =>{
             res.send(rows);
         });
     });
 }

 module.exports =librosCtrl;