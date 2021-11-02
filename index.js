const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname, './index.html'))
});

app.set('puerto', process.env.PORT || 3001);

app.listen(app.get('puerto'), () => console.log(`Server on port: ${app.get('puerto')}`))

