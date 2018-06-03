$(document).ready(() => {

    /* VARIABLES */




    /* FUNCTIONS */




    /* ALL JS CODE for MEMORY GAME EMBED */

    /* MEMORY GAME VARIABLES */

    let clickCount = 0;
    let cardShowing = false;
    let cardValue = "";
    let timeKeeper = 0;
    let cardMatches = 0;
    let randomNumber = 1 + Math.floor(Math.random() * 16);
    let timer;

    const allCards = $("li");
    const starSection = $(".star-section");
    const resetButton = $(".reset-section");
    const timeCounter = $(".time");
    const attempts = $(".attempts");



    /* MEMORY GAME FUNCTIONS */

    // Randomize Order, uses jQuery .each() method to loop over and assign a
    // different random number
    $("li").each(function() {
        randomNumber = 1 + Math.floor(Math.random() * 50);
        $(this).css({"order": randomNumber});})

    // 'Flip' Card on Click
    const cardFlip = (target) => {
      target.toggleClass("card-show");
      target.toggleClass("card-hide");
    };

    // Animate when match is made and trigger 'end of game' popup
    const yesMatch = () => {
      $(".marker").animate({
        margin: ["20px"]
      });
      cardMatches++;
      if (cardMatches === 8) {
        clearInterval(timer);
        allCards.toggleClass("win");
        $(".popup").toggleClass("show");
      }
    };

    // Remove Stars after number of clicks
    const removeStar = (selector) => {
      starSection.children(selector).removeClass("fas").addClass("far");
    }



      /* TRIGGER EVENT TO START GAME */

      // Used 'Event Delegation' here to manage cards not becoming
      // 'clickable' after they are shown face up
      $(".game-board").on("click", ".card-hide", (e) =>{

        // Counts clicks user makes and removes stars after so many
        clickCount += 1;
        if (clickCount > 50) {
            removeStar(".first-star");
          } else if (clickCount > 36) {
            removeStar(".second-star");
          } else if (clickCount > 16) {
            removeStar(".third-star");
        };

        // Changes the 'Attempts' display after each match attempt
        if (clickCount % 2 === 0) {
          attempts.text(clickCount / 2);
        }

        // Starts / Stops timer
        if (clickCount === 1) {
          timer = setInterval (() => {
          timeKeeper++;
          timeCounter.text(timeKeeper);
          }, 1000);
        }

        // Flips Cards
        cardFlip($(e.target));

        // Add marker to shown card, used to flip back over if needed
        $(e.target).addClass("marker");

        // Gets value of first card flipped and logs that a card is now
        // showing face-up
        if (!cardShowing) {
          cardValue = $(e.target).children().attr("class");
          cardShowing = true;

        // Checks if second card flipped matches first and trigger response
        } else {
          allCards.css({"pointer-events": "none"});
          if (cardValue == $(e.target).children().attr("class")) {
            yesMatch()
          } else {
            setTimeout(() => {
              $(".marker").toggleClass("card-show");
              $(".marker").toggleClass("card-hide");
            }, 600);
          };

          // Removes markers, resets cardShowing value
          setTimeout(() => {
            allCards.removeClass("marker");
            allCards.css({"pointer-events": "auto"});
          }, 700);
          cardShowing = false;
        };
       })


     // RESET GameBoard
     resetButton.click(() => {
       location.reload();
     })




});
