document.getElementById('#menu-toggle').addEventListener('click', function (){
    this.toggle('active');
    document.querySelector('ul.opcionesMenu').classList.toggle('active');
});