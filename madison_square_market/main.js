$( document ).ready(function() {
	$('#cart').on('click', function(){
    $('#cartMenu').show();
  });

  $('#account').on('click', function(){
    $('#accountMenu').show();
  });

  $('#help').on('click', function(){
    $('#helpMenu').show();
  });

  $('.dropdown-menu').on('mouseleave', function(){
    $('.dropdown-menu').hide();
  });
});
