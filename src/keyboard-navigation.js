Mousetrap.bind('left', function() {
    var prev = $('link[rel=prev]');
    if (prev.length > 0) {
        window.location = prev.attr('href');
    };
});

Mousetrap.bind('right', function() {
    var next = $('link[rel=next]');
    if (next.length > 0) {
        window.location = next.attr('href');
    };
})
