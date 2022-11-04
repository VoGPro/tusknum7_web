$(document).ready(function () {
    $("#lightSlider").lightSlider({
        item: 4,
        slideMove: 2,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 2,
                    slideMove: 1,
                },
            },
        ]
    });
});