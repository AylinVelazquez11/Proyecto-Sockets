/*Creamos la variable que permita al frontend conectarse a nuestro backend*/ 

var socket=io.connect('http://localhost:3002',{'forceNew': true});

/*El cliente manejara datos mediante ensajes, esto se llamara eventos y se mostraran por consola en el navegador */
socket.on('messages', function(data){
    console.log(data);
    render(data);
});

/*Creamos un template para que nos imprima el contenido */

function render (data){


var html = `<div>
                <strong>${data.autor}</strong>:
                <>${data.texto}</em>
                </div>`;

                document.getElementById('messages').innerHTML=html;
}

function addMessage(e){
    var payload={
        autor: document.getElementById(username).value ,
        texto: document.getElementById(texto).value
    };
    socket.emit('New-message', payload);
    return false;
}