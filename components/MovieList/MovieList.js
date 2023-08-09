const Movies = [
  {
    id: 1,
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    releaseYear: 2010,
  },
  {
    id: 2,
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    releaseYear: 2008,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    releaseYear: 1994,
  },
  {
    id: 4,
    title: "Fight Club",
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    releaseYear: 1999,
  },
  {
    id: 5,
    title: "Forrest Gump",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    releaseYear: 1994,
  },
  {
    id: 6,
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    releaseYear: 1994,
  },
  {
    id: 7,
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    releaseYear: 1972,
  },
  {
    id: 8,
    title: "The Matrix",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    releaseYear: 1999,
  },
  {
    id: 9,
    title: "Star Wars: Episode V - The Empire Strikes Back",
    description:
      "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
    releaseYear: 1980,
  },
  {
    id: 10,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    releaseYear: 2001,
  },
  {
    id: 11,
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    releaseYear: 2014,
  },
  {
    id: 12,
    title: "Gladiator",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    releaseYear: 2000,
  },
  {
    id: 13,
    title: "Inglourious Basterds",
    description:
      "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
    releaseYear: 2009,
  },
  {
    id: 14,
    title: "The Lion King",
    description:
      "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    releaseYear: 1994,
  },
  {
    id: 15,
    title: "Jurassic Park",
    description:
      "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
    releaseYear: 1993,
  },
  {
    id: 16,
    title: "The Notebook",
    description:
      "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
    releaseYear: 2004,
  },
  {
    id: 17,
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    releaseYear: 1972,
  },
  {
    id: 18,
    title: "Gone with the Wind",
    description:
      "A manipulative woman and a roguish man conduct a turbulent romance during the American Civil War and Reconstruction periods.",
    releaseYear: 1939,
  },
  {
    id: 19,
    title: "12 Angry Men",
    description:
      "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    releaseYear: 1957,
  },
  {
    id: 20,
    title: "Psycho",
    description:
      "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
    releaseYear: 1960,
  },
  {
    id: 21,
    title: "Spartacus",
    description:
      "The slave Spartacus leads a violent revolt against the decadent Roman Republic.",
    releaseYear: 1960,
  },
  {
    id: 22,
    title: "A Streetcar Named Desire",
    description:
      "Disturbed Blanche DuBois moves in with her sister in New Orleans and is tormented by her brutish brother-in-law while her reality crumbles around her.",
    releaseYear: 1951,
  },
  {
    id: 23,
    title: "The Graduate",
    description:
      "A disillusioned college graduate finds himself torn between his older lover and her daughter.",
    releaseYear: 1967,
  },
  {
    id: 24,
    title: "The Sting",
    description: "Two grifters team up to pull off the ultimate con.",
    releaseYear: 1973,
  },
  {
    id: 25,
    title: "The Exorcist",
    description:
      "When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.",
    releaseYear: 1973,
  },
  {
    id: 36,
    title: "Moonlight",
    description:
      "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
    releaseYear: 2016,
  },
  {
    id: 37,
    title: "Boyhood",
    description:
      "The life of Mason, from early childhood to his arrival at college.",
    releaseYear: 2014,
  },
  {
    id: 38,
    title: "Lady Bird",
    description:
      "In 2002, an artistically inclined seventeen-year-old girl comes of age in Sacramento, California.",
    releaseYear: 2017,
  },
  {
    id: 39,
    title: "Inside Out",
    description:
      "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
    releaseYear: 2015,
  },
  {
    id: 40,
    title: "Coco",
    description:
      "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    releaseYear: 2017,
  },
  {
    id: 41,
    title: "Parasite",
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    releaseYear: 2019,
  },
  {
    id: 42,
    title: "A Separation",
    description:
      "A married couple are faced with a difficult decision - to improve the life of their child by moving to another country or to stay in Iran and look after a deteriorating parent who has Alzheimer's disease.",
    releaseYear: 2011,
  },
  {
    id: 43,
    title: "Toy Story 4",
    description:
      "When a new toy called 'Forky' joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.",
    releaseYear: 2019,
  },
  {
    id: 44,
    title: "Three Billboards Outside Ebbing, Missouri",
    description:
      "A mother personally challenges the local authorities to solve her daughter's murder when they fail to catch the culprit.",
    releaseYear: 2017,
  },
  {
    id: 45,
    title: "Birdman",
    description:
      "A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production.",
    releaseYear: 2014,
  },
  {
    id: 46,
    title: "The Grand Budapest Hotel",
    description:
      "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    releaseYear: 2014,
  },
  {
    id: 47,
    title: "The Shape of Water",
    description:
      "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.",
    releaseYear: 2017,
  },
  {
    id: 48,
    title: "Black Panther",
    description:
      "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    releaseYear: 2018,
  },
  {
    id: 49,
    title: "Blade Runner 2049",
    description:
      "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    releaseYear: 2017,
  },
  {
    id: 50,
    title: "Hereditary",
    description:
      "A grieving family is haunted by tragic and disturbing occurrences.",
    releaseYear: 2018,
  },
  {
    id: 51,
    title: "Room",
    description:
      "Held captive for years in an enclosed space, a woman and her young son finally gain their freedom, allowing the boy to experience the outside world for the first time.",
    releaseYear: 2015,
  },
  {
    id: 52,
    title: "Dunkirk",
    description:
      "Allied soldiers from Belgium, the British Commonwealth and Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II.",
    releaseYear: 2017,
  },
  {
    id: 53,
    title: "Call Me by Your Name",
    description:
      "In 1980s Italy, romance blossoms between a seventeen-year-old student and the older man hired as his father's research assistant.",
    releaseYear: 2017,
  },
  {
    id: 54,
    title: "La La Land",
    description:
      "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    releaseYear: 2016,
  },
  {
    id: 55,
    title: "The Revenant",
    description:
      "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
    releaseYear: 2015,
  },
  {
    id: 56,
    title: "Mad Max: Fury Road",
    description:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
    releaseYear: 2015,
  },
  {
    id: 57,
    title: "The Big Short",
    description:
      "In 2006-2007 a group of investors bet against the US mortgage market. In their research they discover how flawed and corrupt the market is.",
    releaseYear: 2015,
  },
  {
    id: 58,
    title: "Spotlight",
    description:
      "The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.",
    releaseYear: 2015,
  },
  {
    id: 59,
    title: "Get Out",
    description:
      "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    releaseYear: 2017,
  },
  {
    id: 60,
    title: "Guardians of the Galaxy",
    description:
      "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    releaseYear: 2014,
  },
  {
    id: 61,
    title: "The Martian",
    description:
      "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
    releaseYear: 2015,
  },
  {
    id: 62,
    title: "The Witch",
    description:
      "A family in 1630s New England is torn apart by the forces of witchcraft, black magic, and possession.",
    releaseYear: 2015,
  },
  {
    id: 63,
    title: "John Wick",
    description:
      "An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
    releaseYear: 2014,
  },
  {
    id: 64,
    title: "American Sniper",
    description:
      "Navy S.E.A.L. sniper Chris Kyle's pinpoint accuracy saves countless lives on the battlefield and turns him into a legend. Back home with his family after four tours of duty, however, Chris finds that it is the war he can't leave behind.",
    releaseYear: 2014,
  },
  {
    id: 65,
    title: "The Hateful Eight",
    description:
      "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.",
    releaseYear: 2015,
  },
  {
    id: 66,
    title: "Three Billboards Outside Ebbing, Missouri",
    description:
      "A mother personally challenges the local authorities to solve her daughter's murder when they fail to catch the culprit.",
    releaseYear: 2017,
  },
  {
    id: 67,
    title: "Birdman",
    description:
      "A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production.",
    releaseYear: 2014,
  },
  {
    id: 68,
    title: "Arrival",
    description:
      "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
    releaseYear: 2016,
  },
  {
    id: 69,
    title: "The Theory of Everything",
    description:
      "The story of the relationship between the famous physicist Stephen Hawking and his wife.",
    releaseYear: 2014,
  },
  {
    id: 70,
    title: "Moonlight",
    description:
      "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
    releaseYear: 2016,
  },
  {
    id: 71,
    title: "A Star Is Born",
    description:
      "A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.",
    releaseYear: 2018,
  },
  {
    id: 72,
    title: "Baby Driver",
    description:
      "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
    releaseYear: 2017,
  },
  {
    id: 73,
    title: "Manchester by the Sea",
    description:
      "A depressed uncle is asked to take care of his teenage nephew after the boy's father dies.",
    releaseYear: 2016,
  },
  {
    id: 74,
    title: "Ex Machina",
    description:
      "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.",
    releaseYear: 2014,
  },
  {
    id: 75,
    title: "The Favourite",
    description:
      "In early 18th century England, a frail Queen Anne occupies the throne and her close friend, Lady Sarah, governs the country in her stead. When a new servant, Abigail, arrives, her charm endears her to Sarah.",
    releaseYear: 2018,
  },
  {
    id: 76,
    title: "Lady Bird",
    description:
      "In 2002, an artistically inclined seventeen-year-old girl comes of age in Sacramento, California.",
    releaseYear: 2017,
  },
  {
    id: 77,
    title: "Boyhood",
    description:
      "The life of Mason, from early childhood to his arrival at college.",
    releaseYear: 2014,
  },
  {
    id: 78,
    title: "Phantom Thread",
    description:
      "Set in 1950s London, Reynolds Woodcock is a renowned dressmaker whose fastidious life is disrupted by a young, strong-willed woman, Alma, who becomes his muse and lover.",
    releaseYear: 2017,
  },
  {
    id: 79,
    title: "Hacksaw Ridge",
    description:
      "World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people, and becomes the first man in American history to receive the Medal of Honor without firing a shot.",
    releaseYear: 2016,
  },
  {
    id: 80,
    title: "The Imitation Game",
    description:
      "During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians.",
    releaseYear: 2014,
  },
  {
    id: 81,
    title: "Lion",
    description:
      "A five-year-old Indian boy is adopted by an Australian couple after getting lost hundreds of kilometers from home. 25 years later, he sets out to find his lost family.",
    releaseYear: 2016,
  },
  {
    id: 82,
    title: "Hidden Figures",
    description:
      "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program.",
    releaseYear: 2016,
  },
  {
    id: 83,
    title: "The Disaster Artist",
    description:
      "When Greg Sestero, an aspiring film actor, meets the weird and mysterious Tommy Wiseau in an acting class, they form a unique friendship and travel to Hollywood to make their dreams come true.",
    releaseYear: 2017,
  },
  {
    id: 84,
    title: "12 Years a Slave",
    description:
      "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
    releaseYear: 2013,
  },
  {
    id: 85,
    title: "The Lobster",
    description:
      "In a dystopian near future, single people, according to the laws of The City, are taken to The Hotel, where they are obliged to find a romantic partner in forty-five days or are transformed into beasts and sent off into The Woods.",
    releaseYear: 2015,
  },
];

export default Movies;
