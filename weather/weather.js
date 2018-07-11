



$(function(){
    const url = 'http://api.openweathermap.org/data/2.5/group?id=4984247,4992523,5506956,5879400,6621230,1835848,3451189,2655984,1275339,2154855,6455259,2643743,6453366,1138958,1850147,360630,878675,6185811,293198,498817&units=imperial&APPID=6427953387ef30a015cb6b3c79b6f084';
    $.get(url,function(json) {
      var htmlstring = '<ul class="list-group">';
      for(var i=0; i<json['list'].length; i++) {
        htmlstring += "<li class='py-0 list-group-item'>" + json["list"][i]["main"]["temp"].toFixed(2) + " degrees in " + json["list"][i]["name"].toString() + "</li>";
      }
      htmlstring += '</ul>';
      $("#weather-container .weather").html(htmlstring);
    });
}); 