function scroll() {
    $('a[href*="#"]').on('click', function(event) {
        event.preventDefault();
      
        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top,
          },
          1000,
          'linear'
        )
      });
}

scroll();