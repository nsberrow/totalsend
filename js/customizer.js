var title = $('#customize-title'),
    btnWrapper = $('.next-btn'),
    btn = $('.customize-btn-title'),
    dot1 = $('.indicator-line li.first-dot'),
    dot2 = $('.indicator-line li.second-dot'),
    dot3 = $('.indicator-line li.third-dot'),
    array  = [];

$(".selector li input").change(function() {
  if(this.checked) {
    var checked = $(this).attr('id');
    btnWrapper.css('display', 'block');
    btn.text("Next, channels →");

    btn.on('click', function(){
      $('#sector').css('display', 'none').attr('id', '1');
      $('#channel').css('display', 'block').attr('id', '2');
      $('.signup-form').attr('id', '3');
  
      dot2.css('background', 'white');
      array.push(checked);
      console.log(array);
    });

    // if (checked.length >= 1){
    //
    // }
  }
});
