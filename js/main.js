// Set the api variable
var wikiAPI = "http://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&exchars=250&&explaintext&exintro=&format=json&callback=?";

$(document).ready(closeIt);

function closeIt() {
$.getJSON(wikiAPI, function (data) {
    $.each(data.query.pages, function(k, v) {
        $.getJSON('http://en.wikipedia.org/w/api.php?action=query&prop=info&pageids='+v.pageid+'&inprop=url&format=json&callback=?', function(url) {
            $.each(url.query.pages, function(key, page) {
                $('#res').html('<h2>Random Wikipedia Article</h2><h1><a href="'+page.fullurl+'" target="_blank">'+page.title+'</a></h1><p>'+v.extract+'</p>')
            });
        });
    });
});    //end json
}

 
 $(".random").click(function() {
    	closeIt(1, false);
});
 

$("#res").on("swipe", function(event) {
    closeIt(1, false);
});