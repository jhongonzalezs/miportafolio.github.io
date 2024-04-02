let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("angular");
        habilidades[6].classList.add("nodejs");
        habilidades[7].classList.add("python");
        habilidades[8].classList.add("git");
        habilidades[9].classList.add("sass");
        habilidades[10].classList.add("python");
        habilidades[11].classList.add("comunicacion");
        habilidades[12].classList.add("trabajo");
        habilidades[13].classList.add("creatividad");
        habilidades[14].classList.add("dedicacion");
        habilidades[15].classList.add("proyect");
        habilidades[16].classList.add("res");
        habilidades[17].classList.add("hon");
        habilidades[18].classList.add("perse");
        habilidades[19].classList.add("leal");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 