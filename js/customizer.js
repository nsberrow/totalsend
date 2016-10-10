var title = $('#customize-title'),
    btnWrapper = $('.next-btn'),
    industryBtn = $('#industry-btn'),
    submit = $('.submit'),
    dot1 = $('.indicator-line li.first-dot'),
    dot2 = $('.indicator-line li.second-dot'),
    dot3 = $('.indicator-line li.third-dot'),
    selector = $(".selector"),
    array = [];

var submitLast = function(){
  industryBtn.on('click', function(){
    console.log("industry click");
    array.push(checked);
    console.log(array);
    sectorBtn.text("Next, contact details →");
  });
};
$(".selector li input").change(function() {
  if(this.checked) {
    var checked = $(this).attr('id');
    btnWrapper.css('display', 'block');

    btnWrapper.on('click', function(){
      $('#sector').css('display', 'none');
      $('#channel').css('display', 'block');

      array.push(checked);
      console.log(array);
      //$(this).text("Next, channels →");
      //$(this).attr('id', 'industry-btn');
      submitLast();

    });


    // btn.on('click', function(){
    //
    //   $('.signup-form').attr('id', '3');
    //   array.push(checked);
    //   console.log(array);
    //   if(selector.attr('id') === 2) {
    //     btn.text("Next, channels →");
    //     dot2.css('background', 'white');
    //   }
    //   if(selector.attr('id') === 3) {
    //     btn.text("Next, contact details →");
    //     dot3.css('background', 'white');
    //   }
    //   if(array.length != 0){
    //     console.log(array.length);
    //   }
    // });

    // if (checked.length >= 1){
    //
    // }
  }
});
