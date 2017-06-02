$(function () { //shorthand document.ready function

    $.get("status.dat", function (data) {
        data = JSON.parse(data);
        $("#player").html(data.players);
        $("#mode").html(data.mode);
        $("#admin").html(decodeURIComponent(data.roundduration));
    });


});