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

// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
      return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
  });


const fetch = require('node-fetch');

function CompareDate(nextDate) {    
           //Note: 00 is month i.e. January    
           var q = new Date();
           var m = q.getMonth();
           var d = q.getDay();
           var y = q.getFullYear();

           var current_date = new Date(y,m,d);
           var newDate = new Date(nextDate); //Year, Month, Date    
           // console.log(newDate)
           if (newDate < current_date) {    
            return true;
          }else {
            return false;
          }    
        }   

        let url = sheet_url;

        let settings = { method: "Get" };
        var $table = $("#location-data")
        fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
        // do something with JSON
        var entry = json.feed.entry;
        var tr='';
        $(entry).each(function(){
          var sheet_date = this.gsx$date.$t.split("/");
          var hasGray = false;
          if(sheet_date.length>1){
            var today = new Date();
            var newDate = new Date(today.getFullYear(),sheet_date[1],sheet_date[0]);
            hasGray = CompareDate(newDate);
          }
          tr += "<tr class="+(hasGray==true?'past-event':'')+">";
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
