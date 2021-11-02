const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname, './index.html'))
});


app.listen(3030, () => {
    console.log('Servidor corriendo en el puerto 3030');
})

