
//to do: create multiple arrays of words
//have jquery choose which array to use based on radio button choice
//randomize the number of words in sentences, and sentences in paragraphs

//document ready is a safety precaution that makes sure all of the HTML document has loaded before we try to add behavior.
$(document).ready(function(){

//start event listener for click
$("#ipsum-form").submit(function() { 
  var paragraphs = '';

//Determine which of the check boxes is checked 
  var chosen_button = $("#ipsum-form input[name='choice']:checked").val();
  
//grab the paragraph number the user enters
  var paragraph_number = $("#paragraph_count").val();

//define var as an empty array
  var words = [];

//Create an array of words to randomize later
  var words_bob = ["Bob", "Reginald T Moneybags", "MC Hammer", "Vanilla Ice", "@wi3thloudhands"];
  var words_nobob = ["sunac", "rails", "febreze", "feelings friday", "rails", "drilling", "brita", "pizza", "beer", "number 7 subs", "smoothie"];  
  var words_all = words_bob.concat(words_nobob);

//else if determines which array of words to show the user
  if (chosen_button == "straight-up") {
   words = words_all;
} else if (chosen_button == "all-bob") {
   words = words_bob; 
} else {
words = words_nobob; }


console.log(words);

var sentence_number = Math.floor( (Math.random()+4) * 2 );

//Use a function that randomizes the contents of an array
  function fisherYates(words) {
    var i = words.length, j, tempi, tempj;
    if ( i == 0 ) return false;
    while ( --i ) {
       j = Math.floor( Math.random() * ( i + 1 ) );
       tempi = words[i];
       tempj = words[j];
       words[i] = tempj;
       words[j] = tempi;
       }
       return words;
    }

//start the first FOR loop that builds sentences from words
for ( var z = 0; z < paragraph_number; z++ ) {
  var sentence_group = '';

//start the second FOR loop that builds sentence groups from sentences
for ( var y = 0; y < sentence_number; y++ ) {

//start the third FOR loop that builds and spaces paragraphs from sentence groups
for ( var x = 0; x < words.length; x++ ) {

//Create a variable for the randomized array of words
  var words_random = fisherYates(words);

//Convert array to string with no commas or quotes, add period to end
  var sentence = words_random.toString().replace(/,/g, ' ') + '. ';

//Capitalize first letter in string
  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  var sentence_capped = capitalizeFirstLetter(sentence);
//end the first FOR loop that builds sentences from words
          }
  sentence_group += sentence_capped;  
//end the second FOR loop that builds sentence groups from sentences
       }
  paragraphs+='<p>' + sentence_group + '</p>';
//end the third FOR loop that builds and spaces paragraphs from sentence groups
    }

$("#print-paragraphs").empty().html(paragraphs);

//prevent form from actually submitting so page does not reload
return false; 

//end event listener
  });

//end document ready
});

// var words_bob = ["Bob", "helicopter", "Reginald T Moneybags", "I don't care", "Kill Your Idols", "MC Hammer", "Vanilla Ice"];
// var words_nobob = ["sunac", "rails", "febreze", "feelings friday", "uge", "rails", "drilling", "brita", "pizza", "beer", "number 7 subs", "smoothie"];  

// for the data:
// create an array of words 
// write a function that returns a randomized version of that array

// for the output: 
// insert a period every ~10 words in order to break up the text
// split the ouput into paragraphs of 4-5 sentences each
// capitalize the first word in every sentence

// for the UI:
// create a html form that allows the user to select the number of paragraphs of text to output (text field)
// show the requested # of paragraphs without reloading the page
