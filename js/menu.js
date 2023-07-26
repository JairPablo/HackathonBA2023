let menu = document.getElementById('menu'); 
let select = window.location.pathname
let active=`class="active"`

menu.innerHTML = `
<nav class="contenedor">
    <div class="logo">
        <a href="${select.includes("index.html") ? "index.html" : "../index.html"}">
            <img class="header-logo" src="${select.includes("index.html") ? "img/Logo-ecobici.png" : "../img/Logo-ecobici.png"}" alt="logo">
            <h1 class="menu">EcoBici BA</h1>
        </a>
    </div>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
        <i class="openmenu-icon"><img src="${select.includes("index.html") ? "img/menu.png" : "../img/menu.png"}" alt=""></i>
    </label>
<section class="nav-list" id="nav-list">

    <ul class="header-links">
        <li class="header-list"><a ${select.includes("index.html") ? active : ""} href='${select.includes("index.html") ? "index.html" : "../index.html"}'>Inicio</a></li>
        <li class="header-list"><a ${select.includes("equipo.html") ? active : ""} href='${select.includes("index.html") ? "pages/equipo.html" : "equipo.html"}'>Equipo</a></li>
        <li class="header-list"><a ${select.includes("informacionUtil.html") ? active : ""} href='${select.includes("index.html") ? "pages/informacionUtil.html" : "informacionUtil.html"}'>Informacion Util</a></li>
        <li class="header-list"><a ${select.includes("contacto.html") ? active : ""} href='${select.includes("index.html") ? "pages/contacto.html" : "contacto.html"}'>Contacto</a></li>
    </ul>
</section>
`

