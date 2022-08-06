const mongoose=require('mongoose');

mongoose
.connect("mongodb://localhost/libro-crud", {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then((db)=>console.log('db is connected'))
.catch((err)=>console.log(err));