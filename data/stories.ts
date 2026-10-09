export type StoryContent =
  | string
  | {
      type: "image";
      src: string;
      alt: string;
    };

export type Story = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  content: StoryContent[];
};

export const stories: Story[] = [
  {
    slug: "learning-to-build",
    title: "How i started off in the tech world",
    description:
      "A reflection on how i started my tech journey, and what i would have done differently if i had a time machine and could go back.",
    date: "30-09-2026",
    category: "Learning",
    content: [
      "The tech landscape of the 2010s to 2020s was monumental, it was shaped by big time Billionaires giving one advice - learn to code because coding is the new meta skillset that will go well with the digitalization of humanity.",
      "So I did exactly that, it was the summer of 2020, I did not know anything about tech, not even what a programming lanaguage was, or how computers worked, i was merely a consumer of tech, so i searched up videos on how to learn how to code and those videos all steered me towards learning python, a very popular dynamically typed language with its rich set of libraries. This lead me to find the youtube video titled:Learn Python - Full Course for Beginners [Tutorial] by free code camp.",
      "I was really excited, i followed the tutorial, installing PyCharm - the dedicated IDE for python and i was officially ready to get started.",
      "I wrote my first hello world program, learned about the very basic built in arithmetic functions that were baked into the language and the next day forgot about tech and went on with my life.",
      "As you can see, i clearly did not have a passion for tech. I was simply greedy and followed the general consensus advice -> take computer science in college, get a tech job and be set for life.",
      "Fast forward to the year 2022, i came out of high school with excellent grades in my public examinations - I took the international A levels and got an A* in all my subjects, but honestly it only taught me the wrong study habits that would come haunt me later down the line in my CS journey",
      "I believe the public examinations, especially at the high school level simply encourages memorization and the ability to adapt to similar question types, hence why the best way to achieve good results was to grind the endless supply of past question papers available online. Although this type of mastery has it's place in computational subjects like mathematics where practice is king, it did not really help me elevate my learning progress in the vast field of computer science.",
      "Then i entered HKU, at the time ranked 26th in the world in 2022 fall (ranked 11th in the world now i think). And i was enrolled in the Bachelor of Engineering program, this was an excellent programme where all students took the same core engineering subjects in their first year, but then went onto specialise in their respective majors from 2nd year onwards. I found it strange that CS was under the faculty of engineering, but now HKU has already moved CS under the Computing and Data Science Faculty.",
      "I wasn't sure if i wanted to major in Mechanical engineering or Computer Science, but in the end i chose CS",
      "I remember my very first programming class during the second semester of my first year, it was called computer programming 1 (omitted course code because i dont want search engines to recommend this page). I carried over my study methods from high school and hand wrote syntax onto my notebook, with neat handwriting and spending 3 hours hand writing basic one liner programs onto my notebook.",
      "Everything was all sweet and sound until I was eventually humbled through a canon event -> the midterm of march 2023. The midterm consisted of 4 questions, and we had to write the programs onto the moodle webpage and submit it, and i couldn't do any of the questions at all, i ended up getting a really really low score on it, but i had a chance to turn it around because it was only a small percentage of my overall grade.",
      "From then on i shifted my approach to learning programming, i finally realised that the only way to learn coding effectively is -> to actually code",
      "No shocker at all, i stopped handwriting notes and wrote each and every program myself from then on, even if i didn't understand it, until i eventually got the hang of the syntax. I ended up with a B+ on that course, luckily the final exam was quite easy.",
      "In my next programming class during the next semester, i was prepared, i never made handwritten notes again and just did it and practiced like Shia LaBeouf said, and i crushed the coding midterm with full marks",
      "I could go on and on about my beginnings in tech, especially my second year where i learned the greatest lesson of all by facing even more canon events, but perhaps it will be a story for another time.",
      "If i had a time machine, i would go back to 2020 when i first had the initial interest in tech, and tell myself to stop being lazy and code. Theory is important in tech, but the practical aspect of doing by learning triumphs any other form of learning in tech.",
      "As always thanks for reading, and stay tuned for more stories like this."
    ],
  },

  {
    slug: "everything-happens-for-a-reason",
    title: "Everything Happens for a Reason ... Life is understood in reverse",
    description:
      "We don't always understand why life takes us down certain paths. Sometimes, it takes looking back to realize that every unexpected turn was leading us to somewhere we were meant to be, and it takes time.",
    date: "09-10-2026",
    category: "Reflection",
    content: [
        "The universe is a strange place. I used to think life was a straight path — that if I followed the right plan, everything would eventually go my way.",

        "But life has a way of making its own plans. Things may not always make sense in the moment, but when we look back, we can often understand why things happened the way they did — or at least understand them a little better.",

        "Sometimes, certain paths lead us somewhere we never expected to be. For me, that path led to HKU. Five years ago, I never imagined that I would end up studying here.",

        "Five years ago, in the fall of 2021, I was in my final year of secondary school. I was having fun with my friends, messing around, and making the most of our remaining time together before we all went our separate ways.",

        "Then came the time when my peers and I started applying to universities, both locally and around the world. It was an exciting and uncertain time. I would attend university information days around Hong Kong with my friends while researching universities overseas on my own.",

        "At the time, I applied to a bunch of universities in Hong Kong and even applied to five universities in the UK through the UCAS application system — UCL, York, Southampton, and... honestly, I forgot the rest lol.",

        "But at the time, I really wanted to get into UCL. Unfortunately, I didn't get an offer because my predicted A-level Mathematics grade was only an A. Back then, universities used predicted grades during the application process, even though I had been performing at an A* level throughout the previous year.",

        "After that, I stopped caring much about the UK universities. Not long after, I received an offer from HKUST for a Bachelor of Engineering with an extended major in AI. I thought I was probably going to HKUST, but I remembered the nearly two-hour commute just to get there, so I was still hesitant.",

        "Then, a few days later, I heard back from HKU. I had received a conditional offer. The conditions weren't too bad, so I accepted it.",

        "I was really happy with my A-level results, and I was finally ready to begin my journey at HKU. Little did I know, however, that I was about to face another chain of unexpected events.",

        "Firstly, International A-level results notoriously come out quite late each year, with candidates only receiving them around the middle of August. This meant I was still waiting for my results while watching other students complete their master registration and even begin enrolling in classes. After nearly two weeks of back-and-forth struggles, I was finally able to enrol at HKU — but I still couldn't add any classes until the add/drop period began on September 1st.",

        "This led me into another unexpected situation. I knew I wanted to major in Computer Science from day one, and back then, Computer Programming 1 was an incredibly popular course — much more so than it is now, with all the AI fearmongering around tech lol. The classes were packed, but I saw one subclass that still had an available spot, so I quickly enrolled. I happily attended my first lecture at HKU, which was held in the Grand Hall at CPD because of the huge number of students. Hundreds of us were sitting there together. Honestly, it felt like a grand opening to my university journey lol.",
        "I went home excited for my next lecture, only to discover that I had been unenrolled from the class because it was already full. Perhaps I had enrolled too late.",

        "I tried looking for other subclasses, but they were all full too. After a few days of constantly checking and seeing no changes, I decided to email several professors and ask whether not taking Computer Programming 1 in my first semester would prevent me from joining the Computer Science major. The answer was no — I could simply take Computer Programming 2 in my second-year, first semester instead.",

       "So I put my head down and picked Thermofluid Mechanics instead, because I had always found mechanical engineering to be an interesting field.",
        "On the first lecture of that class, I didn't recognise anyone, so I decided to sit right at the very front. For some reason, I had a strange urge to sit in the front that day — I'm usually a backbencher lol.",

        "A few minutes later, a lost and curious-looking boy walked into the classroom and decided to sit in the same row as me, just one seat away. And just like that, the class began.",

        "During the break, he introduced himself. His name was Abraham, and he was from Tanzania, a country in East Africa. We exchanged contacts, and the rest is history.",

        "He became one of my good friends throughout my time at HKU. He is incredibly intelligent, hardworking, and driven, and he has always inspired me. He came all the way across the world by himself and worked relentlessly, day and night, to build a successful life in Hong Kong. As I begin my master's studies in Australia, I hope I can carry forward that same level of dedication and drive that i saw from him with me.",
        "P.S. Abraham, if you're reading this, I hope we can meet again someday. And thanks for deciding to sit next to me that day lol.",
        "This brings me back to my main point. By not being able to enrol in the course I wanted, and by not getting into the university I originally wanted, I ended up meeting a new friend and having rich new experiences I otherwise would never have had if everything had gone according to plan.",

        "I can say the same about so many of the people reading this right now. If everything had gone exactly as planned, I might never have met any of you. Every single one of you has been a part of my journey in some way, and I am genuinely grateful for every friendship, every conversation, and every small act of support along the way — no matter how we first met.",

        "I don't know what the future holds, and I'll admit that I'm a little worried about the unknown that awaits me in Australia. But I can say one thing for certain: I'm ready to wander into the unknown and face the world head-on. Similar to this final scene from one of my favourite childhood cartoons (Gravity Falls)",

        {
          type: "image",
          src: "/gravity_falls.jpg",
          alt: "Gravity Falls final scene from a favourite childhood cartoon",
        },

        "So, my final message is this: sometimes life may not go the way we want it to. But it is often those imperfections, unexpected turns, and moments of uncertainty that eventually lead us to where we are meant to be. We may feel lost while we're living through them, but one day, we'll look back and understand the value those moments brought into our lives.",

        "And perhaps that's why life is lived forwards, but understood backwards.",

        "Thank you for reading once again!"
    ]
  },

  {
    slug: "building-things-to-understand-them",
    title: "Building Things to Understand Them",
    description:
      "Why I often learn by building something rather than simply reading about it.",
    date: "Coming soon",
    category: "Engineering",
    content: [
      "This is a placeholder for a future story.",
      "You could talk about a project that taught you something you could not fully understand from theory alone.",
      "Explain what confused you, what you built, what broke, and what finally clicked.",
    ],
  },
];