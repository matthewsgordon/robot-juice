$(document).on('ready', function(event) { 
    event.preventDefault();
    // Number of times poll has been run
    var noPolls = 0;
    // Number of times yes has been selected 
    var noYes = 0;
    // Current percentage of yes votes
    var currentYesPercentage = 0;
    // Handles the on click event of the button
    $('input[name="vote"]').click(function(){
        // sets the percentage to 2 decimal places 
        document.getElementById("pollresult").textContent="Result: "+currentYesPercentage.toFixed(2)+"%";
        // Increment the poll count 
        noPolls++;
        // if yes is selected then increment number of yeses
        if($('#yes').prop('checked')){
            noYes++;
        }
        // Calculates current percentage
        currentYesPercentage = noYes / noPolls * 100;
    });
});