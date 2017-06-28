

// SuRe ItS UgLy BuT It WoRkS :-)

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

var targetLetter=document.getElementById('target-letter')
var words=document.getElementById('sentence');
var block=document.getElementById('yellow-block');
var pos=$('#yellow-block').position();
var sentenceNumber=0
var letterCount=0
var counter=letterCount++
var start=new Date();
var numberOfErrors=0
var numberOfWords=54
var sentences = [
'ten ate neite ate nee enet ite ate inet ent eate',
'Too ato too nOt enot one totA not anot tOO aNot', 
'oat itain oat tain nate eate tea anne inant nean',
'itant eate anot eat nato inate eat anot tain eat', 
'nee ene ate ite tent tiet ent ine ene ete ene ate'];

$("#sentence").append(sentences[0]);
 
 $(document).ready(function() {
    $("#keyboard-upper-container").hide();

  $(document).on('keydown', function(e) {
        handleHighlight(e.which);
        
    if(e.which >=65 && e.which <=90) {
        handleHighlight(e.which+32);
    }

    if (e.keyCode === 16) {
            $("#keyboard-upper-container").show();
            $("#keyboard-lower-container").hide();
        }
        showText()
    });

  $(document).on('keyup', function(e) {
        handleHighlight(e.which, true);
    
    if(e.which >=65 && e.which <=90) {
         handleHighlight(e.which+32, true);
    }
    if (e.keyCode === 16) {
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").show();
        }
    });
    
});


function wordsPerMinute(){ 
    
    var end = new Date() - start;
    var minute = end / 60000;
    var roundMin = Math.round(minute);
    var WPM = (numberOfWords / roundMin - 2 * numberOfErrors);
    alert (WPM);
    confirm('Try Your Luck!')
    location.reload();

}


$(document).keypress(function(e){
    var characters=sentences[sentenceNumber].charAt(letterCount)
    var keystroke=String.fromCharCode(e.which)
   

    if(sentences[sentenceNumber].length == letterCount){
        $('#sentence').empty()
        sentenceNumber++
        letterCount=0
        words.innerHTML=sentences[sentenceNumber].toString();
       
        $('#yellow-block').css('left','1em')

    if(characters=keystroke){
        $('#feedback').empty()
        letterCount++
        $('#yellow-block').animate({"left":"+=0.73em"},15);
        $('#feedback').append('<span class="glyphicon glyphicon-ok" </span>')
    }
}

    if(characters==keystroke){
        $('#feedback').empty()
        letterCount++
        $('#yellow-block').animate({"left":"+=0.73em"},15);
        $('#feedback').append('<span class="glyphicon glyphicon-ok" </span>')


    }else if(sentenceNumber==4){
        wordsPerMinute()
    }
    
    else{
        $('#feedback').empty()
        $('#feedback').append('<span class="glyphicon glyphicon-remove" </span>')
        numberOfErrors++
    }
        $('#target-letter').text(keystroke)

})


// Did you die though?????

