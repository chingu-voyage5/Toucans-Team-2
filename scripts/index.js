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

    //Opens Game Area
    $(".game-container").on("click", ".game-title", (e) => {
      gameShow($(e.target).next());
      gameShowing = true;
    });


});
