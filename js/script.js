   // js
wow = new WOW(
{
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
})
wow.init();

   $(document).ready(function(){
    // counter up start

    $('.counter').counterUp({
    delay: 10,
    time: 1000
    });
   }) 
    


