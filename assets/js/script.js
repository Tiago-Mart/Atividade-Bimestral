$(document).ready(function(){
    //Botão do menu
    const menuBtn = $(".menu-button")

    menuBtn.on("click", function(){
        $(this).hasClass("clicado")? $(this).removeClass("clicado") : $(this).addClass("clicado");
    })

    //Menu
    const primaryNav = $(".primary-menu");
    const btnMenu = $(".topo-pagina button.menu-button");

    btnMenu.on("click", function(){
        var visibility = primaryNav.attr("data-visible");

        visibility == "false" ? primaryNav.attr("data-visible", "true") : primaryNav.attr("data-visible", "false")
    })

    //Função de scrollar até um item interno - Baseado em um código disponibilizado pela Origamid
    const menuItems = $("ul.interior-nav a[href^='#']");
    menuItems.on('click', function(){
        scrollTo($(this))
    });

    function scrollTo(e){
        event.preventDefault();
        const offset = $('header.topo-pagina').height();

        var id = e.attr('href');
        var article = document.querySelector(id).offsetTop;

        window.scroll({
            top: article - offset,
            behavior: "smooth",
        });
        
    }
})