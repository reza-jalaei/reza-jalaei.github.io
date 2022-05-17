$(document).ready(function () {
    // Alternative text

    $(function () {
        count = 0;
        wordsArray = ["VWO Alternative.", "HotJar Alternative.", "Optimizely Alternative.", "AB Tasty Alternative.", "Google Optimize Alternative.", "Convert Alternative."];
        setInterval(function () {
            count++;
            $(".alternative").fadeOut(400, function () {
                $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
            });
        }, 2500);
    });

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    }
    ;

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    $('.companies-testimonials').slick({
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        appendDots: $(".companies-testimonials-arrows"),
        focusOnSelect: true
    });

    var figpiiBlog = 'https://www.figpii.com/blog/wp-json/wp/v2/posts?_embed'
    $.getJSON(figpiiBlog, function(data) {
        var text = "";
        var imageLink = "";
        var i;
        for (i = 0; i < data.length-3; i++) {
            var imageLink = data[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
            text +=
                "<div><a target='_blank' href='"+ data[i].link +"'><img src='"+ imageLink + "' />"
                +"<br>";
            text +=
                "<b>"+data[i].title.rendered+"</b>"
                +"<br>"
                +"</a></div>";
        }
        $(".blog-articles").html(text);
        $('.blog-articles').slick({
            adaptiveHeight: true,
            dots: true,
            arrows: false,
            appendDots: $(".blog-articles-arrows"),
            focusOnSelect: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
        });
    });

});

