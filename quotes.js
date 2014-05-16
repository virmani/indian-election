var qindex = -1;

$("#nextButton").click(function () {
  var quotes = [
  "Poverty is just a state of mind. It does not mean scarcity of food, money or material things. If one possesses self-confidence then we can overcome poverty.",
  "People call us an elephant.. We are not an elephant.. we are a beehive.. it's funny but think about it. Which is more powerful? an elephant or a beehive?",
  "It (Congress) is a funny party. It is the largest political organization in the world but perhaps does not have a single rule or regulation. We create new rules every two minutes and then dump them. Nobody knows the rules in the party",
  "If India is a computer, Congress is its default programme.",
  "Dalit community 'needs the escape velocity of Jupiter' to achieve success.",
  "We go into this model where you have the one guy who will come and fix everything. He is going to come on a horse, that’s the model, that’s the Indian model. He is going to come on the horse, the Sun is in the background. There are a billion people waiting. He is coming and everything is going to be fine. No. It’s not going to work like that.",
  "It is very difficult to stop every single terror attack. We will stop 99% terror attacks but 1 % of attacks might get through.",
  "Every situation that Indian person finds himself in is extremely complex. We have to deal with the red lights. As young leaders here have to deal with senior leaders, suddenly someone disrupts your entire life. Everything happens, sort of, according to your karma; it’s all random.",
  "If you go back a hundred, two hundred years, you would find that India is energy; it is a force. If you go back a thousand years, two thousand years, you would find that force came from our rivers: Ganga, Yamuna, Saraswati. We worshiped these rivers and the reason we worshiped these rivers was because that is where our energy came from, and everything we had was built on these rivers. Now, we have gone way beyond that. We have built structures that are allowing this energy to rise, to explode.",
  "I went to University in 1991, and I remember, nobody thought of India. I remember conversations where people would laugh and say, “Do you have elephants on the road?” Nobody is saying that today.",
  "India is going to be the 21st century's Saudi Arabia in terms of human resources",
  "You should stop asking your politicians how they’re gonna do it.",
  "I would not have been here if I was not from a political family.",
  "See, there is a tendency to look at India as a country.",
  "Politics is everywhere.. it is in your shirt.. in your pants.. everywhere.",
  "Passion is listening.",
  "China is referred to as the ‘dragon’ and India as an ‘elephant’. But we are not an elephant, we are a ‘beehive’.",
  "If I am incompetent, I am useless, the people of India will see that.",
  "I am not averse to politics, but that does not mean that I am going to join politics.",
  "The Opposition has good marketing skills. There is 'chamak, naach, gaana (glitter, dancing, singing)'. They are selling combs to bald men. Now there are a new group of people who are trying to give them haircuts.",
  "You go to a nightclub somewhere in Spain and there’s Amitabh Bachchan on the screen there, dancing around. That’s the power of India.",
  "Hindustan Ek Soch hai. Hindustan Ek Jagah Hai... Magar Hindustan Ek Soch Hai",
  "What Rahul Gandhi wants to do, is Rahul Gandhi and millions of youngsters in this country want to change the way the system in this country works. What Rahul Gandhi wants to do is empower the women in this country, wants to unleash the power of these women, I mean we talk about being a superpower...",
  "The BJP has prime ministerial candidate, the BJP believes in concentration of power in the hands of one person, I fundamentally disagree with that, I believe in democracy, I believe in opening up the system. I believe in the RTI, I believe in giving power to our people. We have fundamentally different philosophies",
  "The spirit of India has to move forward.",
  "I mean ..."
  ];

  $("#quote").text(quotes[(++qindex % quotes.length)])
})

$("#nextButton").click()

