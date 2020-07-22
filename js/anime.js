window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


// $( "#projects" ).click(function() {
//     $( ".dropdown-menu" ).slideToggle( "slow" );
//   });