$(document).ready(function () {
    var name = window.prompt("Please enter your full name: ");
    function lusers() {
        var users = [];
        if (localStorage.getItem("username") != null) {
            users = JSON.parse(localStorage.getItem("username"));
        }
        users.unshift(name);
        var str = JSON.stringify(users);
        localStorage.setItem("username", str);
        for (let i = 0; i < 5; i++) {
            $('.name.last').eq(i).text(users[i]);
        }
    }
    lusers();

    function lscores() {
        $('.ending').css('display', 'flex');
        $('.game-score-area').css('display', 'none');
        $('.game-time').css('display', 'none');
        $('.ending').append('<a href=""><img src="assets/img/replay.svg" alt=""></a>');
        var scores = [];
        if (localStorage.getItem("point") != null) {
            scores = JSON.parse(localStorage.getItem("point"));
        }
        scores.unshift(score);
        var userPoint = JSON.stringify(scores);
        localStorage.setItem("point", userPoint);
        console.log(scores)
        for (let i = 0; i < 5; i++) {
            $('.last.score').eq(i).text(scores[i]);
        }
    }

    $(".wrapper").html($(".card-container").sort(function () {
        return Math.random() - 0.5;
    }));
    var arr = new Array();
    var score = 0;
    var timer;
    $('.game-score-area td').first().text(`${name}`);
    $('.game-score-area td').last().text(`${score}`);

    $('.card-container').click(function () {
        $(this).toggleClass('rot');
        arr.push($(this).data('information'));

        if (arr.length == 2) {
            if ($('.card-container').hasClass('rot')) {
                if (arr[0] == arr[1]) {
                    score = score + 10;
                    timer = setTimeout(() => {
                        $('.rot').css('opacity', '0');

                    }, 500);
                } else if (arr[0] !== arr[1]) {
                    timer = setTimeout(() => {
                        $('.card-container').removeClass('rot');
                        arr.splice(0, 2);
                    }, 2000);
                }
                $('.game-score-area td').first().text(`${name}`);
                $('.game-score-area td').last().text(`${score}`);
            }
        }
        else if (arr.length > 2) {
            clearTimeout(timer);
            $('.card-container').removeClass('rot');
            arr.splice(0, 2);
            $(this).toggleClass('rot');
        } else {
            clearTimeout(timer);
        }


        if (score == $('.card-container').length / 2 * 10) {
            $('.ending h1 span').text(`  ${name}, you won the game.  Your score is:  ${score}`);
            lscores();
            clearInterval(gameTime)
        }

    })

        var sec = 180;
        var gameTime = setInterval(function () {
            $('.game-time').text(sec);
            sec--;

            if (sec < 0) {
                clearInterval(gameTime);
                $('.ending h1 span').text(`  ${name}, you lost the game.  Your score is:  ${score}`);
                lscores()

            }
        }, 1000);

    $('a').click(() => {
        location.reload()
    })







});