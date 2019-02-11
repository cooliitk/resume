const express = require('express');
const app = express();


app.listen(process.env.PORT || 8000);
app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', function(req, res){
    res.render('index');
});