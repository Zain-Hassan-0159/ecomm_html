var subdropdown = document.querySelectorAll(".nav-3 .sub_category");

subdropdown.forEach(function( el ){
    el.addEventListener("mouseenter", function(){
        this.classList.add("current_dropdown");

        document.querySelector(".current_dropdown .dropdown-submenu").classList.remove("d-none");

        this.classList.remove("current_dropdown");
    });

    el.addEventListener("mouseleave", function(){
        this.classList.add("current_dropdown");

        document.querySelector(".current_dropdown .dropdown-submenu").classList.add("d-none");

        this.classList.remove("current_dropdown");
    });
});