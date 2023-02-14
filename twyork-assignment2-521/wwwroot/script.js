var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: "https://api.bing.microsoft.com/v7.0/search?" + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "68f3a5000ef84309a097b8f930dac20a");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }
        var searchDiv = document.getElementById("searchResults");
        searchDiv.style.visibility = "visible";
      $('#searchResults').html(results);
        $('#searchResults').dialog({title: "Here is your search XD"})
    })
    .fail(function () {
      alert("error");
    });
}

function backgroundChange() {
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1549313861-33587f3d2956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8')";
}

function displayTime() {
    console.log('test')
    var timeDiv = document.getElementById("time");
    timeDiv.style.visibility = "visible";
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var formattedTime = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes);
    $(timeDiv).html(formattedTime).dialog({
        title: "Current Time",
        modal: true,
        buttons: {
            "Close": function () {
                $(this).dialog("close");
            }
        }
    });
}