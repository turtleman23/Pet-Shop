var Rats = 0;
var Level = 0;
var timer = 0;
var TopLevel = 100;
$(document).ready(function() {
    $(".Hungry").hide();

function hide() {
    if (timer < 60) {
        $('.Hungry').hide();
        Rats = 0;
        Level += 50;
        console.log(Level);
    }
}
function Levels() {
        if (Level === TopLevel)
        {
            Level = 0;
            TopLevel += 100;
        }
    }
    function Hungry() {
        timer++;
        if(timer === 60)
        {
            $('.Hungry').show();
            timer = 0;
        }
    }
    setInterval(Hungry).on('click',1000);
    $('#Hungry').on('click',hide);
    setInterval(Levels, 1000);
});

