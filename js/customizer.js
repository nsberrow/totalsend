var banking = $('#banking'),
    marketing = $('#marketing'),
    medical = $('#medical'),
    government = $('#government'),
    other = $('#other');

$("#selector li input").change(function() {
  if(this.checked) {
    //var checkboxId = this.attr('id');
    var item = validate($(this));
    console.log(item.attr('id'));
  }
});
