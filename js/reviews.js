// Global variable to hold the review position 
let from = 0;
// When the documant loads, get the information from the api link
$(document).on('ready', function(event){
    event.preventDefault();
    var promise = $.ajax('https://student.computing.edgehill.ac.uk/~walshd/cis1110api/product-reviews/bikeoil');
    promise.done(function(result) {
        displayReviews(result,from);
    });
});

$(document).ready(function() {
    $("#review-button").click(function(event){
        event.preventDefault();
        var promise = $.ajax('https://student.computing.edgehill.ac.uk/~walshd/cis1110api/product-reviews/bikeoil');
        from = from + 5;
        promise.done(function(result) {
            displayReviews(result,from);
        });
    }); 
});
// Display the reviews on the page 
function displayReviews(result) {
    // Get a handle to the review list
    var list =  $('#review-list');
    // CLear elements in the list
    list.empty();
    // Checks if the from to is greater than the length of the reviews 
    if ((from + 5) > result.length) {
        // Set to as result.length
        to = result.length;
    } else {
        // Set to as from + 5 
        to = from + 5;
    }
    // Loop around the current from to of the result set
    for(var i = from; i < to; i++){
        list.append('<img src = "robot-juice-images/reviewicon1.jpg"/>');
        list.append('<h2>');
        // Create a string of styles based on the rating number
        var rating = parseInt(result[i]['rating']);
        var ratingStars = '*'.repeat(rating);
        // Append the list with the review information 
        list.append(ratingStars+'<br>');
        list.append(result[i]['nickname']+'</h2>');
        list.append('<p>'+result[i]['review']+'</p>');
        list.append('<section id="review-item">');
        list.append("</section>");
    }   
    // Reset the from to 0 if the total is equal to length 
    if (to == result.length) {
        from = 0;
    }
}