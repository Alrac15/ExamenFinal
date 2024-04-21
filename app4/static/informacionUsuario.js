function cargarInformacionTarea(idTarea)
{
    console.log("Se cargara la informacion de la tarea %s",idTarea)
    fetch(`/conseguirInfoTarea?idTarea=${idTarea}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.comentariosTotales)
        nombreTareaDetalle = document.getElementById('nombreTareaDetalle')
        fechaInicioDetalle = document.getElementById('fechaInicioDetalle')
        fechaFinDetalle = document.getElementById('fechaFinDetalle')
        estadoTareaDetalle = document.getElementById('estadoTareaDetalle')
        descripcionTareaDetalle = document.getElementById('descripcionTareaDetalle')
        indTarea = document.getElementById('indTarea')
        comentariosTareaTotales = document.getElementById('comentariosTareaTotales')

        nombreTareaDetalle.value = ''
        fechaInicioDetalle.value = ''
        fechaFinDetalle.value = ''
        estadoTareaDetalle.value = ''
        descripcionTareaDetalle.value = ''
        indTarea.innerHTML = ''
        comentariosTareaTotales.innerHTML = ''
        
        nombreTareaDetalle.value = data.nombreTarea
        fechaInicioDetalle.value = data.fechaInicio
        fechaFinDetalle.value = data.fechaFin
        estadoTareaDetalle.value = data.estadoTarea
        descripcionTareaDetalle.value = data.descripcionTarea
        indTarea.innerHTML = data.idTarea

        for(let j = 0; j < data.comentariosTotales.length; j++)
        {
            seccionComentario = `
            <div class="row mb-3">
                <div class="col-3">
                    ${data.comentariosTotales[j][0]}
                </div>
                <div class="col-9">
                    ${data.comentariosTotales[j][1]}
                </div>
            </div>
            `
            comentariosTareaTotales.innerHTML = comentariosTareaTotales.innerHTML + seccionComentario
        }

    })
}

function enviarComentario()
{
    url = '/publicarComentario'
    datos = {
        'comentario':document.getElementById('comentarioUsuario').value,
        'idTarea':document.getElementById('indTarea').innerHTML
    }
    fetch(url,
    {
        method:"POST",
        headers:
        {
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRFToken": getCookie("csrftoken"),
        },
        body:JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        cargarInformacionTarea(document.getElementById('indTarea').innerHTML)
        document.getElementById('comentarioUsuario').value = ''
    })
}


function getCookie(name)
{
    let cookieValue = null;
    if (document.cookie && document.cookie !== "")
    {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++)
        {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + "="))
            {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function cargarInformacionUsuario(idUsuario)
{
    /*
    PREGUNTA 3
    Desarrollar la función de javascript que permita consultar la ruta
    obtenerInformacionUsuario?idUsuario=${idUsuario}
    Revisar la implementacion realizada en clase para el detalle de las
    tareas.
    */
    console.log("Se cargara la informacion de los usuarios %s",idUsuario)
    fetch(`/obtenerDatosUsuario?idUsuario=${idUsuario}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.Usuariosnuevos)
        usernameUsuarioDetalle = document.getElementById('usernameUsuarioDetalle')
        nombreUsuarioDetalle = document.getElementById('nombreUsuarioDetalle')
        apellidoUsuarioDetalle = document.getElementById('apellidoUsuarioDetalle')
        profesionUsuarioDetalle = document.getElementById('profesionUsuarioDetalle')
        emailUsuarioDetalle = document.getElementaryById('emailUsuarioDetalle')
        nroCelularDetalle = document.getElementaryById('nroCelularDetalle')
        perfilUsuarioDetalle = document.getElementaryById('perfilUsuarioDetalle')
        indUsuario = document.getElementById('indUsuario')
        Usuariosnuevostotal = document.getElementById('Usuariosnuevostotal')

        usernameUsuarioDetalle.value = ''
        nombreUsuarioDetalle.value = ''
        apellidoUsuarioDetalle.value = ''
        profesionUsuarioDetalle.value = ''
        emailUsuarioDetalle = ''
        nroCelularDetalle = ''
        perfilUsuarioDetalle = ''
        indUsuario.innerHTML = ''
        Usuariosnuevostotal.innerHTML = ''
        
        usernameUsuarioDetalle.value = data.usernameUsuario
        nombreUsuarioDetalle.value = data.nombreUsuario
        apellidoUsuarioDetalle.value = data.apellidoUsuario
        profesionUsuarioDetalle.value = data.profesionUsuario
        emailUsuarioDetalle.value = data.emailUsuario
        nroCelularDetalle = data.nroCelular
        perfilUsuarioDetalle = data.perfilUsuario
        indUsuario.innerHTML = data.idUsuario

        for(let j = 0; j < data.Usuariosnuevostotal.length; j++)
        {
            seccionusuario = `
            <div class="row mb-3">
                <div class="col-3">
                    ${data.Usuariosnuevostotal[j][0]}
                </div>
                <div class="col-9">
                    ${data.Usuariosnuevostotal[j][1]}
                </div>
            </div>
            `
            Usuariosnuevostotal.innerHTML = Usuariosnuevostotal.innerHTML + seccionusuario
        }

    })
}