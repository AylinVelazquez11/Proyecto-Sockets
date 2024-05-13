/*Creamos la variable que permita al frontend conectarse a nuestro backend*/ 

var socket=io.connect('http://localhost:3002',{'forceNew': true});

/*El cliente manejara datos mediante ensajes, esto se llamara eventos y se mostraran por consola en el navegador */
socket.on('messages', function(data){
    console.log(data);
    render(data);
});

/*Creamos un template para que nos imprima el contenido */

function render (data){
    //reestructuramos esta sección para que se maneje el array
    //elem: conjunto de cosas
    //con map recorremos el array

    var html = data.map(function(elem, index){
        return(`<div>
            <strong>${elem.autor}</strong>:
            <em>${elem.texto}</em>
            </div>`);

    }).join("");

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