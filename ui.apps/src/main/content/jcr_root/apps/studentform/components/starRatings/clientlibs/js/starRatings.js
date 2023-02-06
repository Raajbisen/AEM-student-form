var starValue = "";
var starElement = "";
ratingValue = "";

function starClick() {
$(document).ready(function () {

    var list = document.querySelector('.list');
    var listItems = list.children;
    var imageArray = Array.from(listItems);
    $('.cmp-rating__submit-btn').click(function () {
        for (var i = 0; i < imageArray.length; i++) {
            imageArray[i].classList.add('disabled');

        }
    });

    imageArray.forEach(function (item, index) {
        item.addEventListener('click', function (e) {
            starValue = e.target.getAttribute("dataval");
            ratingValue = starValue;
            starElement = e.target;
            $('.cmp-rating__star-value').text('"' + starValue + '"');

            $('.cmp-rating__submit-btn').removeAttr("disabled");
            for (var i = 0; i < imageArray.length; i++) {
                imageArray[i].src = '/content/dam/studentform/logo/star.png';

            }
            for (var j = 0; j <= index; j++) {
                imageArray[j].src = '/content/dam/studentform/logo/star.png';

                console.log(starValue);

            }
        });
    });

    }
)};

function showOffers() {





    $.event.trigger({
        type: "ratingUpdated",
        buttonValue: starValue,
        checkActive: starElement.src.includes("filled")
    });
    $('.cmp-rating__submit-btn').prop('disabled', true);
    $("html, body").animate({
        scrollTop: $(document).height()
    }, "slow");
    $(".cmp-rating__emoji").prop("onclick", false);



}
