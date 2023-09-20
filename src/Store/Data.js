import React, {createContext, useState } from "react";

export const Store =createContext();
const ContextStore=(props)=>{
const[data,setdata]=useState([
    

     {
     id:1,
     name:'Adipurush',
    //  head:'Adipurush To Ghoomer: Major Bollywood Flops Of 2023 So Far',
     category:'BollyWood',
     image:'https://img.republicworld.com/republic-prod/stories/images/xxhdpi/169355854764f1a713383bb.jpeg?tr=w-758,h-433',
     para:'Adipurush (transl. First man)[a] is a 2023 Indian mythological action film based on the Hindu epic Ramayana.[9] The film is directed and co-written by Om Raut, and produced by T-Series and Retrophiles. Shot simultaneously in Hindi and Telugu, the film features Prabhas, Saif Ali Khan, Kriti Sanon, Sunny Singh, and Devdutta Nage.The film was announced in August 2020, through an official motion poster. Principal photography, which took place primarily in Mumbai, commenced in February 2021 and ended in November 2021. The film s music is composed by Ajay–Atul. Adipurush is budgeted at ₹500 crore (US$63 million)–₹700 crore (US$88 million) placing it in the list of most expensive Indian films.[10][3][4] Adipurush was released on 16 June 2023 to negative reviews from critics, who criticised the film s screenplay, dialogues and visuals.',
    error:"page is not found"
 },

 {
    id:2,
    name:'Kick',
    category:'BollyWood',
    image:'https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/83723409-306x393.jpg',
    para:'The premise of KICK, first! On a train journey in Warsaw, a pretty psychiatrist, Shaina [Jacqueline Fernandez], meets Himanshu [Randeep Hooda], a police officer from India, for an arranged match. They share their pasts with each other...',
    error:"page is not found"
 },
{
    id:3,
    name:'Dono',
    category:'BollyWood',
    image:'https://media5.bollywoodhungama.in/wp-content/uploads/2023/07/Dono-4-306x393.jpg',
    para:'Hum Dono (Both of Us) is a 1961 Hindi film produced by Dev Anand and Navketan films. Amarjeet is credited as the film s director, but producer and star Dev Anand claimed that it was his brother Vijay Anand, who directed the film, based on his own script.[1] The film stars Dev Anand in a double role, and also has Sadhana, Nanda and Leela Chitnis.It was relaunched in colour after exactly 50 years on 4 February 2011.[2] The film is also known for its music by Jaidev and became a box office hit.[3] The movie was later made in Telugu as Ramuni Minchina Ramudu with N. T. Rama Rao. Also, a Bengali movie Uttarayan was made starring Uttam Kumar in the lead based on the novel by Tarashankar Bandopadhyay. Hum Dono s story is loosely based on Uttarayan. The movie is fondly remembered for its memorable lyrics by Sahir Ludhianvi and music by Jaidev.',
    error:"page is not found"

},
{
    id:4,
    name:'PK',
    category:'BollyWood',
    image:"https://stat4.bollywoodhungama.in/wp-content/uploads/2016/03/89649841-306x393.jpg",
    para:"An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate the impact of there religious views on there people...",
    error:"page is not found"

},
{
    id:5,
    name:'Ganapath',
    category:'BollyWood',
    image:'https://i.ytimg.com/vi/oeYVvK5rDhA/maxresdefault.jpg',
    para:'Part 1 is an upcoming Indian Hindi-language dystopian action film directed by Vikas Bahl, who produced it under his banner Good Co in association with Jackky Bhagnani, Vashu Bhagnani...',
    error:"page is not found"
},

{
    id:6,
name:'Mangal Pandey',
category:'BollyWood',
image:'https://tse4.mm.bing.net/th?id=OIP.jBveNvhXdhqgguenKhPRTQHaEK&pid=Api&P=0&h=180',
para:'Mangal Pandey was an Indian soldier who played a key role in the events taking place just before the outbreak of the Indian rebellion of 1857. He was a sepoy (infantryman) in the 34th Bengal Nativ...',
error:"page is not found"

},


{
    id:7,
    name:'Razzi',
    category:'BollyWood',
    image:'https://pbs.twimg.com/media/DaVZd4hUwAIuaas.jpg',
    para:'Raazi streaming: where to watch online? Currently you are able to watch "Raazi" streaming on Amazon Prime Video. It is also possible to buy "Raazi" on Apple TV as download or rent it on...',
    error:"page is not found"


},
{
    id:8,
    name:'Dhamaal',
    category:'BollyWood',
    image:'https://tse3.mm.bing.net/th?id=OIP.yRGAKyRLAV9sMJ3tR_H65AHaFj&pid=Api&P=0&h=180',
    para:'Dhamaal is an Indian comedy film series directed and co-produced by Indra Kumar. It stars Ritesh Deshmukh, Arshad Warsi, Javed Jaffrey and Sanjay Dutt in lead roles.[1]Dhamaal was released on 7 September 2007 and its also spawned two direct sequels Double Dhamaal (2011) and then a reboot Total Dhamaal (2019).',
    error:"page is not found"


},
{
    id:9,
    name:'Sanju',
    category:'BollyWood',
    image:'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/06/sanju-upcoming-bollywood-movie-1528459687.jpg',
    para:'Sanju is a 2018 Indian Hindi-language biographical film directed and edited by Rajkumar Hirani, written by Hirani and Abhijat Joshi and produced by Hirani and Vidhu Vinod Chopra under the banners Rajkumar Hirani Films and Vinod Chopra Films. ',
    error:"page is not found"
},
{
    id:10,
    name:'Dhoom 3',
    category:'BollyWood',
    image:'https://4.bp.blogspot.com/-MoWeLOJLtVc/UrdIy-spfsI/AAAAAAAAA0k/nm1zk76Qlq4/s1600/dhoom-3-10d.jpg',
    para:"Dhoom 3 was released on 20 December 2013 and received mixed reviews from critics alike.[9] It was the first Indian film to be released in the IMAX motion picture film format[10] with Dolby Atmos surround sound...",
    error:"page is not found"
},
{
    id:11,
    name:'Ram Lila',
    category:'BollyWood',
    image:'http://4.bp.blogspot.com/-HkMpdusK29s/VjxKj0EKgrI/AAAAAAAADTQ/yfWE3PgXWLc/s1600/bollywood-movie-ram-leela-poster-download-free-wallpapers-of-indian-movies.jpg',
    para:'Rama is the seventh avatar of the Hindu god Vishnu and the central figure of the Ramayana, a Sanskrit epic that integrates performance arts with stories driven by ethical values. The epic text is dated to the 1st millennium BCE and Ramlila is an adaptation of those stories. Most Ramlilas in North India are based on the 16th-century secondary work on Ramayana, Ramcharitmanas a verse form composition in the regional vernacular language (Awadhi a dialect of Hindi[7]), by Tulsidas.',
    error:"page is not found"

},
{
    id:12,
    name:"Pathan",
    category:'BollyWood',
    image:"https://tse2.mm.bing.net/th?id=OIP.IjIP_fA6MP0cE6RYIOxbmQHaEK&pid=Api&P=0&h=180",
    para:'Pathaan was theatrically released in India on 25 January 2023, coinciding with the Republic Day weekend, and received positive reviews from critics who praised its action sequences, music and cast performances.[6][7] It set several box office records for a Hindi film, including the highest opening day, highest single day, highest opening weekend and highest opening week for a Hindi film in India...',
    error:"page is not found"
},
{
    id:13,
    name:'Anjaana Anjaani',
    category:'BollyWood',
    image:'https://tse1.mm.bing.net/th?id=OIP.fT244vzbimqN4ApYdYrPkgHaJ3&pid=Api&P=0&h=180',
    para:'Anjaana Anjaani (transl. "Strangers") is a 2010 Indian Hindi-language romantic comedy drama film directed by Siddharth Anand and produced by Sajid Nadiadwala. The film stars Ranbir Kapoor and Priyanka Chopra as two suicidal strangers who meet and make a pact to commit suicide in 20 days on New Year...',
    error:"page is not found"
},
{
    id:14,
    name:'Kaabil',
    category:'BollyWood',
    image:'https://image3.mouthshut.com/images/ImagesR/2017/1/Kaabil-925837553-6000846-1.jpg',
    para:"Kaabil (transl. Capable) is a 2017 Indian Hindi-language romantic action thriller film[5][6] directed by Sanjay Gupta, written by Vijay Kumar Mishra, produced by Rakesh Roshan under his banner FilmKraft Productions.[7] It stars Hrithik Roshan, Yami Gautam, Ronit Roy and Rohit Roy. The music was composed by Rajesh Roshan. Principal photography of the film began on 30 March 2016",
    error:"page is not found"


},
// {
//     id:15,
//     name:'Raees',
//     category:'BollyWood',
//     image:'https://tse2.mm.bing.net/th?id=OIP.1acgsn7FamUv6uHz3MlaZgHaEK&pid=Api&P=0&h=180',
//     para:'Raees (transl. Rich) is a 2017 Indian Hindi-language action film[6] directed by Rahul Dholakia and produced by Red Chillies Entertainment and Excel Entertainment.[7] It stars Shah Rukh Khan, Nawazuddin Siddiqui and Mahira Khan.[8][9][10] Raees is said to be based on the criminal Abdul Latif s life,[11] however, the filmmakers have denied this.1...'
// },




{
    id:16,
    name:"Storm",
    category:'Hollywood',
    image:'https://i.pinimg.com/originals/ef/ec/a4/efeca473ffcdf5a522bdda88baded6fc.jpg',
    para:'Storyline: A meteorologist sets out to derail the top secret weather-manipulating program he mistakenly became a part of Starcasts Luke Perry Marteen Sheen Robert Knot, David Moses, Alexndra Powers, MArc Mcclure, Renée Estevez, Glenn Shadix, E.E. Bell, Kathleen Randazzo, Christopher Michael, Amanda Foreman, David MarkeyDirection  Harris Done, Producer Jeffery BeachMusic Nathan Wan...',
    error:"page is not found"


},
{
    id:17,
    name:"Jumanji",
    category:'Hollywood',
    image:'https://tse3.mm.bing.net/th?id=OIP.1If9jMythTlW0-EZ_UsoNQHaLH&pid=Api&P=0&h=180',
    para:'Jumanji is a 1995 American urban fantasy adventure film directed by Joe Johnston from a screenplay by Jonathan Hensleigh, Greg Taylor, and Jim Strain, based on the 1981 children s picture book of the same name by Chris Van Allsburg. The film is the first installment in the Jumanji film series. It stars Robin Williams, Kirsten Dunst, David Alan Grier, Bonnie Hunt, Jonathan Hyde, and Bebe Neuwirth. The story centers on a supernatural board game that releases jungle-based hazards upon its players with every turn they take...',
    error:"page is not found"


},
{
    id:18,
    name:'Avatar',
    category:'Hollywood',
    image:'https://cdn.wallpapersafari.com/86/95/Idsx01.jpg',
    para:'“Avatar: The Way of Water” begins to tell the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive,  and the tragedies they endure.Directed by James Cameron and produced by Cameron and Jon Landau, the film stars Zoe Saldana, Sam Worthington, Sigourney Weaver, Stephen Lang, Cliff Curtis, Joel David Moore, CCH Pounder, Edie Falco, Jemaine Clement and Kate Winslet. ',
    error:"page is not found"

},
{
    id:19,
    name:'StallOne',
    category:'Hollywood',
    image:"https://1.bp.blogspot.com/-3pk40BzChvY/Xr5GPNTRuDI/AAAAAAAAAy0/j7VQnZ453DkeQaMuxPD3i_7i219SAG_4gCLcBGAsYHQ/w1200-h630-p-k-no-nu/91STOoJjaoL._SL1500_.jpg",
    para :"Jason Statham, Sylvester Stallone’s Expend4bles to release in Indian theatres on this date Hollywood powerhouse duo, Jason Statham and Sylvester Stallone, bring explosive action to India in Expend4bles.",
    error:"page is not found"




},
{
    id:20,
    name:"Tarminator",
    category:'Hollywood',
    image:'http://listtop10s.com/wp-content/uploads/2015/06/Most-Awaited-Hollywood-Movies-2015-Terminator-Genisys.jpg',
    para:'The Terminator is a 1984 American science fiction action film directed by James Cameron. It stars Arnold Schwarzenegger as the Terminator, a cybernetic assassin sent back in time from 2029 to 1984 to kill Sarah Connor (Linda Hamilton), whose unborn son will one day save mankind from extinction by Skynet, a hostile artificial intelligence in a post-apocalyptic future. Kyle Reese (Michael Biehn) is a soldier sent back in time to protect Sarah. The screenplay is credited to Cameron and producer Gale Anne Hurd, while co-writer William Wisher Jr. received an "additional dialogue" credit.',
    error:"page is not found"
},
{
    id:21,
    name:'Tiger Hosue',
    category:'Hollywood',
    image:'https://tse2.mm.bing.net/th?id=OIP.BI3jmP93ojNRFSBXcpIL0AHaEK&pid=Api&P=0&h=180',
    para:'Tiger House is a 2015 action thriller film[1][2] directed by Thomas Daley and starring Kaya Scodelario, Dougray Scott, and Ed Skrein. Scodelario stars as an injured and pregnant gymnast who must defend her boyfriend s house against a home invasion. The film is produced by the United Kingdom-based Glass Man Films and the South Africa–based Tiger House Film. The film, set in the United Kingdom, was filmed in South Africa. Koch Media acquired distribution rights for the United Kingdom. Tiger House was released for digital download on 24 August 2015 and on home media on 1 September 2015',
    error:"page is not found"
},
{
    id:22,
    name:'BLACK JUNGLE',
    category:'Hollywood',
    image:'https://tse1.mm.bing.net/th?id=OIP.lMLGGHEzCcnw-UAke55M_gHaEK&pid=Api&P=0&h=180',
    para:'Action Tadka India:The one stop for the latest on Bollywood, Tollywood, Kollywood, Sandalwood and Mollywood  Upcoming Bollywood Films,South Dubbed,New Released Hindi Movies, Hollwood Dubbed Movies and a host of other Action videos - A+ Movies  for you to entertain 24 hours. Be it the latest updated movies, free mobile, new song, watching new film, old superhit movie, and all in an endless thread of entertainment in our youtube list.',
    error:"page is not found"
},
{
    id:23,
    name:'LOOPER',
    category:'Hollywood',
    image:'https://tse3.mm.bing.net/th?id=OIP.GhbqP8kOSu0jIcPoZedTJgHaFj&pid=Api&P=0&h=180',
    para:'Looper is a 2012 American science fiction action-thriller film[4] written and directed by Rian Johnson, and produced by Ram Bergman and James D. Stern. It stars Bruce Willis, Joseph Gordon-Levitt, and Emily Blunt. It revolves around "present-day" contract killers called "loopers", hired by criminal syndicates from the future to terminate victims whom they send back through time.',
    error:"page is not found"
},
{
    id:24,
    name:'INSIGHT',
    category:'Hollywood',
    image:'https://www.naijaprey.com/wp-content/uploads/2021/03/Insights-Movie.jpg',
    para:'Premise. Jian is a counter-terrorism agent with skills in martial arts and clairvoyance. With reluctant help from detectives of the Los Angeles Police Department, Jian investigates the death of his...',
    error:"page is not found"


},
{
    id:25,
    name:'TSUNAMI',
    category:'Hollywood',
    image:'https://i.pinimg.com/originals/67/50/70/6750707b61af52c147523499c1fad75e.jpg',
    para:'Tsunamis leave nothing but death and destruction in their wake decimating not only real estate but also countless lives. The human spirit, however, has always been resilient and will continue to be. After the Indian Ocean catastrophe the Indian community built themselves up and as did the victims of Katrina',
    error:"page is not found"



},
{
    id:26,
    name:'WRONG HOUSE',
    category:'Hollywood',
    image:'https://i.ytimg.com/vi/zWHqaLV19EI/maxresdefault.jpg',
    para:'THE WRONG HOUSE - EXCLUSIVE PREMIERE - FULL HD HORROR MOVIE IN ENGLISH 2 families looking for a new home go to an isolated open house, but when they find a girl with no...',
    error:"page is not found"
},
{
    id:27,
    name:'THE NUN 2',
    category:'Hollywood',
    image:'https://www.dekhnews.com/entertainment/wp-content/uploads/2020/05/maxresdefault-64-1200x675-cropped.jpg',
    para:'In 2018, a film was released that surprised everyone and turned out to be a sleeper hit. ‘The Nun’, whose poster had a menacing-looking woman dressed up in holy attire, but having unholy intentions and a death stare in those demonic eyes, soon became a part of pop culture. In its follow up, we see the return of this demonic nun aka Valak (Bonnie Aarons), who is now on the hunt for a pair of eyes that will give her super power and more strength to cause death and destruction...',
    error:"page is not found"
},
{
id:28,
name:'WOLF MAN',
category:'Hollywood',
image:'https://i.ytimg.com/vi/LLkGb5SX1FM/maxresdefault.jpg',
para:'The Wolfman is a 2010 American period horror film directed by Joe Johnston, from a screenplay by Andrew Kevin Walker and David Self. A remake of the 1941 film The Wolf Man, it stars Benicio del Toro (who also produced), Anthony Hopkins, Emily Blunt and Hugo Weaving. The film’s story follows an actor based in America who, after his brothers brutal murder, returns to his ancestral homeland in England, where he gets bitten by a werewolf and is cursed to become one.',
error:"page is not found"


},
{
id:29,
name:'ELYSIUM',
category:'Hollywood',
image:'https://tse3.mm.bing.net/th?id=OIP.t1FDNkj9uiKrknX46RXwBgHaFL&pid=Api&P=0&h=180',
para:'Elysium is a 2013 American dystopian science fiction action film written, produced, and directed by Neill Blomkamp. It was Blomkamps second directorial effort. The film stars Matt Damon and Jodie Foster alongside Sharlto Copley, Alice Braga, Diego Luna, Wagner Moura, and William Fichtner.[4] The film takes place on both a ravaged Earth and a luxurious artificial world (Stanford torus design) called Elysium.[5] The film itself offers deliberate social commentary that explores political and sociological themes such as immigration, overpopulation, transhumanism, health care, worker exploitation, the justice system, technology, and social class issues.',
error:"page is not found"

},
{
    id:30,
    name:'GHOST IN THE SHELL',
    category:'Hollywood',
    image:'https://i.ytimg.com/vi/_m4e5-4E9NE/maxresdefault.jpg',
    para:'Ghost in the Shell[a] is a Japanese cyberpunk media franchise based on the seinen manga series of the same name written and illustrated by Masamune Shirow. The manga, first serialized in 1989 under the subtitle of The Ghost in the Shell, and later published as its own tankōbon volumes by Kodansha, told the story of the fictional counter-cyberterrorist organization Public Security Section 9, led by protagonist Major Motoko Kusanagi, and is set in mid-21st century Japan.',
    error:"page is not found"
},
{
    id:31,
    category:'Fitness',
    name:'Fitness',
    image:'https://tse3.mm.bing.net/th?id=OIP.2Nyv_1UQ4Rv66BmkPeEqagAAAA&pid=Api&P=0&h=180',
    para:'Fitness means different things to different people and Health has something for everyone, whether you are just getting started with a workout routine or have been training since before TikTok was a thing. Get our latest expert moves, pro-tips, and recommendations for who to follow.',
    error:"page is not found"
},
{
    id:32,
    name:'HIIT Training',
    category:'Fitness',
    image:'https://www.hfe.co.uk/blog/high-intensity-interval-training-hiit/h-i-i-t-3-min/',
    para:'High intensity interval training, commonly referred to as HIIT, is an approach to training that requires participants to undertake exercise at around 80-95% of their age predicted maximum heart rate. However, many HIIT programmes do not actually monitor heart rate and so it is feasible that participants performing these programmes will be working at much higher intensities. The recovery periods used may last equally as long as the work phase and are usually performed at 40-50% of a person’s estimated maximal heart rate; again this is often a feature of HIIT sessions that may not be controlled when heart rate monitors are not used.',
    error:"page is not found"

},
{
 id:33,
 name:' Body Transformation',
 category:'Fitness',
 image:'https://www.hfe.co.uk/blog/the-increasing-popularity-of-body-transformation-training-in-personal-training/what-makes-up-body-comp-min/',
 para:'Body transformation training is a specialised training approach that focuses on comprehensive changes in an individuals physique, body composition, and overall fitness levels. Unlike traditional fitness routines that primary concentrate on general health and fitness, body transformation training takes a more intensive and overarching approach, requiring significant dietary, exercise, physical activity, and lifestyle changes to attain these lofty body composition targets. These programs also include intensive exercise programming, mindset development, and make the client accountable for their exercise and dietary behaviours.',
 error:"page is not found"

},
{
  id:34,
  name:'Breaking Muscle',
  category:'Fitness',
  image:'https://musclehack.com/wp-content/uploads/2014/01/lchf-low-carb-high-fat-prot.jpg',
  para:'In my last post I gave you guys a 3000 Calorie meal plan with higher carbs (low glycemic carbs and no sugar).Now it’s time to give you a 3000 Calorie low-carb plan (lchf).As you know, I’m busy putting together a whole book of meal plans so that you guys don’t have the hassle of putting together daily diets to hit your calories and macros. This free book should be a constant companion in your muscle-gain, fat loss journey from here on in. As such, it will be invaluable!',
  error:"page is not found"


},
{
   id:35,
   name: 'LOW CARB DIET?',
   category:'Fitness',
   image:'https://musclehack.com/wp-content/uploads/2013/08/strawberry1.jpg',
   para:'There’s no doubt that fruit is sugary. The type of sugar in fruits is called fructose. On a carb-cycling bodybuilding diet like the MuscleHack Anabolic Nutritional Strategy, fruits are surprisingly NOT off limits.Firstly there’s your carb-up weekend in which you should consume fruits until your heart’s content.Secondly there are low-sugar i.e. low-carb fruits. You just have to make wise decisions regarding which fruits to eat while low carbing.As a rule, berries are good – strawberries, blackberries, raspberries and so on. Strawberries are only 6 net grams of carbohydrate per 100 grams. That means that if you take a 50 gram serving and slice those strawberries up into some cream, you’ll only be consuming 3 grams of carbohydrate! mmm I love strawberries and cream 🙂',
   error:"page is not found"

},
{
    id:36,
    name:'Eat the rainbow',
    category:'Fitness',
    image:'https://gethealthyu.com/wp-content/uploads/2021/12/eat-the-rainbow.png.webp',
    para:'Eat foods that are closest to their natural state as possible. Aim for whole, fresh foods in a rainbow of colors. Looking for some restorative meal ideas to get you started? Check out these:',
    error:"page is not found"

},
{
    id:37,
    name:'Carrots N Cake',
    category:'Fitness',
    image:'https://www.developgoodhabits.com/wp-content/uploads/2018/12/carrots_n_cake.jpg',
    para:'For Tina Haupert, the creator of Carrots ‘N’ Cake, the goal of Carrots N Cake is to help people find balance in their lives. She dishes out words of advice about nutrition, fitness, and “best practices” to help others achieve that balance.',
    error:"page is not found"

},
{
id:38,
name:'Exercises  of life',
category:'Fitness',
image:'https://tse2.mm.bing.net/th?id=OIP.mJJni9oMcYnj0OYqAe4PeAHaDt&pid=Api&P=0&h=180',
para:'Exercise can help prevent excess weight gain or help you keep off lost weight. When you take part in physical activity, you burn calories. The more intense the activity, the more calories you burn. Regular trips to the gym are great, but dont worry if you cant find a large chunk of time to exercise every day. Any amount of activity is better than...',
error:"page is not found"


},
{
    id:39,
    name:'Drink water',
    category:'Fitness',
    image:'https://tse1.mm.bing.net/th?id=OIP.pVf9BOCOJgGVyheYKhzTnwHaGs&pid=Api&P=0&h=180',
    para:'Every day you lose water through your breath, perspiration, urine and bowel movements. For your body to function properly, you must replenish its water supply by consuming beverages and foods that contain water.So how much fluid does the average, healthy adult living in a temperate climate need? The U.S. National Academies of Sciences, Engineering, and Medicine determined that an adequate daily fluid intake is: About 15.5 cups (3.7 liters) of fluids a day for men About 11.5 cups (2.7 liters) of fluids a day for women',
    error:"page is not found"



},
{
  id:40,
  name:'Power Walking',
  category:'Fitness',
  image:'https://gethealthyu.com/wp-content/uploads/2021/08/power-walking-for-beginers-500x500.png.webp',
  para:'With countless studies proving the effectiveness of power walking in benefitting your health, learning how to power walk will keep you moving well into your future as you age. Power walking is one of the most maintainable workouts a person can add to their life so if you haven’t pursued the world of power walking it might just be your time.',
  error:"page is not found"
},
{
    id:41,
    name:'Miles Per Hour ',
    category:'Fitness',
    image:'https://gethealthyu.com/wp-content/uploads/2022/04/tips-for-power-walking.png.webp',
    para:'On the other hand, power walking too slowly might only net you 100 calories or less for 30 minutes. Keep your speed and intensity up. Most fitness watches or trackers will tell you how far and how fast you are walking. This can be an invaluable tool to help you.',
    error:"page is not found"
    
   

},
{
id:42,
name:'Exercise Daily',
category:'Fitness',
image:'https://tse1.mm.bing.net/th?id=OIP.2kevX7t1TU5cQkBrxliFIQHaFs&pid=Api&P=0&h=180',
para:'Exercise daily for at least an hour. You do not have to kill yourself from running, jogging, etc., but you should have some sort of moderate physical activity in your everyday life. If youre looking to shed a few pounds fast, do a higher-level intensity workout. For example, go on a walk at a brisk pace for an hour. Or, you can jog and set certain intervals to sprint during that hour. Make sure you re not in severe pain during your workout. Just a warning, your muscles will ache after a high intensity workout. It may be irritating, but that means your body is changing for the better. Be sure to stay hydrated, stretch, and eat foods with a decent amount of protein after each workout. The protein will help keep your muscles, not fat, rebuilding.',
error:"page is not found"

},
{
    id:43,
    name:'Eat the Right Foods',
    category:'Fitness',
    image:'https://tse3.mm.bing.net/th?id=OIP.FD4dxY4lvjPb6OQ7ugogoAHaDQ&pid=Api&P=0&h=180',
    para:'No matter how bad your stomach is telling you to go for candy over healthy food, try to stay away from sweets. Sugar from candy will not help you get in shape. Even if its just a single candy bar, one will eventually lead to another. Fruits and vegetables are the best thing to eat when getting into shape. Apples, for example, do a good job at making the stomach feel full for up to 3 to 4 hours. Green vegetables such as green beans and broccoli keep the digestive system clean and running.',
    error:"page is not found"

},
{
    id:44,
    name:'Calories and Food',
    category:'Fitness',
    image:'https://www.inkin.com/blog/uploads/fb_insta.png',
    para:'Keeping track of how many calories you eat in a day will be helpful in planning out your physical exercising. Ever wonder why body builders  body masses are so big? Thats because they plan out their meals and take in more (healthy) calories than the average person. On the other hand, losing weight and striving for a skinnier physique will involve more physical exercise than calories you ingest',
    error:"page is not found"

},
{
    id:45,
    name:'Stay Motivated',
    category:'Fitness',
    image:'https://tse1.mm.bing.net/th?id=OIP.Nc9Bt6v-akSn-j2MO-jbmQHaEt&pid=Api&P=0&h=180',
    para:'An important key to being in shape is to set goals and keep a positive mindset. If you stay positive, you will be able to push yourself to get that fit body you ve always wanted.',
    error:"page is not found"

},
{
    id:46,
    name:'Pakora',
    category:'Food',
    image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347465/india-food-aloo-chaat/india-food-aloo-chaat-1120x732.jpg',
    para:'Pakora is a savory, deep-fried Indian snack made with chunks of vegetables such as potato, cauliflower and eggplant, or meat of choice, which is then dipped in chickpea flour, seasoned with turmeric, salt, chili, or other spices, and deep-fried in ghee.It is a quintessential Indian snack, easily found on numerous street corners and most popular during spring, when the locals choose to celebrate the monsoon season by eating fried foods.',
    error:"page is not found"
},
{
    id:47,
    name:'Chaat',
    category:'Food',
    image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347356/india-food-vada-pav/india-food-vada-pav-1120x732.jpg',
    para:'The name chaat encompasses a wide variety of Indian street foods, snacks, or small meals which usually combine salty, spicy, sweet, and sour flavors. They are usually small, consumed on their own as a snack, or combined with other dishes to form a big meal.Throughout India, chaat can be found at chaatwallas – street vendors serving various dishes, from stuffed bread to deep-fried pastries with accompanying dipping sauces.',
    error:"page is not found"


},
{
    id:48,
    name:'Vada Pav',
    category:'Food',
    image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347416/india-food-idli/india-food-idli-1120x732.jpg',
    para:'Vada Pav is a favorite sandwich-style snack from Mumbai, named after its ingredients: vada, or spicy mashed potatoes, which are deep-fried in chickpea batter; and pav, or white bread rolls. This iconic street food is said to have originated from a street vendor named Ashok Vaidya, who worked near the Dadar train station in the sixties and seventies, and came up with a way to satiate the hungry workers.',
    error:"page is not found"
},
{
   id:49,
   name:'Idli',
   category:'Food',
   image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347392/india-food-paratha/india-food-paratha-1120x732.jpg',
   para:'Idli is a traditional, savory Indian cake that is a popular breakfast item in many South Indian households, although it can be found throughout the country. It is made with a batter consisting of fermented lentils and rice, which is then steamed. These savory cakes are commonly served hot and consumed on their own, dipped into sambar or chutneys, or seasoned with a range of spices.',
   error:"page is not found"


},
{
   id:50,
   name:'Paratha',
   category:'Food',
   image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347396/india-food-naan/india-food-naan-1120x732.jpg',
   para:'Paratha is a flaky, layered, golden-brown Indian bread, which is typically consumed for breakfast. It consists of whole wheat flour that’s baked in ghee, Indian clarified butter, and comes in round, triangular, square, or hexagonal shapes.   Very often, parathas are stuffed with ingredients such as boiled potatoes, cauliflower, garlic, ginger, chili, paneer, or radish. They are sometimes accompanied by pickles, yogurt, homemade chutneys, and occasionally served as a side to meat and vegetable curries. In Punjab, paratha is eaten with lassi, a popular yogurt-based drink.',
   error:"page is not found"
},
{
   id:51,
   name:'Naan',
   category:'Food',
   image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347459/india-food-aloo-gobi/india-food-aloo-gobi-1120x732.jpg',
   para:'Naan is a well-liked flatbread with a chewy texture. It consists of white flour, yeast, eggs, milk, salt, and sugar, baked in a tandoor oven. Its characteristic tear-drop shape is achieved due to the way that the dough droops as it cooks on the tandoor walls.',
   error:"page is not found"

},
{
  id:52,
  name:'Aloo Gobi',
  category:'Food',
  image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347444/india-food-butter-chicken/india-food-butter-chicken-1120x732.jpg',
  para:'Aloo Gobi is a vegetarian dry curry, consisting of potatoes (aloo), cauliflower (gobi), and Indian spices. It has a warm, yellow-orange color because it contains turmeric. Other common ingredients include kalonji, curry leaves, garlic, ginger, onion, coriander stalks, tomato, peas, and cumin.',
  error:"page is not found"

},
{
  id:53,
  name:'Butter Chicken',
  category:'Food',
  image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347425/india-food-dal-tadka/india-food-dal-tadka-1120x732.jpg',
  para:'A dish of tender chicken in a mildly spiced tomato sauce. It’s traditionally cooked in a tandoor (a cylindrical clay oven). The gravy is always made first by boiling down fresh tomato, garlic, and cardamom into a bright red pulp. This pulp is then pureed after cooling. Butter, various spices, and khoa (dried whole milk) is then added. The dish originated in Delhi during the 1950s.'  ,
  error:"page is not found"

},
{
    id:54,
    name:'Dal Tadka',
    category:'Food',
    image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347401/india-food-masala-dosa/india-food-masala-dosa-1120x732.jpg',
    para:'This classic lentil-based dish originates from the northern parts of India. Although there are variations, the dish is usually prepared with toor dal (split yellow peas), garlic, ginger, onions, tomatoes, garam masala, red chili peppers, ghee, cumin, coriander, turmeric, and fenugreek leaves. Once prepared, dal tadka is usually garnished with coriander leaves and served hot with jeera rice and roti on the side.',
    error:"page is not found"

},
{
   id:55,
   name:'Masala Dosa',
   category:'Food',
   image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347374/india-food-sambar/india-food-sambar-1120x732.jpg',
   para:'The traditional southern Indian dish known as masala dosa is popular throughout the country, made from a batter of soaked rice and black lentils, which are ground into a paste and blended to create a thick batter, usually left to ferment overnight. The mixture is enriched with a handful of fenugreek seeds, which gives the dosa its distinctive golden-brown color and a delicious .',
   error:"page is not found"
},
{
    id:56,
    name:'Sambar',
    category:'Food',
    image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347429/india-food-dal-makani/india-food-dal-makani-1120x732.jpg',
    para:'Sambar is a tamarind-based broth, prepared with lentils and vegetables. It originates from Tamil Nadu, but it is also very popular throughout South India. The dish is traditionally served with steamed rice or various Indian flatbreads.',
    error:"page is not found"


},
{
    id:57,
    name:'Dal Makhani',
    category:'Food',
    image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347439/india-food-chana-masala/india-food-chana-masala-1120x732.jpg',
    para:'Although it originated in Punjab, dal makhani has become a favorite Indian lentil dish all over the country. It consists of black beans or red kidney beans and whole black lentils, called ‘urad’. The dish is prepared with plenty of ghee and seasonings such as ginger, garlic paste, and chili, and it is slowly cooked in a rich, tomato-based sauce.The name makhani, meaning butter, is due to the addition of cream and a drizzle of melted ghee or butter that provides the typical velvety flavor of this classic.',
    error:"page is not found"

},
{
    id:58,
    name:'Chana Masala',
    category:'Food',
    image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347365/india-food-shahi-paneer/india-food-shahi-paneer-1120x732.jpg',
    para:'Usually eaten as a snack, main meal, or breakfast, this North Indian specialty is a tangy chickpea curry, which is probably the most popular vegetarian dish in India, commonly found on railway platforms and in school canteens. The chickpeas are simmered in a combination of spices and herbs, often served with rice or Indian flatbreads such as roti or naan, and garnished with yogurt.',
    error:"page is not found"
},
{
   id:59,
   name:' Shahi Paneer',
   category:'Food',
   image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347378/india-food-rogan-josh/india-food-rogan-josh-1120x732.jpg',
   para:'Originating from India’s Mughlai cuisine, shahi paneer is a rich, hearty and nutritious cheese curry, prepared with paneer cheese, onions, almond paste, and a rich, spicy tomato-cream sauce. The dish is typically accompanied by Indian breads such as naan, roti, or puri, and garnished with coriander leaves.',
   error:"page is not found"

},
{
    id:60,
    name:'Rogan Josh',
    category:'Food',
    image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347361/india-food-tandoori-chicken/india-food-tandoori-chicken-1120x732.jpg',
    para:'Rogan josh is a staple of Kashmiri cuisine. It consists of braised lamb chunks cooked with gravy made from browned onions, yogurt, garlic, ginger, and aromatic spices. Known for its brilliant red color, a classic rogan josh uses liberal amounts of dried Kashmiri chilis.' ,
    error:"page is not found"
},
{
   id:61,
   name:'Laser Precision Qubit Control',
   category:'Technology',
   image:'https://scitechdaily.com/images/Quantum-Information-Science-Qubits-Art-Concept.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1',
   para:' Researchers have pioneered a groundbreaking technique utilizing laser light to control individual qubits made of barium more robustly than any other method currently known. Reliably controlling qubits is a critical step towards actualizing functional quantum computers of the future.Developed at the University of Waterloo’s Institute for Quantum Computing (IQC), this new method uses a small glass waveguide to separate laser beams and focus them four microns apart, approximately four-hundredths of the width of a single human hair. The precision and extent to which each focused laser beam on its target qubit can be controlled in parallel is unmatched by previous',
   error:"page is not found"
},
{
    id:62,
    name:'Scientists Discover ',
    category:'Technology',
    para:'The journey from a laboratory discovery to real-world application can be extensive and fraught with challenges. Take the lithium-sulfur battery, for instance. While it boasts significant benefits over the existing lithium-ion batteries used in vehicles, it still hasn’t made a substantial mark on the market despite years of rigorous development.',
    image:'https://scitechdaily.com/images/Hot-and-Cold-Battery-Technology.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1',
    error:"page is not found"
},
{
    id:63,
    name:' Atomic-Scale Spin-Optical',
    category:'Technology',
    image:'https://scitechdaily.com/images/Spin-Valley-Rashba-Monolayer-Laser-1189x1536.jpg?ezimgfmt=ngcb2/notWebP',
    para:'Researchers from the Technion have pushed the limits of the possible in the field of atomic-scale spin-optics, creating a spin-optical laser from monolayer-integrated spin-valley microcavities without requiring magnetic fields or cryogenic temperatures.Scientists at the Technion – Israel Institute of Technology have unveiled a coherent and controllable spin-optical laser based on a single atomic layer. This breakthrough is enabled by coherent spin-dependent interactions between a single atomic layer and a laterally confined photonic spin lattice, the latter of which supports high-Q spin-valley states through the photonic Rashba-type spin splitting of a bound state in the continuum.',
    error:"page is not found"
},
{
    id:64,
    name:'Scientists Develop ',
    category:'Technology',
    image:'https://scitechdaily.com/images/Advanced-High-Tech-Battery-Concept.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1',
    para:'A newly developed, highly conductive solid electrolyte may pave the way for solid-state lithium batteries. Batteries store energy through chemical reactions, depending on the flow of charged ions from the cathode to the anode via an electrolyte. Historically, batteries primarily used liquid electrolytes. However, there has been a persistent search for a solid substitute. In the 1970s, Polyethylene oxide (PEO)-based solid polymer electrolytes were developed, offering several benefits, notably safety. Compared to current lithium-ion batteries, those using polymer electrolytes have a reduced risk of igniting in situations like car accidents or within airplane cargo areas.',
    error:"page is not found"
},
{
    id:65,
    name:'Solving a “Holy Grail” Optical Imaging Problem – Scientists Develop Neural Wavefront Shaping Camera',
    image:'https://scitechdaily.com/images/Camera-Blueprint-Background-777x607.jpg?ezimgfmt=ngcb2/notWebP',
    category:'Technology',
    para:'Engineers at Rice University and the University of Maryland have developed a full-motion video technology that could potentially be used to make cameras that peer through fog, smoke, driving rain, murky water, skin, bone, and other media that reflect scattered light and obscure objects from view.Imaging through scattering media is the ‘holy grail problem’ in optical imaging at this point,” said Rice’s Ashok Veeraraghavan, co-corresponding author of an open-access study recently published in Science Advances. “Scattering is what makes light — which has a lower wavelength, and therefore gives much better spatial resolution — unusable in many, many scenarios. If you c',
    error:"page is not found"
},
{
    id:66,
    name:"Trahertz SNOM Microscope: New Tool Helps Improve Key Quantum Computing Circuit",
    category:'Technology',
    image:'https://scitechdaily.com/images/Visualization-of-Terahertz-Microscope-Tip.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1',
    para:'Researchers used a new tool to help improve a key component in commercially produced quantum computing circuits. The team of scientists from the U.S. Department of Energy’s (DOE) Ames National Laboratory in partnership with the Superconducting Quantum Materials and Systems Center (SQMS), a DOE National Quantum Information Science Research Center led by Fermilab, used the terahertz SNOM microscope, originally developed at Ames Lab, to investigate the interface and connectivity of a nano Josephson Junction (JJ).',
    error:"page is not found"
},
{
    id:67,
    name:'HOMEPHYSICS NEWS Groundbreaking Quantum Leap: Physicists Turn Schrödinger’s Cat on Its Head',
    category:'Technology',
    image:'https://scitechdaily.com/images/Quantum-Physics-Waves-Illustration-Concept-777x518.jpg?ezimgfmt=ngcb2/notWebP',
    para:'Researchers from the University of Warsaw’s Faculty of Physics, in collaboration with experts from the QOT Centre for Quantum Optical Technologies, have pioneered an innovative technique that allows the fractional Fourier Transform of optical pulses to be performed using quantum memory.This achievement is unique on the global scale, as the team was the first to present an experimental implementation of the said transformation in this type of system. The results of the research were published in the prestigious journal Physical Review Letters. In their work, the students tested the implementation of the fractional Fourier Transform using a double optical pulse, also known as a “Schrödinger’s cat” state.',
    error:"page is not found"
},
{
    id:68,
    name:'HOMETECHNOLOGY NEWS Muon Magic: Groundbreaking Technology Enables Navigation in Places GPS Can’t Reach',
    category:'Technology',
    image:'https://scitechdaily.com/images/Navigating-Inside-With-Muons.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1',
    para:'In a reported global first, researchers from the University of Tokyo have used superfast, subatomic particles known as muons to wirelessly navigate underground. The team utilized ground stations that detect muons, coordinating them with a subterranean muon-detecting receiver to pinpoint the receiver’s location in the basement of a six-story building.Since GPS is ineffective through rock and water, this emerging technology holds promise for future applications such as search and rescue missions, monitoring underwater volcanoes, and directing autonomous vehicles in subterranean and aquatic environments.',
    error:"page is not found"
},

{
    id:69,
    name:'A Visionary Leap: Enhancing Computer Vision for Autonomous Vehicles and Cyborgs',
    category:'Technology',
    image:'https://scitechdaily.com/images/Autonomous-Self-Driving-Car-Technology-777x583.jpg?ezimgfmt=ngcb2/notWebP',
    para:'  A team at RIKEN has improved computer vision recognition capabilities by training algorithms to better identify objects in low-resolution images. Inspired by human brain memory formation techniques, the model degrades the quality of high-resolution images to train the algorithm in self-supervised learning, enhancing object recognition in low-quality images. The development is expected to benefit not only traditional computer vision applications but also the creation of cybernetic avatars and terahertz imaging technology.',
    error:"page is not found"
},
{
    id:70,
    name:'A Leap in Performance – New Breakthrough Boosts Quantum AI',
    category:'Technology',
    image:'https://scitechdaily.com/images/Brain-Technology-Artificial-Intelligence-Concept-Illustration.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1',
    para:'A groundbreaking theoretical proof reveals that using a technique called overparametrization enhances performance in quantum machine learning for tasks that challenge traditional computers.We believe our results will be useful in using machine learning to learn the properties of quantum data, such as classifying different phases of matter in quantum materials research, which is very difficult on classical computers,” said Diego Garcia-Martin, a postdoctoral researcher at Los Alamos National Laboratory. He is a co-author of a new paper by a Los Alamos team on the technique in Nature Computational Science.',
    error:"page is not found"
},
{
    id:71,
    name:'Revolutionizing Battery Performance: UCLA Reveals True Shape of Lithium for the First Time',
    category:'Technology',
    image:'https://scitechdaily.com/images/Lithium-Metal-12-Sided-Figure.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1',
    para:'UCLA researchers have made a groundbreaking discovery that could enhance the safety and efficiency of lithium-metal batteries. By preventing corrosion during the deposition of lithium, the researchers found that lithium atoms form a unique 12-sided shape, reducing the risk of explosions. This innovation could potentially revolutionize lithium battery technology, leading to improved safety and performance.',
    error:"page is not found"
},
{
    id:72,
    name:'Study Warns That Doctors Are Not Prepared for AI Transformation of Medicine',
    category:'Technology',
    image:'https://scitechdaily.com/images/Medical-Data-Analysis-AI-Concept.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1',
    para:'As artificial intelligence (AI) systems like ChatGPT find their way into everyday use, physicians will start to see these tools incorporated into their clinical practice to help them make important decisions on the diagnosis and treatment of common medical conditions. These tools, referred to as clinical decision support (CDS) algorithms, serve to guide healthcare providers in making crucial determinations, such as which antibiotics to prescribe or whether to recommend a risky heart surgery.',
    error:"page is not found"
},
{
    id:73,
    name:'Optical Computing Breakthrough: Seeing Through the “Unseeable”',
    category:'Technology',
    image:'https://scitechdaily.com/images/Computer-Technology-Abstract.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1',
    para:'Is it possible to see through a scattering medium such as ground glass? Traditionally, this would be considered impossible. When light passes through an opaque substance, the information carried within the light becomes “jumbled up”, almost as if undergoes complex encryption.Recently, a remarkable scientific breakthrough by Professor Choi Wonshik’s team from the IBS Center for Molecular Spectroscopy and Dynamics (IBS CMSD) has unveiled a method to leverage this phenomenon in the fields of optical computing and machine learning.',
    error:"page is not found"
},
{
    id:74,
    name:'A Big Step Forward: New Breakthrough Could Lead to Cleaner Hydrogen Energy',
    category:'Technology',
    image:'https://scitechdaily.com/images/Hydrogen-Energy-Clean-Energy.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1',
    para:'Scientists from the University of Kansas and the U.S. Department of Energy’s Brookhaven National Laboratory have made significant progress towards separating hydrogen and oxygen molecules to produce pure hydrogen — without using fossil fuels.Results from pulse radiolysis experiments have laid bare the complete reaction mechanism for an important group of “water-splitting” catalysts. This advancement by the KU and Brookhaven team brings us nearer to generating pure hydrogen from renewable energy sources. This could potentially contribute to a more sustainable for the nation and the world.',
    error:"page is not found"
},
{
    id:75,
    name:'Aircraft Rolls Out',
    category:'Technology',
    image:'https://scitechdaily.com/images/NASAs-X-59-QueSST-2048x1536.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1',
    para:'NASAs X-59 aircraft, capable of supersonic flight while reducing sonic booms to quieter ‘thumps’, has been moved for testing in California. ',
    error:"page is not found"
    // The collected data on human reactions to supersonic noise will potentially assist in enabling commercial supersonic flight over land.The following series of images shows NASA’s X-59 as it sits on the flight line—the space between the hangar and the runway—at Lockheed Martin Skunk Works in Palmdale, California, on June 19, 2023. The move from its construction site to the flight line is one of many milestones that prepare the X-59 for its first and subsequent flights. Next up, the team will conduct significant ground tests to ensure the aircraft is safe to fly.
},
{
    id:76,
    // name:'',
    image:'https://i.ytimg.com/vi/QAEkdpAWzGU/maxresdefault.jpg',
    error:"page is not found"
    // category:'',
    // para:''

},
{
    id:77,
    // name:'',
    image:'https://1.bp.blogspot.com/-Vdjtxyjnjxk/WdW07ZO5EPI/AAAAAAAALC0/gwXOlmW4DtYpB30vkmwNt7HW8M6PZORDQCLcBGAs/s1600/The%2BForest%2B-%2BMovie%2BPoster.png',
    error:"page is not found"
    // category:'',

},
{
    id:78,
    image:'https://www.indiewire.com/wp-content/uploads/2018/07/pennywise-bill-skarsgard-it-movie.jpg',
    error:"page is not found"
},
]

);

return(
<Store.Provider value={[data, setdata]}>

{props.children}

{/* <BollyWood/> */}
{/* <HollyWood/> */}


</Store.Provider>
)


}





export default ContextStore;