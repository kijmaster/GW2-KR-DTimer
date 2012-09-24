define(['underscore'], //
    function (_) {
        return {

            createPaginationLink: function (currentPage, lastPage, selector) {
                selector.empty();
                if (lastPage <= 5) {
                    for (var i = 1; i <= lastPage; i++) {
                        selector.append('<a href="#" class="page">' + i + '</a>').append(' ');
                    }
                } else {
//                    var lowerInterval = currentPage - 1;
                    var upperInterval = lastPage - currentPage;
                    if (currentPage - 1 > 2) {
                        selector.append('<a href="#" class="page">1</a>').append(' ... ');
                    }
                    var lowerInterval = currentPage - 2;
                    lowerInterval = lowerInterval <= 1 ? 1 : lowerInterval;
                    for (var i = lowerInterval; i <= currentPage; i++) {
                        selector.append('<a href="#" class="page">' + i + '</a>').append(' ');
                    }
                    if (upperInterval > 2) {
                        for (var i = currentPage + 1; i <= currentPage + 2; i++) {
                            selector.append('<a href="#" class="page">' + i + '</a>').append(' ');
                        }
                        selector.append(' ... ').append('<a href="#" class="page">' + lastPage + '</a>');
                    } else {
                        for (var i = currentPage + 1; i <= lastPage; i++) {
                            selector.append('<a href="#" class="page">' + i + '</a>').append(' ');
                        }
                    }
                }
                $('.page:contains(' + currentPage + ')').addClass('selectedPage');
            }
        };
    });
