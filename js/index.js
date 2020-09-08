import '../css/main.scss';
var $ = require('jquery');
(function () {
  const trailer = document.getElementById('trailer');
  const openTrailer = document.getElementById('open-trailer');
  const closeTrailer = document.getElementById('close-trailer');

  if (openTrailer) {
    openTrailer.addEventListener('click', function() {
      trailer.classList.add('--open');
    });
  }

  if (closeTrailer) {
    closeTrailer.addEventListener('click', function() {
      trailer.classList.remove('--open');
    });
  }

  let isNavigationOpen = false;
  const navigation = document.getElementById('navigation');
  const toggleNavigation = document.getElementById('toggle-navigation');

  toggleNavigation.addEventListener('click', function() {
    isNavigationOpen = !isNavigationOpen;

    if (isNavigationOpen) {
      navigation.classList.add('--open');
      toggleNavigation.textContent = 'Close';
    } else {
      navigation.classList.remove('--open');
      toggleNavigation.textContent = 'Menu';
    }
  });

  var sheet_url = "https://spreadsheets.google.com/feeds/list/1LoXeop63we3nr8tmkFSV8Z0YWiB0zmPzYxtJqEB939k/od6/public/values?alt=json"; 
  $(document).ready(function(){
    const fetch = require('node-fetch');

    let url = sheet_url;

    let settings = { method: "Get" };
    var $table = $("#location-data")
    fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        // do something with JSON
        var entry = json.feed.entry;
        var tr = "<tr>";
        $(entry).each(function(){
          if(this.gsx$date.$t != null || this.gsx$date.$t != "" || this.gsx$date.$t != "null"){ 
           if(this.gsx$city.$t != null || this.gsx$city.$t != "" || this.gsx$city.$t != "null"){
             if(this.gsx$state.$t != null || this.gsx$state.$t != "" || this.gsx$state.$t != "null"){
               if(this.gsx$address.$t != null || this.gsx$address.$t != "" || this.gsx$address.$t != "null"){
                 if(this.gsx$time.$t != null || this.gsx$time.$t != "" || this.gsx$time.$t != "null"){
                  tr +="<td>"+this.gsx$date.$t+"</td><td>"+this.gsx$city.$t+"</td><td>"+this.gsx$state.$t+"</td><td>"+this.gsx$address.$t+"</td><td>"+this.gsx$time.$t+"</td>";
                }
              }
            }
          }
        }
        tr += "</tr>";
      });
        $table.find('tbody').empty().append(tr);
      });
    
  })

})();
