$(document).ready(() => {

    /* VARIABLES */
 const $gameTitle = $(".game-title");
 const root = $("html, body");


    /* FUNCTIONS */

    //Smooth Scroll Between Anchor Tags
    $("a[href^='#']").click(function (evt) {
      evt.preventDefault();
      root.animate({
        scrollTop: $($.attr(this, "href")).offset().top
      }, 800);
    });

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
    });


});
