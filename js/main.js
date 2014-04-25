$.getJSON("http://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&explaintext&exintro=&format=json&callback=?", function (data) {
    $.each(data.query.pages, function(k, v) {
        $.getJSON('http://en.wikipedia.org/w/api.php?action=query&prop=info&pageids='+v.pageid+'&inprop=url&format=json&callback=?', function(url) {
            $.each(url.query.pages, function(key, page) {
                console.log(page)
                $('#res').append('<h1><a href="'+page.fullurl+'" target="_blank">'+page.title+'</a></h1><div>'+v.extract+'</div>')
            });
        });
    });
     
});
 