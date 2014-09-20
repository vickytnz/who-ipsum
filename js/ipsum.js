
//document ready is a safety precaution that makes sure all of the HTML document has loaded before we try to add behavior.
$(document).ready(function(){

//Start event listener for click

$('input, select').change(function() {
	$('#ipsum-form').submit();
});


$("#ipsum-form").submit(function() { 
  var paragraphs = '';

//Determine which of the check boxes is checked 
  var chosen_button = $("#ipsum-form input[name='choice']:checked").val();
ga('send', 'event', 'result', 'click', chosen_button ); 

 
//Grab the paragraph number the user enters
  var paragraph_number = $("#paragraph_count").val();

//Define var words as an empty array
  var words = [];

//Create an array of words to randomize later
  var words_first = [ "One day, I shall come back. Yes, I shall come back. Until then, there must be no regrets, no tears, no anxieties. Just go forward in all your beliefs and prove to me that I am not mistaken in mine. Goodbye Susan. Goodbye my dear.",
"My ship…my TARDIS…",
"Mmmmm….",
"We are always in trouble! Isn't it extraordinary&mdash;it follows us everywhere.", 
"Your ideas are too narrow and crippled. I am a citizen of the universe and a gentleman to boot." , 
"Mmmm… what's that m'boy?",
"We are not of this race. We are not of this earth. Susan and I are wanderers in the fourth dimension of time and space.", 
"We're trying to defeat the Daleks, not start a jumble sale!",
"What do you think it is, a space helmet for a cow?",
"I am the Doctor! The original, you might say!",
"Yes? What is it? What do you want?",
"Eh? Doctor who? What's he talking about…?",
"He thinks I'm a charlatan, my Dear.",
"You don't understand so you find excuses.", 
"Eh? Doctor who? What's he talking about…?",
"You cannot rewrite history! Not one line!",
"I am the Doctor! The original you might say!",
"Our lives are important&mdash;at least to us&mdash;as we see, so we learn…Our destiny is in the stars , so let's go and search for it.", 
"The least important things, sometimes my dear boy, lead to the greatest discoveries." , 
"If you could touch the alien sand and hear the cries of strange birds, and watch them wheel in another sky, would that satisfy you?", 
"...history sometimes gives us a terrible shock, and that is because we don't quite fully understand. Why should we? After all, we're too small to realise its final pattern. Therefore don't try and judge it from where you stand." , 
"As we learn about each other, so we learn about ourselves.",
" It all started out as a mild curiosity in the junkyard, and now it's turned out to be quite a great spirit of adventure.",
"My writing gets worse and worse. Dear, dear, dear, dear, dear.",
"So these are my replacements. A dandy and a clown. ",
"Alright? Of course I'm alright, my child. You know, I am so constantly outwitting the opposition, I tend to forget the delights and satisfaction of the gentle art of fisticuffs.",
"Right! So stop dilly-dallying, and cross it! "
  
  ];
  var words_second = ["When I say run, run. ...RUN!",
"Butterfingers.",
"Oh, my giddy aunt!",
"Oh my word!",
"Life depends on change and renewal.", 
"Have faith, Brigadier. Have I ever led you astray?" , 
"I don't like it.",
"Logic, my dear Zoe, merely enables one to be wrong with authority." , 
"Not allowed? Not allowed? Me, I’m allowed everywhere.",
"I hate computers and refuse to be bullied by them." , 
"There are some corners of the universe which have bred the most terrible things. Things which act against everything we believe in. They must be fought.", 
"Renewed? Have I? That's it, I've been renewed. It's part of the TARDIS. Without it I couldn't survive.",
"I am not a student of human nature. I am a professor of a far wider academy of which human nature is merely a part.",
"Oh I'm so sorry, Jamie.",
"Our lives are different from anybody else’s. That’s the exciting thing. Nobody in the universe can do what we’re doing.",  
"An unintelligent enemy is far less dangerous than an intelligent one…." , 
"Jamie, remind me to give you a lesson in tying knots, sometime.",
"The best thing about a machine that makes sense is you can very easily make it turn out nonsense.",
"Let's go in!",
"The Time Lords are an immensely civilised race. We can control our own environment - we can live forever, barring accidents, and we have the secret of space/time travel." , 
"People spend all their time making nice things and then other people come along and break them! ",
"Why can't you leave me alone?! ",
"This stuff, or whoever sent it, is cleverer than we are. Unfortunate, isn't it?",
"You've had this place redecorated, haven't you? Hmm, don't like it.",
"Goodbye... Fancypants!",
"Do try and keep out of my way in future and in past, there's a good fellow. The time continuum should be big enough for the both of us."
  ];
  var words_third = ["Oh, good grief.",
"Reverse the polarity of the neutron flow. ",
"Jo, you’ve got all the time in the world… and all the space. I'm offering them to you.", 
"Reverse the polarity of…",
"Death is always more frightening when it strikes invisibly.", 
"I had to face my fear...that was more important than just going on living...." , 
"You’ll never understand. I want to see the universe, not to rule it." , 
"My dear Miss Shaw, I never report myself anywhere, particularly not forthwith.",
"People who talk about infallibility are usually on very shaky ground.", 
"Courage isn’t a matter of not being frightened, it’s being afraid and doing what you have to do anyway." , 
"Well, I'll tell you something that should be of vital interest to you.…That you, Sir, are a NITWIT!",
"Smith. Doctor John Smith.",
"You know Jo, I sometimes think that military intelligence is a contradiction in terms.",
"Pure mathematics can not lie!",
"Obviously the Time Lords have programmed the TARDIS always to return to Earth. It seems that I am some kind of a galactic yo-yo! ",
"Jo, did you fail Latin as well as science? ",
"Yes, well, the definition of the word 'humanity' is always a rather complex question, isn’t it?" ,
"I reversed the polarity of the neutron flow.",
"Allow me to congratulate you, sir. You have the most totally closed mind that I've ever encountered.",
"Jo, look. That's Skaro.",
"A straight line may be the shortest distance between two points, but it is by no means the most interesting.",
"Good grief.... It's a Stegosaurus!",
"It's rather a pity, in a way...now the universe is down to 699 wonders.",
"A tear, Sarah Jane? No, don't cry. While there's life, there's...",
"I've reversed the polarity of the Neutron flow, so the TARDIS should be free from the force field now."  
];
  var words_fourth = ["Would you like a jelly baby?",
"Have a jelly baby.",
"Hello-o-o-o.",
"Come on!",
"You're standing on my scarf.",
"Are you listening to me?",
"Shut up, K-9!",
"You may be a doctor. But I'm the Doctor. The definite article, you might say.",
"Well, of course I'm being childish! There's no point being grown-up if you can't be childish sometimes.",
"It seems you have a very large rat Brigadier&mdash;maybe you should employ the services of a very large cat?",
"The trouble with computers, of course, is that they're very sophisticated idiots. They do exactly what you tell them at amazing speed. Even if you order them to kill you. So if you do happen to change your mind, it's very difficult to stop them from obeying the original order. But not impossible.",
"You're a clumsy, ham fisted idiot!",
"What?! Come out. And don't touch anything!",
"Well, my Doctorate is purely honorary and Harry is only qualified to work on sailors.",
"I might've been saying something important. I was saying something important! ",
"It may be irrational of me, but human beings are my favorite species."
  ];  
  var words_fifth = ["Brave heart, Tegan.",
"Sorry, must dash!",
"That's the trouble with regeneration. You quite never know what you're going to get.",
"For some people, small, beautiful events are what life is all about!",
"Well, it wouldn't be cricket.",
" This thing is smaller on the inside than it is on the outside.",
"It's times like this I wish I still had my scarf. ",
"Well, I'm still not the man I used to be…  thank goodness. ",
"Safety precaution. I'm allergic to certain gases in the praxis range of the spectrum. If the gas is present, the celery turns purple… I eat the celery. If nothing else, I'm sure it's good for my teeth.",
"Adric?",
"You may disguise your features but you can never disguise your intent.",
"Like Alice, I try to believe three impossible things before breakfast.",
"Dreams are important…never underestimate them.",
"Well, there's a probability of anything. Statistically speaking, if you gave typewriters to a treeful of monkeys, they'd eventually produce the works of William Shakespeare.",
"You know how it is; you put things off for a day and next thing you know, it's a hundred years later.", 
"Oh, marvellous. You're going to kill me. What a finely tuned response to the situation." , 
"There's always something to look at if you open your eyes!",
"That could blow a hole in the space-time continuum, the size of—actually, the exact size of Belgium. That's a bit undramatic, isn't it? 'Belgium'?"
  ];  
  var words_sixth = ["You were expecting someone else?",
"Change, my dear. And it seems not a moment too soon.",
"The waves of time wash us all clean." , 
"Rest is for the weary, sleep is for the dead. I feel like a hungry man eager for the feast!",
"A little gratitude wouldn't irretrievably damage my ego.",
"It's all right for you, Peri. You've only got one life. You'll age here in the TARDIS and then die. But me, I shall go on regenerating until all my lives are spent.",
"My last incarnation…oh, I was never happy with that one. It had a sort of feckless 'charm' which simply wasn't me.", 
"I think it's time to find your Achilles heel, or should I say - flipper.",
"Small though it is, the human brain can be quite effective when working at full efficiency, not unlike myself!" , 
"A knight of the GRAND ORDER OF OBERON! Only I would be stupid enough to attack such a person!",
"Planets come and go. Stars perish. Matter disperses, coalesces, forms into other patterns, other worlds. Nothing can be eternal.",
"This is a situation that requires tact and finesse. Fortunately, I am blessed with both.",
"Boring. And I hate hotels.",
"Did I? It must be the carrot juice making me colour blind! "  
];  
  var words_seventh = ["Two wrongs don't make a left turn.",
"Well Kangs, I must say, there's no place like home... and this is no place like home.",
"Are these antiques dotted about all over the building? It really is a splendid piece of audioarchitectonicalmetrasynchosity! ",
"Yes, that's right, you're going. You've been gone for ages. You're already gone. You're still here. You've just arrived. I haven't even met you yet. It all depends on who you are and how you look at it. Strange business, time.",
"Think about me when you're living your life one day after another, all in a neat pattern. Think about the homeless traveller and his old police box, with his days like crazy paving.",
"But there are three rules! One: I'm in charge. Two: I'm not 'the Professor', I'm the Doctor! And the third... Well, I'll think up the third by the time we get back to Perivale.",
"You can always judge a man by the quality of his enemies.",
"Your species has the most amazing capacity for self-deception, matched only by its ingenuity when trying to destroy itself.",
"Every great decision creates ripples. Like a huge boulder dropping in a lake. The ripples merge and rebound off the banks in unforseeable ways. The heavier the decision, the larger the waves, the more uncertain the consequences.",
"[The Hand of Omega] is called that because Time Lords have an infinite capacity for pretension.",
"I think I might have miscalculated.",
"Powerful! Crush the lesser races! Conquer the galaxy! UNIMAGINABLE POWER! UNLIMITED RICE PUDDING! Et cetera! Et cetera!",
"Excellent. Blow up that vehicle.",
"Anybody remotely interesting is mad in some way.",
"You ain't seen nothing yet!",
"Don't worry, Brigadier. People will be shooting at you soon.",
"Exotic alien swords are easy to come by, Aces are rare.",
"I can't stand burnt toast. I loathe bus stations. Terrible places. Full of lost luggage and lost souls.",
"We all have a universe of our own terrors to face.",
"Only the madman can see the way clearly through the tangled forest.",
"Subject for catalogue: file under 'imagination, comma, lack of'.",
"There are worlds out there where the sky is burning, and the sea's asleep, and the rivers dream; people made of smoke and cities made of song. Somewhere there's danger, somewhere there's injustice, and somewhere else the tea's getting cold. Come on, Ace. We've got work to do.",
"Timing malfunction. The Master! He's out there. I've got to stop... him..."
  ];
  var words_eighth = ["Who am I? WHO…AM…I?!",
"I know who I am, I… AM… THE DOCTOR!",
"Grace, I came back to life before your eyes. I held back death. Look, I can't make your dream come true forever, but I can make it come true today.",
"I love humans. Always seeing patterns in things that aren't there.",
"No… No-no-no-no-wait-wait-wait-wait… I remember I'm-I-I… I'm with my father, we're lying back in the grass, it's a warm Gallifreyan night&mdash;",
"Jelly baby?",
"The world's about to end, and here I am, stuck in traffic.",
"But it was a childish dream that made you a doctor. You dreamed you could hold back death. Isn't that true?",
"Don't be sad Grace. You'll do great things.",
"A TARDIS is my ship that carries me through Time and Space. T-A-R-D-I-S. It stands for Time And Relative Dimension In Space.",
"How can you miss me? I'm easy to find. I'm the guy with two hearts, remember?",
"I'm half human. On my mother's side.",
"The universe hangs by such a delicate thread of coincidences that it would be useless to meddle with it, unless like me you're a Time Lord.",
"Low tech? Grace, this is a type 40 TARDIS, able to take you to any planet in the universe and to any date in that planet's existence. Temporal physics.",
"Now would you stand aside before I shoot myself?",
"It was on the planet Skaro that my old enemy the Master was finally put on trial. They say he listened calmly as his list of evil crimes was read... and sentence passed. Then he made his last and I thought somewhat curious request. He demanded that I, the Doctor, a rival Timelord, should take his remains back to our home planet, Gallifrey.", 
"I'm a Doctor… though probably not the one that you were expecting",
"Physician, heal thyself.",
"Eight minutes is ages. What if I get bored? Give me knitting."
  ];  
  var words_ninth = ["Fantastic!",
"Do you wanna come with me? 'Cause if you do, then I should warn you — you're gonna see all sorts of things. Ghosts from the past. Aliens from the future. The day the Earth died in a ball of flame. It won't be quiet, it won't be safe, and it won't be calm. But I'll tell you what it will be: The trip of a lifetime!",
"Run.",
"Nice to meet you, Rose.",
"We're fallin' through space, you and me, clinging to the skin of this tiny little world, and if we let go...",
"t's called the TARDIS, this thing. T-A-R-D-I-S. That's Time And Relative Dimension In Space. That’s okay. Culture shock. Happens to the best of us.  ",
"Yeah, I came first in jiggery pokery, what about you?",
"You look beautiful! ...considering. That you're human. ",
"Now, don't antagonize her. I love a happy medium!",
"Nine hundred years of time and space, and I've never been slapped by someone's mother.",
"Ricky, if I was to tell you what I was doing to the controls of my frankly magnificent timeship, would you even begin to understand?",
"Excuse me, do you mind not farting while I'm saving the world?",
"Lots of planets have a North.",
"An old friend of mine. Well, enemy. The stuff of nightmares reduced to an exhibit. I'm getting old.",
"The thing is, Adam, time travel is like visiting Paris. You can't just read the guidebook, you've got to throw yourself in! Eat the food, use the wrong verbs, get charged double and end up kissing complete strangers! Or is that just me?      ",
"The past is another country. 1987's just the Isle of Wight.",
"Your wish is my command. But be careful what you wish for. ",
"One day, just one day, maybe I'll meet somebody who gets the whole 'don't wander off' thing.",
"And I'm looking for a blonde in a Union Jack. A specific one, mind, I didn't just wake up this morning with a craving.",
"And everybody lives, Rose! Everybody lives! I need more days like this! Go on, ask me anything; I'm on fire!",
"I think you need a doctor.",
"Rose... before I go, I just want to tell you: you were fantastic. Absolutely fantastic. And do you know what? So was I!"
  ];
  var words_tenth = ["Allons-y!",
"I'm sorry. I'm so sorry.",
"Aw, I wanted to be ginger! I've never been ginger! And you, Rose Tyler! Fat lot of good you were! You gave up on me! Ooh, that's rude. Is that the sort of man I am now? Am I rude? Rude and not ginger. ",
"Don't you think she looks tired?",
"It is! It's the city of New New York! Strictly speaking, it's the fifteenth New York since the original, so that makes it New-New-New-New-New-New-New-New-New-New-New-New-New-New-New New York.",
"New-new-Doctor.",
"I'm Dr. James McCrimmon from the township of Balamory.",
"You can spend the rest of your life with me, but I can't spend the rest of mine with you. I have to live on. Alone. That's the curse of the Time Lords.",
"Goodbye...my Sarah Jane!",
"Yeah? Well I'm the Lord of Time.",
"I'd call you a genius, except I'm in the room.",
"Sweet, maybe... Passionate, I suppose... But don't ever mistake that for nice.",
"Please, when Torchwood comes to write my complete history, don't tell people I travelled through time and space with her mother!",
"Oh, yes. Harmless is just the word: that's why I like it! Doesn't kill, doesn't wound, doesn't maim. But I'll tell you what it does do: it is very good at opening doors!",
"I'll tell you what, then: don't...step on any butterflies. What have butterflies ever done to you?",
"There was a war. A Time War. The Last Great Time War. My people fought a race called the Daleks, for the sake of all creation. And they lost. We lost. Everyone lost. They're all gone now. My family. My friends. Even that sky.",
"Black tie...Whenever I wear this, something bad always happens.",
"People assume that time is a strict progression of cause-and-effect... but actually, from a non-linear, non-subjective viewpoint, it's more like a big ball of wibbly-wobbly... timey-wimey... stuff.",
"I'm the Doctor, I can save the world with a kettle and some string! And look! I'm wearing a vegetable!",
"What? What?! WHAT?!",
"There's something else I've always wanted to say: Allons-y, Alonso!",
"You need to get yourself a better dictionary. When you do, look up 'genocide'. You'll find a little picture of me there, and the caption'll read 'Over my dead body'.",
"River, you know my name. You whispered my name in my ear! There's only one reason I would ever tell anyone my name. There's only one time I could...",
"Blimey, trying to make an Ood laugh...",
"I don't want to go."
  ];  
  var words_eleventh = ["Geronimo!",
"Bow ties are cool.",
"Come along, Pond!",
"I need...I need...I need... fish fingers and custard! ",
"Yes, well, it's a brilliant noise. I love that noise.",
"Overconfidence, this, and a small screwdriver. I’m absolutely sorted.",
"It's a fez. I wear a fez now. Fezzes are cool.",
"Father Christmas. Santa Claus. Or, as I’ve always known him, Jeff.",
"No idea. Just do what I do: hold tight and pretend it's a plan.",
"I know. Dinosaurs! On a spaceship!",
"Frightened people. Give me a Dalek any day.",
"Oh, I always rip out the last page of a book. Then it doesn't have to end. I hate endings!",
"Thank you, Strax. And if I'm ever in need of advice from a psychotic potato dwarf, you'll certainly be the first to know.",
"I never know why. I only know who.",
"You are the only mystery worth solving.",
"Usually called 'The Doctor.' Or 'The Caretaker.' Or 'Get off this planet.' Though, strictly speaking, that probably isn't a name.    ",
"There are fixed points throughout time where things must stay exactly the way they are. This is not one of them. This is an opportunity! Whatever happens here will create its own timeline, its own reality, a temporal tipping point. The future revolves around you, here, now, so do good!  ",
"There's something that doesn't make sense. Let's go and poke it with a stick.",
"Look at me. No plans, no backup, no weapons worth a damn. Oh, and something else I don't have: anything to lose. So, if you're sitting up there with your silly little spaceships and your silly little guns and you've any plans on taking the Pandorica tonight; just remember who's standing in your way. Remember every black day I ever stopped you and then, and then, do the smart thing. Let somebody else try first.",
"No. You're too short and bossy, and your nose is all funny.",
"Brave heart, Clara.",
"I once spent a hell of a long time trying to get a gobby Australian to Heathrow airport.",
 "Please tell me I didn't get old. Anything but old. I was young! Oh... is he grey?",
 "Goodbye, Clara."
  ];
 var words_twelfth = ["Be a pal and tell me, Am I a good man?", 
 "No sir. Thirteen!", 
 "Kidneys! I have kidneys. And I don't like the colour.", 
 "I just have one question… do you know how to fly this thing?", 
 "I've made many mistakes... and it's about time that I did something about that.",
 "Shush.",
 "Your hips are fine, you're built like a man!",
 "My carer. She cares so I don't have to.",
 "That's a relief. I hate babysitters.",
 "Don't be lasagna.",
 "It’s a bit more exciting when you go the other way.",
 "You see when I started, all those years ago, I was just running. I called myself the Doctor but it was just a name. Then I went to Skaro. And I met you lot. And I understood who I was.",
 "Mortuaries and larders. Easiest things to break out of.",
 "Soon, I expect. Or later. One of those.",
 "Underneath it all I think you're probably kind and nice, and very brave. I just wish you weren't a soldier.",
 "He was dead already, I'm saving us. Follow me, and run!",
 "Clara, I'm not your boyfriend. I never said it was your mistake.",
 "I was being chased by a giant dinosaur, but I think I've managed to give it the slip. Oh, you've got a dinosaur too!",
 "Well, you're very similar heights. Maybe you should wear labels.",
 "So you've got a room for not being awake in. What's the point? You're just missing the room!",
 "Sorry, I'm going to have to relieve you of your pet. Shut up, I was talking to the horse.",
 "No. That is not the question. That is not where we start.",
 "It's all right up to the eyebrows. Then it goes haywire.",
 "These are attack eyebrows. You could take bottle tops off with these.",
 "I'm Scottish. I can complain about things now. I can really complain about things now.",
 "I don't know. But I'd probably blame the English.",
 "Well, I would say that that person would be an egomaniac, need, game-player sort of person.",
 "Five foot one and crying - you never stood a chance.",
 "You realise one of us is lying about our basic programming. And I think we both know which one that is.",
 "I've lived for over 2000 years and not all of them have been good.",
 "Please just... just see me.",
 "I don't think that I'm a hugging person now.",
 "Shut it, Hoodie!",
 "I am totally against bantering.",
 "I don't need a sword. Because I'm the Doctor ... and this is my spoon.",
 "Once upon a time. The end. Dad skills.",
 "Why do you have three mirrors? Why don't you just turn your head?",
 "No, not the hugging. I'm against the hugging.",
 "Are you taller? Why? Do you have to reach a high shelf?",
 "My personal plan is that a thing will probably happen quite soon.",
 "Come on, Team Not Dead.",
 "When this is all over, you can find a shoulder to cry on. But for now, you need me."
 "Big scarf, bow tie, big embarrassing." 
 "What do you think of the new look? I was hoping for minimalism, but I think I came up with magician.",
 "Shuttity up up up!"
 ];

var words_war = ["Doctor no more.", "Great men are forged in fire. It is the privilege of lesser men to light the flame. Whatever the cost.", "Oh, for God's sake! Gallfrey stands!", "Are you capable of speaking without flapping your hands about?", "Oh, the pointing again! They're screwdrivers! What are you going to do? Assemble a cabinet at them?", "'Timey' what? 'Timey wimey'?", "Why are you pointing your screwdrivers like that? They're scientific instruments, not water pistols.", "If I grow to be half the man that you are, Clara Oswald, then I shall be happy indeed.", "Are you capable of speaking without flapping your hands about?", "Am I having a midlife crisis? Why are you pointing your screwdrivers like that? They're scientific instruments not water pistols!", "And in that battle there was a man with more blood on his hands than any other. A man who would commit a crime that would silence the universe. And that man was me.", "Why is there never a big red button?", "I don't have a future.", "Well, who are you boys? Oh, of course! Are you his companions?", "Shall we ask for a better quality of door so we can escape?", "Do you have to talk like children? What is it that makes you so ashamed of being a grown-up?", "Then, all things considered...it's time I grew up.", "Go and be the Doctor that I could never be.", "I don't suppose we'll ever know if we actually succeeded. But at worst, we failed doing the right thing, as opposed to succeeding in doing the wrong."  ];

  var words_all = words_first.concat(words_second, words_second, words_third, words_fourth, words_fifth, words_sixth, words_seventh, words_eighth, words_ninth, words_tenth, words_eleventh, words_twelfth, words_war);

//ELSE IF determines which array of words to show the user
  if (chosen_button == "all-doctors") {
   words = words_all;
} else if (chosen_button == "first-doctor") {
   words = words_first; 
} else if (chosen_button == "second-doctor") {
   words = words_second; 
} else if (chosen_button == "third-doctor") {
   words = words_third; 
} else if (chosen_button == "fourth-doctor") {
   words = words_fourth; 
} else if (chosen_button == "fifth-doctor") {
   words = words_fifth; 
} else if (chosen_button == "sixth-doctor") {
   words = words_sixth; 
} else if (chosen_button == "seventh-doctor") {
   words = words_seventh; 
} else if (chosen_button == "eighth-doctor") {
   words = words_eighth; 
} else if (chosen_button == "ninth-doctor") {
   words = words_ninth; 
} else if (chosen_button == "tenth-doctor") {
   words = words_tenth; 
} else if (chosen_button == "eleventh-doctor") {
   words = words_eleventh; 
} else if (chosen_button == "twelfth-doctor") {
   words = words_twelfth;
} else if (chosen_button == "war-doctor") {
   words = words_war;  
} else {
words = words_all; }

//Vary the number of sentences in each paragraph randomly
var sentence_number = /*Math.floor( (Math.random()+1) * 1 )*/ 1;

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

//Start the first FOR loop that builds sentences from words
for ( var z = 0; z < paragraph_number; z++ ) {
  var sentence_group = '';

//Start the second FOR loop that builds sentence groups from sentences
for ( var y = 0; y < sentence_number; y++ ) {



//Create a variable for the randomized array of words
  var words_random = fisherYates(words);

//Convert array to string with no commas or quotes, add period to end
  var sentence = ""; 
  rlength = 0;
  while(sentence.length < 500){
  sentence += words_random[rlength] + " ";
  rlength++;
  }
  sentence_group += sentence;  
//End the second FOR loop that builds sentence groups from sentences
       }
  paragraphs+='<p>' + sentence_group + '</p>';
//End the third FOR loop that builds and spaces paragraphs from sentence groups
    }

$("#print-paragraphs").empty().html(paragraphs);

//Prevent form from actually submitting so page does not reload
return false; 

//End jQuery event listener
  });
  
 //Hack to show text, need to fully modularise code so that this is dynamic from the start. 
$("#print-paragraphs").html("<p>Do you want a jelly baby? Don't be sad Grace. You'll do great things. Jamie, remind me to give you a lesson in tying knots, sometime. This thing is smaller on the inside than it is on the outside. Life depends on change and renewal. My ship…my TARDIS… Oh my word! Dreams are important…never underestimate them. I am the Doctor! The original, you might say! Oh I'm so sorry, Jamie. Would you like a jelly baby? Goodbye... Fancypants! I don't like it. Courage isn’t a matter of not being frightened, it’s being afraid and doing what you have to do anyway.</p>");

//End document ready
});
 
