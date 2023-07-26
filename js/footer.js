let footer = document.getElementById('footer');
let select = window.location.pathname

footer.innerHTML = `
<footer class="footer">
<p>Grupo 5 &copy; Hackathon 2023. Todos los derechos reservados. </p>

</footer>`


{/* <nav class="footer_nav">
    <ul class="footer_links">
        <li class="footer_list"><a href="#"><img src="${select.includes("index.html") ? "img/whatsapp.png" : "../img/whatsapp.png"}" alt="logo whatsapp"></a></li>
        <li class="footer_list"><a href="#"><img src="${select.includes("index.html") ? "img/facebook.png" : "../img/facebook.png"}" alt="logo facebook"></a></li>
        <li class="footer_list"><a href="#"><img src="${select.includes("index.html") ? "img/instagram.png" : "../img/instagram.png"}" alt="logo instagram"></a></li>
        <li class="footer_list"><a href="#"><img src="${select.includes("index.html") ? "img/telegram.png" : "../img/telegram.png"}" alt="logo telegram"></a></li>
    </ul>
</nav> */}