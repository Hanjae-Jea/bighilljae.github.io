function start_quiz() {
    console.log('start quiz');
    var footer = $('footer');
    $('footer').css('opacity', 0);
    $('footer').css('display', 'inline-block');
    $('#contact').css('display', 'none');
    
    $('footer').animate({ opacity: '1' }, "slow");
}