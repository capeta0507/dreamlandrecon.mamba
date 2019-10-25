$.when( $.ready ).then(function() {
    $("#b1,#b3,#b4,#b5,#b6").add($("#b2").children("div")).children("div")
        .attr("data-scroll", "")
        .attr("data-scroll-showCallback", "toggleOn()");
    var scope = {};
    var trigger = new ScrollTrigger({
        // toggle: {
        //   visible: 'fromBottomIn',
        //   hidden: 'fromBottomOut'
        // }
    });
    trigger.callScope = scope;
    scope.toggleOn = function() {
        //console.log(this); // this refers to the html element coming into the viewport
        var $kv = $(this).closest("#b1,#b2,#b3,#b4,#b5,#b6");
        $nav = $(".nav > a");
        $navItem = $nav.filter("." + $kv.attr("id"));
        $nav.removeClass('on');
        $navItem.addClass('on');
    };
    $(".nav > a.b1").addClass('on');

    $(".toggle").click(toggleMenu);
    $(".m_nav ul").on("click", "li", toggleMenu);
    $(".m_nav ul").on("click", "li a:lt(0)", function(event) {
    	event.preventDefault();
    	$(window).scrollTop($($(this).attr("href")).offset().top - 100);
    });

   // 飄浮效果
    floating({
      content: '<img src="img/snow.png">',
      number: 6,
      duration: 20
    });
    floating({
      content: '<img src="img/snow.png">',
      number: 5,
      duration: 30,
      size: 8
    });
    floating({
      content: '<img src="img/snow.png">',
      number: 7,
      size: [0.1,10]
    });
});
function toggleMenu(event) {
    $(".toggle").toggleClass("active");
    $(".m_nav").slideToggle();
}
function close_popup(v1){
    $(".popup." + v1).fadeOut(300);
}
function open_popup(v1){
    $(".popup." + v1).fadeIn(300);
}
