/*Creamos la variable que permita al frontend conectarse a nuestro backend*/ 

var socket=io.connect('http://localhost:3002',{'forceNew': true});