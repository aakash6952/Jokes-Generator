// import jokes from './jokes.js';
// console.log(jokes[6])
const jokesArray = [`What falls, but never needs a bandage 
The rain.😂`,

  `I was going to tell you a joke about boxing but I forgot the punch line.😂`,

  `I'm not a fan of spring cleaning. Let's be honest, I'm not into summer, fall, 
or winter cleaning either.😂`,

  `Why did the egg hide 
It was a little chicken.😂`,

  `What did the dirt say to the rain 
If you keep this up, 
my name will be mud!😂`,

  `Why couldn't the sunflower ride its bike
It lost its petals.😂`,

  `What's an egg's favorite vacation spot 
New Yolk City.😂`,

  `I ate a sock yesterday.It was very time - consuming.😂`,

  `What kind of candy do astronauts like 
Mars bars.😂`,

  `I wanted to buy some camo pants but couldn't find any.😂`,

  `I ordered a chicken and an egg from Amazon.I'll let you know.😂`,

  `What month is the shortest of the year May, 
it only has three letters.😂`,

  `What did the snail who was riding on the turtle's back say
Wheeeee!😂`,

  `I was going to tell a time traveling joke, 
but you guys didn't like it.😂`,

  `What do you call a lazy kangaroo 
A pouch potato.😂`,

  `I used to run a dating service for chickens, 
but I was struggling to make hens meet.😂`,

  `Why do we tell actors to break a leg
Because every play has a cast.😂`,

  `What does a pig put on dry skin 
Oinkment.😂`,

  `What do you call it when a snowman throws a tantrum 
A meltdown.😂`,

  `My uncle named his dogs Timex and Rolex.They're his watch dogs.😂`,

  `Did you hear about the guy whose left side was cut off 
He's all right now.😂`,

  `How do you open a banana 
With a mon - key.😂`,

  `Which is faster, 
hot or cold 
Hot, 
because you can catch cold.😂`,

  `What did one plate say to the other plate 
Dinner's on me.😂`,

  `Why do oranges wear sunscreen 
So they don't peel.😂`,

  `My wife told me to stop acting like a flamingo, 
so I had to put my foot down.😂`,

  `What do you call a pig that does karate 
A pork chop.😂`,

  `Where does Batman go to the bathroom 
The batroom.😂`,

  `What do you call a pony with a sore throat 
A little horse.😂`,

  `What did the left eye say to the right eye Between you and me, 
something smells.😂`,

  `What did the mama tomato say to the baby tomato 
Catch up!😂`,

  `Why didn't the melons get married
Because they cantaloupe.😂`,

  `What do you call a fake noodle 
An impasta.😂`,

  `How did the pig get to the hogspital 
In a hambulance.😂`,

  `I'm so good at sleeping I can do it with my eyes closed!😂`,

  `Why does Humpty Dumpty love autumn 
Because he had a great fall.😂`,

  `What happens when a strawberry gets run over crossing the street 
Traffic jam.😂`,

  `Why did the cow jump over the moon 
The farmer had cold hands.😂`,

  `A termite walks into a bar and says, 
So, 
is the bar tender here😂`,

  `How does an octopus go into battle 
Well - armed.😂`,

  `What do you call a pudgy psychic 
A four - chin teller.😂`,

  `What do you get when you mix a cocker spaniel, 
a poodle,and a ghost 
A cocker - poodle boo.😂`,

  `How do celebrities stay cool 
They have many fans.😂`,

  `What does a pickle say when he wants to play cards 
Dill me in!😂`,

  `How much money does a pirate pay for corn 
A buccaneer.😂`,

  `Where do young trees go to learn 
Elementree school.😂`,

  `Why do bees have sticky hair 
Because they use a honeycomb.😂`,

  `How did the student feel when he learned about electricity 
Totally shocked.😂`,

  `What do you call a bee that can't make up its mind
A Maybe.😂`,

  `Why was six afraid of seven 
Because 7 - 8 - 9.😂`,

  `If April showers bring May flowers, 
what do May flowers bring 
Pilgrims.😂`,

  `I tried to catch fog yesterday.Mist.😂`,

  `What do you call a hippie's wife
Mississippi.😂`,

  `Two peanuts were walking down the street.One was a - salted.😂`,

  `How can you tell it’s a dogwood tree 
By the bark.😂`,

  `What did the buffalo say when his kid went to college 
Bison.😂`,

  `What did the mayonnaise say when the refrigerator door was opened 
Close the door, 
I'm dressing.😂`,

  `What's the stinkiest planet
Poopiter.😂`,

  `What did one wall say to the other 
I'll meet you at the corner.😂`,

  `Why don't sharks eat clowns
Because they taste funny.😂`,

  `A horse walks into a bar.The bartender says, 
Why the long face😂`,

  `What's black and white and goes round and round
A penguin in the washing machine.😂`,

  `How do you organize a space party 
You planet.😂`,

  `Why couldn't the bicycle stand up by itself
It was two tired.😂`,

  `Did you hear the rumor about butter 
Well, 
I'm not going to spread it.😂`,

  `Why did the student eat his homework 
Because his teacher told him it was a piece of cake.😂`,

  `Why was the coach yelling at the vending machine 
He wanted his quarter back.😂`,

  `What did one hat say to the other 
You wait here, 
I'll go on ahead.😂`,

  `What do you call a dinosaur that crashes his car 
Tyrannosaurus Wrecks.😂`,

  `I couldn't figure out why the baseball kept getting larger. Then it hit me.😂`,

  `What do you call a boomerang that won’t come back 
A stick.😂`,

  `What did the full glass say to the empty glass 
You look drunk.😂`,

  `How do you stop a bull from charging 
Cancel its credit card.😂`,

  `Why don’t we see elephants hiding in trees 
Because they’re really good at it.😂`,

  `What’s the difference between a hippo and a zippo 
One’s pretty heavy and the other’s a little lighter.😂`,

  `Did you hear the one about the roof 
Never mind, 
it's over your head.😂`,

  `I used to hate facial hair...but then it grew on me.😂`,

  `A cheese factory exploded in France.Da brie was everywhere.😂`,

  `What's a ninja's favorite type of shoes
neakers.😂`,

  `What's the best smelling insect
A deodor-ant.😂`,

  `What do you call a bear without any teeth 
A gummy bear.😂`]


function randomJokeGen() {
  const randomNumberInput = document.getElementById('randomNumber');
  const jokeDislpay = document.getElementById('jokeDisplay')
  userNumberInput = parseInt(randomNumberInput.value)
  if (isNaN(userNumberInput) || userNumberInput <= 0 || userNumberInput > jokesArray.length) {
    jokeDislpay.textContent = "Please enter the valid no. from 1 to " + jokesArray.length + ".";
  }
  else {
    const selectJoke = jokesArray[userNumberInput - 1]
    jokeDislpay.textContent = selectJoke;
  
}
  }