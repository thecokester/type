
var sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
                'Too ato too nOt enot one totA not anot tOO aNot', 
                'oat itain oat tain nate eate tea anne inant nean', 
                'itant eate anot eat nato inate eat anot tain eat', 
                'nee ene ate ite tent tiet ent ine ene ete ene ate'];

$(document).ready(function() {
    $("#keyboard-upper-container").hide();

    $(document).on('keydown', function(e) {
        handleHighlight(e.which);
        console.log(e.which);
        console.log(e.keyCode);

        if (e.keyCode === 16) {
            $("#keyboard-upper-container").show();
            $("#keyboard-lower-container").hide();
        }
    });

    $(document).on('keyup', function(e) {
        handleHighlight(e.which, true);

        if (e.keyCode === 16) {
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").show();
        }
    });

    $("#sentence").append(sentences[0]);
});

function handleHighlight(code, defaultColor) {
    if (isNaN(code)) {
        return;
    }

    console.log($('#' + code));

    if (defaultColor) {
        console.log('turning white');
        $('#' + code).css('background-color' , '#f5f5f5');
    } else {
        console.log('turning pink');
        $('#' + code).css('background-color' , 'pink');
    }
}





