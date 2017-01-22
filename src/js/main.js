// $(document).on('click', '.header-link', function(event) {
//     event.preventDefault();
//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 2000);
// });

$('.header-link').click(function(){
  event.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});
