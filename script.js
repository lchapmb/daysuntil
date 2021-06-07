$("#trigger").click(function(){
  var apples = new Date();
  var oranges = new Date(2021,12,25)
  var pears = parseInt((oranges-apples)/(24*3600*1000));
  
  $("#days-until").append("<li>" + pears.toString()+" days until Christmas</li>");
})

$("#trigger").click(function(){
  var apples = new Date();
  var oranges = new Date(2022,01,01)
  var pears = parseInt((oranges-apples)/(24*3600*1000));
  
  $("#days-until").append("<li>" + pears.toString()+" days until New Year</li>");
})

$("#trigger").click(function(){
  var apples = new Date();
  var oranges = new Date(2022,02,14)
  var pears = parseInt((oranges-apples)/(24*3600*1000));
  
  $("#days-until").append("<li>" + pears.toString()+" days until Valentines Day</li>");
})