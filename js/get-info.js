$.getJSON('info.json', function (data) {
    var courses = [];
    $.each(data.courses, function (index, course) {
        var difficulty = '';
        for (var i = 0; i < course.difficulty; i++) {
            difficulty += '<span class="glyphicon glyphicon-star stars"></span>';
        }
        for (i = 0; i < 3 - course.difficulty; i++) {
            difficulty += '<span class="glyphicon glyphicon-star-empty stars"></span>'
        }
        var html = '';
        if (index == 0) {
            html += '<div class="row equal-height">';
        }
        html += '<div class="col-sm-6 col-lg-6 col-md-6">' +
            '<div class="thumbnail">' +
            '<div class="cover"><img src="' + course.logoUrl + '" alt="Course logo" class="img-responsive"></div>' +
            '<div class="caption">' +
            '<h4><span class="glyphicon glyphicon-education education" aria-hidden="true"></span> ' + course.title +
            '<span class="label label-default">' + course.category + '</span></h4>' +
            '<hr>' +
            '<p class="text-justify"><strong>Description:</strong> ' + course.description + '</p>' +
            '<p><strong>Authors:</strong> ' + course.authors.join(", ") + '</p>' +
            '<p><strong>Release date:</strong> ' + course.releaseDate + '</p>' +
            '<p>' + difficulty + ' Difficulty: ' + course.difficulty + '</p>' +
            '</div>' +
            '</div>' +
            '</div>';
        if (index == courses.size) {
            html += '</div>'
        }
        courses.push(html);
    });
    $(courses.join("")).appendTo("#courses");
    $('<small>Last Updated ' + data.update.substr(9) + '</small>').appendTo("#title")
});
