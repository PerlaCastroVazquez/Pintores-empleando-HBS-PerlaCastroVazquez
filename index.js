//Importamos el paquete de express
const express = require('express');
const hbs = require('hbs');

//creamos la aplicacion
const app = express();

//Definimos el motor de plantilla
app.set('view engine', 'hbs');

//generar partials
hbs.registerPartials(__dirname + '/views/partials/')

// generaamos sitio estatico
app.use(express.static(__dirname + '/public'));

//configurar mis rutas
app.get('/', (req, res)=>{
    res.render('index',{
        autor : 'Perla Castro',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});
app.get('/salvador', (req, res)=>{
    res.render('salvador',{
        autor : 'Perla Castro',
        year : new Date().getFullYear(),
        title : 'Salvador Dali'
    });
});
app.get('/vincent', (req, res)=>{
    res.render('vangogh',{
        autor : 'Perla Castro',
        year : new Date().getFullYear(),
        title : 'Vincent Van Gogh'
    });
});
app.get('/leonardo', (req, res)=>{
    res.render('davinci',{
        autor : 'Perla Castro',
        year : new Date().getFullYear(),
        title : 'Leonardo Da Vinci'
    });
});
app.get('/pablo', (req, res)=>{
    res.render('picasso'
    ,{
        autor : 'Perla Castro',
        year : new Date().getFullYear(),
        title : 'Pablo Picasso'
    });
});

//Arrancamos el servidor web
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000')
});

