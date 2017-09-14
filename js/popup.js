$(document).ready(function() { // Ждём загрузки страницы

$("a.show-btn").click(function(){    // Событие клика на затемненный фон
$(".feedback").fadeIn(800);    // Медленно убираем всплывающее окно
});

});
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});
//
// $(document).ready(function() {
// function showPopup() {
//
// $(".form").fadeIn("slow"); // Медленно выводим изображение
//
// }
// });
