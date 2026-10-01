export type Story = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  content: string[];
};

export const stories: Story[] = [
  {
    slug: "learning-to-build",
    title: "How i started off in the tech world",
    description:
      "A reflection on how i started my tech journey, and what i would have done differently if i had a time machine and could go back.",
    date: "Coming soon",
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
    slug: "things-i-wish-i-knew-earlier",
    title: "Things I Wish I Knew Earlier",
    description:
      "Lessons, mistakes, and ideas that changed the way I think about learning.",
    date: "Coming soon",
    category: "Reflection",
    content: [
      "This is a placeholder for a future story.",
      "This could become a collection of lessons you learned through university, personal projects, work, or life.",
      "The goal is not to sound perfect. The interesting part is documenting what you actually experienced.",
    ],
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