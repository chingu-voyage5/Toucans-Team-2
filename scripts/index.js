$(document).ready(() => {

    /* VARIABLES */
 let gameShowing = false;


 const $gameTitle = $(".game-title");



    /* FUNCTIONS */

    //Toggle Games show/hide
    const gameShow = (target) => {
      target.toggleClass("game-area-show");
      target.toggleClass("game-area-hide");
    }

    //Toggle Caret right / down
    const caretChange = (target) => {
      target.toggleClass("fas fa-caret-right");
      target.toggleClass("fas fa-caret-down");
    }

    //Opens Game Area
    $(".game-container").on("click", ".game-title", (e) => {
      gameShow($(e.target).next());
      caretChange($(e.target).children());
      gameShowing = true;
    });


});
