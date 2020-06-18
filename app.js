const txtBtn  = document.querySelector('#txt'),
      jsonBtn = document.querySelector('#json'),
      apiBtn  = document.querySelector('#api'),
      resultado = document.querySelector('#resultado');

// Funciones 
const txt = async ()=> {
    const solicitud = await fetch('./assets/datos.txt')
                                .then( resp=> resp.text() )
                                .then( data=> data.split(/\,/))
    let html = '<h1>Lista .txt</h1>';
    solicitud.forEach( nombre=> {
        html += `<li>${nombre}</li>`
    })
    resultado.innerHTML = html;

} 

const json = async ()=> {
    const solicitud = await fetch('./assets/empleados.json')
                                .then(resp=>resp.json())
    let html = '<h1>Lista Json</h1>';
    solicitud.forEach( empleado=> {
        html += `
        <li>${empleado.nombre}</li>`;
    })
    resultado.innerHTML = html;
}
let id =  0

const api = async ()=> {

    const url = `https://picsum.photos/id/${id}/info`;
    const {author, download_url} = await fetch( url ).then( resp=> resp.json() )
    
    let html = `
    <div class="apiContainer">
        <h1>Consumiendo API</h1>
        <div class="cajaIMG">
            <img height="320px" src="${download_url}" alt="Autor: ${author}">
        </div>
        <h3 class="card-title">Autor: ${author}</h3>
        <button onclick="next()" class="btn segundario">Siguiente</button>
    </div>`
    resultado.innerHTML = html;
}

const next = ()=> {
    id+=10
    api();
}

// Eventos
txtBtn.addEventListener('click', txt)
jsonBtn.addEventListener('click', json)
apiBtn.addEventListener('click', api)
