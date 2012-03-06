var fan_token = localStorage.getItem('fansToken');
$.ajax({
    url: 'http://youyanchu.com/api' + '/performances',
    data: { auth_token: fan_token },
    type: 'GET',
    dataType: 'json',
    success: function(m){
          for( var x in m )
          {
            var showItem = m[x];
            var title = m[x].title;
            var id = "show" + m[x].id;
            var date = m[x].begin_at.substring(2,10); 
            var city = m[x].city;
            var genre = m[x].genre;
            var kind = m[x].kind;
            var description = m[x].description.substring(3,33);
            var poster = m[x].poster.substring(20);
            $('#showList').append(
             "<li class='round8 showItem' onclick='window.location='detail.html';'>"+
                "<div class='mini-playbill' style='background:url("+ poster +")'></div>"+
                "<div class='show-message'>"+
                  "<p class='show-Miscellaneous'>"+
                    "<span class='show-date'>"+ date +"</span>"+
                    "<span class='show-local'>"+ city +"</span>"+
                    "<span class='show-type'>"+ genre +"</span>"+
                    "<span class='show-kind'>"+ kind +"</span>"+
                    "<span class='free-note'>FREE</span>"+
                  "</p>"+
                  "<p class='show-text'>"+ description + '...' +"</p>"+
                "</div>"+
             "</li>"
             );
          }
    }
});
