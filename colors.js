var Body = {
  SetColor : function(color){
    $('body').css('color',color);
  },
  SetBackgroundColor : function(color){
    $('body').css('backgroundColor',color);
  }
}
var Links = {
  SetColor : function(color){
    $('a').css('color',color);
  }
}
function nightdayhandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night') {
  Body.SetBackgroundColor('black');
  Body.SetColor('white');
  self.value='day';

  Links.SetColor('powderblue');
  } else {
  Body.SetBackgroundColor('white');
  Body.SetColor('black');
  self.value='night';

  Links.SetColor('blue');
  }
}
