$(document).ready(function() {
  var streamArr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","brunofin","comster404"];
    var url = "";


    function getChannelStatus() {

      streamArr.forEach(function(channel) {
        var url = 'https://wind-bow.gomix.me/twitch-api/streams/' + channel + "?callback=?";
        var html = "";
        var html2 = "";

          $.getJSON(url, function(data) {

          if (data.stream === null) {
            html2 += "<div class='offline'><p>" + channel + " is offline.</p></div>";



          } 
          /*
          Unable to tell which accounts are closed now, due to the way the API works. Will add a section similar to the code below if it changes to check for deactivated/nonexistant accounts.

          else if (data.stream === "undefined") {
            html += "<p>" + channel + " is undefined.</p>"        
          }*/

            else {
            html += "<div class='online'><p><img class='logo' src='" + data.stream.channel.logo +"'>" + "<a href='"+ data.stream.channel.url + "' target='_blank'>" + channel + "</a> - " + data.stream.game + "</p></div>";

          };

            $('#onlinestreams').append(html);
            $('#offlinestreams').append(html2);
      });

        });
    };
    $(document).ready(function() {

      getChannelStatus();

    });
});