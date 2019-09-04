window.onload = () => {
    document.querySelector('#the-excuse').innerHTML = generateExcuse();
    console.log('Soy una consola que habla');
};

let generateExcuse = () => {

    let quien = [' Fue Juan Guaido ',' Fue Chavez Frias ',' Fue Hitler ',' Fue Stalin ',' Fue Skrillex '];
    let verbo = [' tomando cafe ',' comiendo pizza ',' fumando un puro ',' mirando al cielo ',' con una 9mm '];
    let donde = [' en chacao ',' en la candelaria ',' en la Casa Blanca ',' en la calle 99 con 27 ',' en el Palacio de Miraflores '];
    let hora = [' en la tardecita ',' a las 3 de la mañana ',' a las 9 am ',' a las 2 de la tarde ',' al medio dia '];

    let quienindex = Math.floor(Math.random() * quien.length);
    let verboindex = Math.floor(Math.random() * verbo.length);
    let dondeindex = Math.floor(Math.random() * donde.length);
    let finindex = Math.floor(Math.random() * hora.length);

    return quien[quienindex] + '' + verbo[verboindex] + '' + donde[dondeindex] + '' + hora[finindex] + '.'
}