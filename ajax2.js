console.log('activo')

document.querySelector('#btn1.3').addEventListener('click', traerdatos());
function traerdatos(){
    console.log('correcto');
    const xhttp = new XMLHttpRequest();

    xhttp.open("get","datosinventario.json",true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status==200){

           // console.log(this.responseText);

            let datos = JSON.parse(this.responseText);
            let rep = document.querySelector('#rep');
            rep.innerHTML='';
            for(let i of datos){
                rep.innerHTML += `
                <tr>
                    <td>${i.ID}</td>
                    <td>${i.Categoria}</td>
                    <td>${i.Nombre}</td>
                    <td>${i.Estado}</td>
                    <td>Eliminar</td>
                </tr>
                `
            }
        }
        
    };
}


