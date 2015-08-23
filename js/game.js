var game = {
    settings:{
        playerName: undefined,
        machineName: undefined
    },
    options : [
        {
            name: "Piedra",
            wins_against: [
               1,
               2,
               3
            ]
        },
       {
            name: "Papel",
           wins_against: [
               0,
               4
            ]
        },
        {
            name: "Tijeras",
            wins_against: [
               3
            ]
        },
        {
            name: "Lagarto",
           wins_against: [
                1,
                4
            ]
        },
        {
            name: "Spoke",
           wins_against: [
               0,
               2
            ]
        },
    ],
    play:{
        playerOption: 0,
        machineOption: 0
    },
    init:function() {
        var game_buttons = document.getElementsByClassName('game_button');
        var option_id = 0;
        for (var i = 0, x = game_buttons.length; i<x; i++) {
            game_buttons[i].addEventListener('click', function(e) {
                option_id = e.target.parentNode.dataset.buttonId;

                game.play.playerOption = parseInt(option_id);
                game.play.machineOption = game.machinePlay();

                alert("La máquina eligió: "+game.options[game.play.machineOption].name);
                alert("Elegiste: "+game.options[game.play.playerOption].name);

                if (game.play.playerOption === game.play.machineOption ) {
                   alert('empate');
                   return;
                }

                if (game.checkWinner() === true) {
                     alert('Ganas!');
                } else {
                    alert('Pierdes!');
                }

            });
        }
    },
    checkWinner : function() {
        // Si la opción que ha elegido la máquina está entre los elementos que pierden contra la elección del usuario, el usuario gana.
        var a = game.options[game.play.playerOption].wins_against.indexOf(game.play.machineOption);
        var length = game.options[game.play.playerOption].wins_against.length;

        var winner = false;



        for (var a = 0; a < length;a++ ) {

            if ( game.options[game.play.playerOption].wins_against[a] === game.play.machineOption) {
                winner = true;

                break;
            }
        }

        return winner;
    },
    machinePlay:function(){
        play =  Math.floor( Math.random() * (4 - 0 + 1) + 0 );
        return play;
    },
    resultScreen:function(action) {
        var resultScreen = document.getElementById('result_screen');
        console.log(resultScreen);
        if (action) {
            //Show
            resultScreen.style.display = 'block';

        } else {
            //Hide
             resultScreen.style.display = 'none';
        }
    }
};
