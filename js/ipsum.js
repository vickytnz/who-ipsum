
//to do: create multiple arrays of words
//have jquery choose which array to use based on radio button choice
//randomize the number of words in sentences, and sentences in paragraphs

//document ready is a safety precaution that makes sure all of the HTML document has loaded before we try to add behavior.


//Create an array of words to randomize later
  var words = ["one", "two", "three", "four", "five", "six"];

  var words_all = ["one", "two", "three", "four", "five", "six"];
  var words_bob = ["bob"];
  var words_nobob = ["red", "white", "blue"];

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

//start event listener for click
$("#ipsum-form").submit(function() { 
  var paragraphs = '';

//grab the paragraph number the user enters
  var paragraph_number = $("#paragraph_count").val();

//start the first FOR loop that builds sentences from words
for ( var z = 0; z < paragraph_number; z++ ) {
  var sentence_group = '';
  console.log(sentence_number);

//start the second FOR loop that builds sentence groups from sentences
for ( var y = 0; y < sentence_number; y++ ) {
    console.log(sentence_number);

//start the third FOR loop that builds and spaces paragraphs from sentence groups
for ( var x = 0; x < words.length; x++ ) {
    console.log(sentence_number);

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


// "Sunac", "Febreze", "feelings friday", "uge", "rails", "helicopter", "drilling", "Reginald T Moneybags" brita MVC pizza and beer jquery number 7 subs FaF github smoothie hammering curb your flombaum minswan knocking meta ramen granola bars

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
