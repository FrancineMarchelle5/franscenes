/**
 * franscenes — day data
 * Bus B perspective (Francine Marchelle Delos Reyes)
 */

export const days = [
  {
    id: "prologue",
    slug: "prologue",
    label: "Prologue",
    title: "The Journey Begins",
    subtitle: "Zamboanga → Manila",
    theme: "departure",
    coverImg: "",
    intro:
      "Before the tour officially started, there was the quiet thrill of leaving home for the very first time. From the familiar streets of Zamboanga City to the busy terminals of Manila — this was where it all began.",
    activities: [
      {
        id: "zamboanga-to-manila",
        emoji: "✈️",
        title: "Zamboanga to Manila",
        location: "Zamboanga City → Manila",
        address: "Zamboanga International Airport",
        description:
          "The early morning departure from Zamboanga City marked the official start of the DJM Educational Tour. For many of us, this was our first time stepping on a plane — a milestone that felt both terrifying and exciting all at once.",
        story:
          "I woke up before dawn, bags already packed and ready by the door. The drive to the airport was quiet, the city still asleep. Checking in, waiting at the gate, feeling the engine hum beneath my feet as we lifted off — every moment felt new. By the time we touched down in Manila, the city was already wide awake, loud and sprawling in a way that Zamboanga never was. It was official: the tour had begun.",
        feelings:
          "Nervous, giddy, and a little overwhelmed — but mostly just grateful to finally be going somewhere far.",
        realizations: [
          "Leaving home, even briefly, changes the way you see it when you come back.",
          "First flights are terrifying and magical at the same time.",
        ],
        keywords: [
          "First Flight",
          "Zamboanga",
          "Departure",
          "Manila",
          "Travel",
        ],
        photos: [
          "/PROLOGUE/city_tour_001.jpg",
          "/PROLOGUE/city_tour_002.jpg",
          "/PROLOGUE/city_tour_003.jpg",
          "/PROLOGUE/city_tour_004.jpg",
          "/PROLOGUE/city_tour_005.jpg",
          "/PROLOGUE/city_tour_006.jpg",
          "/PROLOGUE/zamboanga_airport/9b063726-f38d-49e4-bdee-7d3414ee4f43.jpeg",
          "/PROLOGUE/zamboanga_airport/69d627b9-5448-47c0-9e3a-3bb19f919b73.jpeg",
        ],
        photosCaption: "General photos — the departure from Zamboanga",
      },
      {
        id: "arrived-in-manila",
        emoji: "🏙️",
        title: "Arrived in Manila",
        location: "Manila, Metro Manila",
        address: "Ninoy Aquino International Airport",
        description:
          "Touching down in Manila for the first time — the noise, the scale, and the energy of the city hit all at once. This was the real beginning.",
        story:
          "The moment we stepped out of the airport, Manila swallowed us whole. Everything was bigger, louder, and faster than anything I had experienced back home. We were finally here.",
        feelings:
          "Overwhelmed in the best way possible — wide-eyed and ready for everything.",
        realizations: [
          "Arriving somewhere new for the first time is a feeling that never fully goes away.",
          "Manila has an energy that you can only understand by being in it.",
        ],
        keywords: ["Manila", "Arrival", "NAIA", "First Time"],
        photos: [
          "/PROLOGUE/arrived/1da5dc31-b04f-4e4e-b486-dd2da1baa14d.jpeg",
          "/PROLOGUE/arrived/704deb8e-af48-416f-9f67-1c4a32c60e5e (1).jpeg",
        ],
        videos: [
          "/VIDEOS/departure/IMG_1888.webm",
          "/VIDEOS/departure/vid.mp4",
        ],
      },
    ],
  },

  {
    id: "day-0",
    slug: "day-0",
    label: "Day 0",
    title: "Welcome to Historical Manila",
    subtitle: "City Tour",
    theme: "history",
    coverImg: "",
    intro:
      "Our first full day on the ground was a walking tour through the oldest parts of Manila. From the sweeping lawns of Luneta to the centuries-old walls of Intramuros — history met us at every turn.",
    activities: [
      {
        id: "rizal-park",
        emoji: "🌳",
        title: "Rizal Park (Luneta)",
        location: "Ermita, Manila",
        address: "Roxas Boulevard, Ermita, Manila",
        description:
          "Our afternoon walking tour with Kuya Jero opened at the iconic Rizal Park — a sweeping national landmark where Dr. José Rizal was executed. We roamed the grounds, learned the stories behind every monument, and cooled off with some ice cream from the local vendors.",
        story:
          "I'd seen Luneta in textbooks my whole life, so actually standing there felt unreal. Kuya Jero was a great guide — he pointed out things I never would have noticed on my own, like the exact execution spot versus the monument itself. It was hot, but I didn't mind. The ice cream helped.",
        feelings:
          "Surreal and a little nostalgic, even though it was my first time there.",
        realizations: [
          "History feels completely different when you're standing in it.",
          "Seeing the site in person made Rizal's story feel much more human.",
        ],
        keywords: ["Luneta", "Rizal Park", "Manila", "History", "Walking Tour"],
        didYouKnow: [
          "Rizal Park spans 58 hectares — making it one of the largest urban parks in Asia.",
          "Dr. José Rizal was executed here on December 30, 1896, at the age of 35. That date is now a national holiday: Rizal Day.",
          "The park contains a relief map of the entire Philippine archipelago, built in 1965.",
        ],
        photos: [
          "/DAY 0 - CITY TOUR/luneta/city_tour_007.jpg",
          "/DAY 0 - CITY TOUR/luneta/city_tour_008.jpg",
          "/DAY 0 - CITY TOUR/luneta/city_tour_009.jpg",
          "/DAY 0 - CITY TOUR/luneta/city_tour_010.jpg",
          "/DAY 0 - CITY TOUR/luneta/city_tour_011.jpg",
          "/DAY 0 - CITY TOUR/luneta/city_tour_012.jpg",
          "/DAY 0 - CITY TOUR/luneta/city_tour_013.jpg",
          "/DAY 0 - CITY TOUR/luneta/city_tour_014.jpg",
          "/DAY 0 - CITY TOUR/luneta/city_tour_015.jpg",
          "/DAY 0 - CITY TOUR/luneta/city_tour_016.jpg",
          "/DAY 0 - CITY TOUR/luneta/city_tour_020.jpg",
          "/DAY 0 - CITY TOUR/luneta/city_tour_037.jpg",
          "/DAY 0 - CITY TOUR/luneta/city_tour_038.jpg",
          "/DAY 0 - CITY TOUR/luneta/city_tour_040.jpeg",
        ],
        photosCaption: "General photos at Rizal Park",
      },
      {
        id: "intramuros",
        emoji: "🏛️",
        title: "Intramuros & Fort Santiago",
        location: "The Walled City, Manila",
        address: "Intramuros, Manila",
        description:
          "Intramuros — the Walled City — is Manila's oldest district. Built by the Spanish in 1571, its cobblestone streets, kalesas, and colonial architecture make it feel like you've stepped through a time portal.",
        story:
          "Walking through Fort Santiago was the heaviest part of the day. The dungeons where prisoners were kept during the Japanese occupation are still standing, and it's sobering in a way that a classroom lesson never could be. Outside, the city roared on — but inside those walls, time had stopped.",
        feelings:
          "A mix of wonder at the preservation and a quiet heaviness after learning about the war-era dungeons.",
        realizations: [
          "History isn't just dates and names — it's places where real things happened to real people.",
          "Intramuros surviving to this day is a testament to how much the past deserves to be kept.",
        ],
        keywords: [
          "Intramuros",
          "Fort Santiago",
          "Walled City",
          "WWII",
          "Colonial Manila",
        ],
        didYouKnow: [
          'Intramuros was founded by Spanish colonizers in 1571 and literally means "within the walls" in Latin.',
          "Fort Santiago once held José Rizal in its dungeon before his execution. You can still walk the path he took on the night before he died.",
          "The walls of Intramuros are up to 7 meters thick in some sections — originally built to withstand cannon fire.",
        ],
        photos: [
          "/DAY 0 - CITY TOUR/intramuros/city_tour_021.jpg",
          "/DAY 0 - CITY TOUR/intramuros/city_tour_022.jpg",
          "/DAY 0 - CITY TOUR/intramuros/city_tour_023.jpg",
          "/DAY 0 - CITY TOUR/intramuros/city_tour_024.jpg",
          "/DAY 0 - CITY TOUR/intramuros/city_tour_025.jpg",
          "/DAY 0 - CITY TOUR/intramuros/city_tour_026.jpg",
          "/DAY 0 - CITY TOUR/intramuros/city_tour_028.jpg",
          "/DAY 0 - CITY TOUR/intramuros/city_tour_034.jpg",
          "/DAY 0 - CITY TOUR/intramuros/city_tour_035.jpg",
          "/DAY 0 - CITY TOUR/intramuros/group.jpeg",
        ],
        photosCaption: "General photos at Intramuros and Fort Santiago",
        videos: ["/VIDEOS/day00/IMG_2056.webm"],
      },
      {
        id: "manila-cathedral",
        emoji: "⛪",
        title: "Manila Cathedral",
        location: "Intramuros, Manila",
        address: "Cabildo St, Intramuros, Manila",
        description:
          "One of the two historic churches inside Intramuros, the Manila Cathedral is a grand basilica known for its towering architecture and intricate stone detailing. An ongoing mass greeted us when we arrived, lending the whole space a quiet reverence.",
        story:
          "We stepped inside carefully since mass was being held. Even with a crowd of tourists around, the cathedral commanded a kind of silence. Standing inside, looking up at the ceiling and the mosaic detail — it made sense why this is the most sought-after wedding venue in the country.",
        feelings:
          "Peaceful and a little awe-struck by the scale of everything.",
        realizations: [
          "Active places of worship deserve extra respect, even during tourist visits.",
          "Architecture can tell the story of a culture just as well as any textbook.",
        ],
        keywords: [
          "Manila Cathedral",
          "Intramuros",
          "Minor Basilica",
          "Church",
          "History",
        ],
        didYouKnow: [
          "The Manila Cathedral has been destroyed and rebuilt eight times — due to earthquakes, fires, and the Second World War.",
          "It is formally known as the Minor Basilica and Metropolitan Cathedral of the Immaculate Conception.",
          "The cathedral's pipe organ has over 4,500 pipes and is one of the largest in Asia.",
        ],
        photos: [
          "/DAY 0 - CITY TOUR/manila_cathedral/city_tour_017.jpg",
          "/DAY 0 - CITY TOUR/manila_cathedral/city_tour_018.jpg",
          "/DAY 0 - CITY TOUR/manila_cathedral/city_tour_019.jpg",
          "/DAY 0 - CITY TOUR/manila_cathedral/city_tour_027.jpg",
          "/DAY 0 - CITY TOUR/manila_cathedral/city_tour_032.jpg",
          "/DAY 0 - CITY TOUR/manila_cathedral/city_tour_033.jpg",
          "/DAY 0 - CITY TOUR/manila_cathedral/city_tour_036.jpg",
          "/DAY 0 - CITY TOUR/manila_cathedral/city_tour_039.jpg",
        ],
        photosCaption: "General photos at Manila Cathedral",
        videos: ["/VIDEOS/day00/IMG_2063.webm"],
      },
      {
        id: "sm-mall-of-asia",
        emoji: "🛍️",
        title: "SM Mall of Asia",
        location: "Pasay City, Metro Manila",
        address: "J.W. Diokno Blvd, Pasay, Metro Manila",
        description:
          "After a long day on foot under the Manila sun, arriving at the SM Mall of Asia felt like the perfect reward. As one of the world's largest malls, its scale was staggering — a complete contrast to everything we'd seen earlier.",
        story:
          "I genuinely needed Google Maps to navigate. We only had about an hour and a half, which is nowhere near enough time, but we made the most of it — window shopping, grabbing food, and hunting for stores we don't have back home in Zamboanga.",
        feelings:
          "Exhausted but instantly energized by the sheer size of the place.",
        realizations: [
          "The jump from 1500s Intramuros to a modern mega-mall in under an hour is only possible in Manila.",
          "1.5 hours in MOA is nothing. Next time, I'd need a whole day.",
        ],
        keywords: ["MOA", "SM Mall of Asia", "Pasay", "Shopping", "Manila"],
        didYouKnow: [
          "SM Mall of Asia opened in 2006 and was once the largest mall in the world, covering over 407,000 sqm of gross floor area.",
          "The mall sits on reclaimed land along Manila Bay — the same bay famous for its stunning sunsets.",
          "MOA Arena inside the complex has a seating capacity of 15,000 and hosts major concerts and sporting events.",
        ],
        photos: [
          "/DAY 0 - CITY TOUR/sm_moa/city_tour_029.jpg",
          "/DAY 0 - CITY TOUR/sm_moa/city_tour_030.jpg",
          "/DAY 0 - CITY TOUR/sm_moa/city_tour_031.jpg",
        ],
        photosCaption: "General photos at SM Mall of Asia",
      },
    ],
  },

  {
    id: "day-1",
    slug: "day-1",
    label: "Day 1",
    title: "Into the Corporate World",
    subtitle: "Hytech Power · OpenText BGC",
    theme: "corporate",
    coverImg: "",
    intro:
      "Day 1 pulled back the curtain on two very different sides of the Philippine tech industry — from engineering simulation labs to a global enterprise company in the heart of BGC.",
    activities: [
      {
        id: "hytech-power",
        emoji: "🤖",
        title: "Hytech Power Inc.",
        location: "Metro Manila",
        address: "Metro Manila, Philippines",
        description:
          "Our morning was spent at Hytech Power Inc., a facility focused on industrial simulation, robotics, and technical training technology. We toured their labs, tried out VR welding setups, and saw student-built robotics projects that had won actual competitions.",
        story:
          "Ate Joy walked us through everything — from anatomy models and transistor displays to full-scale engineering simulators. The VR welding demo was the highlight for me. It hits different when you realize students are learning dangerous industrial skills in a safe virtual environment. Seeing robots built by interns that actually won awards was genuinely inspiring.",
        feelings:
          "Impressed and a little excited about how much technology is available for students who pursue this field.",
        realizations: [
          "Simulation tech removes the fear of failure from learning — and that changes everything.",
          "Filipino students are capable of building award-winning projects when given the right tools.",
        ],
        keywords: [
          "Hytech",
          "Robotics",
          "VR Training",
          "Engineering",
          "Simulation",
        ],
        photos: [
          "/DAY 1/DAY01_HYTECH/hytech_001.jpeg",
          "/DAY 1/DAY01_HYTECH/hytech_002.jpeg",
          "/DAY 1/DAY01_HYTECH/hytech_003.jpeg",
          "/DAY 1/DAY01_HYTECH/hytech_004.jpg",
          "/DAY 1/DAY01_HYTECH/hytech_005.jpg",
          "/DAY 1/DAY01_HYTECH/hytech_006.jpg",
          "/DAY 1/DAY01_HYTECH/hytech_007.jpg",
          "/DAY 1/DAY01_HYTECH/hytech_008.jpg",
          "/DAY 1/DAY01_HYTECH/hytech_009.jpg",
          "/DAY 1/DAY01_HYTECH/hytech_010.jpg",
          "/DAY 1/DAY01_HYTECH/hytech_011.jpg",
          "/DAY 1/DAY01_HYTECH/hytech_012.jpeg",
        ],
        photosCaption: "General photos at Hytech Power Inc.",
        videos: ["/VIDEOS/hytech/IMG_2452.webm"],
      },
      {
        id: "opentext-bgc",
        emoji: "🏢",
        title: "OpenText — BGC Office",
        location: "Bonifacio Global City, Taguig",
        address: "Bonifacio Global City, Taguig, Metro Manila",
        description:
          "In the afternoon, we traveled to BGC in Taguig to visit the OpenText office. BGC itself was already eye-opening — clean, walkable, and buzzing with professionals. The visit gave us a real look at corporate IT life and what it actually takes to land a role at a global company.",
        story:
          "We weren't allowed to take photos inside since they handle sensitive client data, which we respected. Instead, they set up a program — a walkthrough of operations, an overview of career paths for IT students, and a Q&A with their team. The advice on the hiring process and what makes a strong applicant was genuinely useful.",
        feelings:
          "Motivated. Seeing where a career in IT could take you made it feel concrete and real.",
        realizations: [
          "BGC proved that a city's design directly affects how productive and motivated its people feel.",
          "Getting a job is a skill. Being proactive and curious about the company goes a long way.",
        ],
        keywords: [
          "OpenText",
          "BGC",
          "IT Career",
          "Taguig",
          "Corporate",
          "EIM",
        ],
        photos: [
          "/DAY 1/DAY01_OPENTEXT/29a0108985eba83ead69c450f9e9a459.jpeg",
          "/DAY 1/DAY01_OPENTEXT/ca1a90fc5f049a42dade6841cceb48a3.jpeg",
          "/DAY 1/DAY01_OPENTEXT/IMG_2587.JPG",
          "/DAY 1/DAY01_OPENTEXT/IMG_2599.JPG",
        ],
        photosCaption: "General photos at OpenText BGC",
        videos: [
          "/VIDEOS/opentext/IMG_2617.webm",
          "/VIDEOS/opentext/IMG_2620.webm",
          "/VIDEOS/opentext/IMG_2623.webm",
        ],
      },
    ],
  },

  {
    id: "day-2",
    slug: "day-2",
    label: "Day 2",
    title: "Public Service & Global Operations",
    subtitle: "MMDA · Teleperformance",
    theme: "government",
    coverImg: "",
    intro:
      "Day 2 took us from the high-tech command center of one of Manila's most vital government agencies to the fast-paced floor of a global customer experience company. Two worlds, both running 24/7.",
    activities: [
      {
        id: "mmda",
        emoji: "🏛️",
        title: "MMDA Headquarters",
        location: "Makati City, Metro Manila",
        address: "Makati City, Metro Manila",
        description:
          "The Metropolitan Manila Development Authority manages traffic, flood control, and emergency response across 16 cities. Their new command center is a complete surprise — a massive crisis room with a full video wall, AI-powered surveillance, and a real-time fiber optic network.",
        story:
          "I expected a regular government building. What I got was a room that looked like something out of a sci-fi movie. The video wall showed live feeds from hundreds of cameras across the metro, and the AI doesn't just record — it actively detects violations. Kuya Jero explained that they run on their own underground fiber network, which is why there's no lag. It completely changed how I think about traffic management.",
        feelings:
          "Genuinely stunned. It's easy to complain about traffic until you see how much is actually being done behind the scenes.",
        realizations: [
          "Government tech is more advanced than most people give it credit for.",
          "Traffic management is a data science problem, not just a manpower one.",
        ],
        keywords: [
          "MMDA",
          "Traffic Management",
          "AI",
          "Command Center",
          "Manila",
          "NCAP",
        ],
        photos: [
          "/DAY 2/DAY02_MMDA/9b52000be2c4c862656643020bd9cd53.jpeg",
          "/DAY 2/DAY02_MMDA/IMG_2739.JPG",
          "/DAY 2/DAY02_MMDA/IMG_2742.JPG",
          "/DAY 2/DAY02_MMDA/IMG_2763.JPG",
          "/DAY 2/DAY02_MMDA/IMG_2789.JPG",
          "/DAY 2/DAY02_MMDA/IMG_2826.JPG",
          "/DAY 2/DAY02_MMDA/IMG_2851.JPG",
        ],
        photosCaption: "General photos at MMDA Headquarters",
        videos: ["/VIDEOS/mmda/IMG_2761.webm"],
      },
      {
        id: "teleperformance",
        emoji: "📞",
        title: "Teleperformance Philippines",
        location: "Metro Manila",
        address: "Metro Manila, Philippines",
        description:
          "Teleperformance is one of the world's leading customer experience companies, operating across nearly 100 countries. Our afternoon there revealed just how vast and complex the BPO industry really is — and why the Philippines is at the center of it.",
        story:
          "Similar to OpenText, no photos were allowed inside due to account confidentiality. But the tour itself was impressive — walking past rows of agents handling international clients, all moving fast. They gave us a proper welcome program and some useful insights into what BPO work actually involves beyond answering calls. They also gave us some swag before we left.",
        feelings:
          "A bit overwhelmed by the scale, but also impressed by how professional and organized the whole operation is.",
        realizations: [
          'BPO is not just "answering calls" — it\'s a complex, AI-assisted workflow.',
          "The Philippines' BPO dominance isn't an accident. It's built on years of cultivating talent and infrastructure.",
        ],
        keywords: [
          "Teleperformance",
          "BPO",
          "Customer Experience",
          "Call Center",
          "Global",
        ],
        photos: [
          "/DAY 2/DAY02_TELEPERFORMANCE/0667818a8858fb1e88f943fe41fd56d7.jpeg",
          "/DAY 2/DAY02_TELEPERFORMANCE/0aed808bf480557e67d5a241d80f021c.jpeg",
          "/DAY 2/DAY02_TELEPERFORMANCE/207cae06c7bc59d1d3527cc478c14390.jpeg",
          "/DAY 2/DAY02_TELEPERFORMANCE/IMG_2892.JPG",
          "/DAY 2/DAY02_TELEPERFORMANCE/IMG_2895.JPG",
          "/DAY 2/DAY02_TELEPERFORMANCE/IMG_2896.JPG",
          "/DAY 2/DAY02_TELEPERFORMANCE/IMG_2897.JPG",
          "/DAY 2/DAY02_TELEPERFORMANCE/IMG_2903.JPG",
          "/DAY 2/DAY02_TELEPERFORMANCE/IMG_2904.JPG",
          "/DAY 2/DAY02_TELEPERFORMANCE/IMG_2906.JPG",
          "/DAY 2/DAY02_TELEPERFORMANCE/IMG_2909.JPG",
        ],
        photosCaption: "General photos at Teleperformance Philippines",
      },
    ],
  },

  {
    id: "day-3",
    slug: "day-3",
    label: "Day 3",
    title: "Creativity Meets Outsourcing",
    subtitle: "Top Peg Animation · MicroSourcing",
    theme: "creative",
    coverImg: "",
    intro:
      "Day 3 was a study in contrasts — the morning was all passion and artistry at a Filipino animation studio, while the afternoon was a grounding conversation with business leaders about what it actually takes to build a career in the global market.",
    activities: [
      {
        id: "top-peg",
        emoji: "🎨",
        title: "Top Peg Animation Studio",
        location: "Quezon City, Metro Manila",
        address: "Quezon City, Metro Manila",
        description:
          "Top Peg is one of the Philippines' pioneering animation studios, with credits on projects for Disney, Nintendo, and Netflix's Trese. We got a behind-the-scenes look at the full animation pipeline, tried out professional Pen Displays, and heard from the artists themselves.",
        story:
          "Walking into an animation studio felt completely different from every other stop on the tour. It's smaller and more personal than you'd expect — but that energy is exactly what makes it work. Trying the Pen Display was the highlight: drawing on a screen that renders directly is a different experience entirely. Learning that Filipino artists are behind characters you've seen in major global productions gave me a real sense of national pride.",
        feelings:
          "Energized and inspired. Seeing Filipinos working on global icons like Disney and Nintendo reminded me that world-class talent exists right here at home.",
        realizations: [
          "Animation is a massive team effort — every second of footage takes a whole chain of people.",
          "Passion is the real currency of the creative industry.",
        ],
        keywords: [
          "Top Peg",
          "Animation",
          "Disney",
          "Pen Display",
          "Filipino Artists",
          "Creative",
        ],
        photos: [
          "/DAY 3/DAY03_TOPPEG/5326843e16b36d54e67b64fdd8f7c7f3.jpeg",
          "/DAY 3/DAY03_TOPPEG/att.UGj498z54uu9srQWUqq13XeRsjz0nO51Y3z32S4kEms.jpg",
          "/DAY 3/DAY03_TOPPEG/att.ZwsGyp0wLKmTuRWqjIqwPwthuvytPE7OP9u2YY3vdT8.jpg",
          "/DAY 3/DAY03_TOPPEG/IMG_3379.JPG",
        ],
        photosCaption: "General photos at Top Peg Animation Studio",
      },
      {
        id: "microsourcing",
        emoji: "🤝",
        title: "MicroSourcing Philippines",
        location: "Pasay City, Metro Manila",
        address: "Pasay City, Metro Manila",
        description:
          "MicroSourcing is one of the largest offshore outsourcing providers in the Philippines, known for building dedicated remote teams for international companies. But what stood out wasn't the office — it was the people. Leaders from different departments sat down with us for a genuine conversation about careers, competition, and what it means to succeed in a global market.",
        story:
          "They didn't just talk about their company's success. They told us the truth: when you work in this industry, you're competing with talent from all over the world. That's not meant to discourage — it's meant to push. The leadership panel felt like talking to people who genuinely wanted to see us grow, not just pitch their brand. It was the most honest career conversation I had on the entire tour.",
        feelings:
          "Humbled and motivated. Ending the day with leaders who took real time for us made the whole trip feel more meaningful.",
        realizations: [
          "Global competition is the new standard — good enough for the Philippines isn't enough.",
          "The best companies invest in people, not just profit.",
        ],
        keywords: [
          "MicroSourcing",
          "BPO",
          "Career Advice",
          "Outsourcing",
          "Leadership",
          "Global Market",
        ],
        photos: [
          "/DAY 3/DAY03_MICROSOURCING/IMG_3391.JPG",
          "/DAY 3/DAY03_MICROSOURCING/IMG_3396.JPG",
          "/DAY 3/DAY03_MICROSOURCING/IMG_3406.JPG",
          "/DAY 3/DAY03_MICROSOURCING/new.jpeg",
          "/DAY 3/DAY03_MICROSOURCING/new_2.jpeg",
          "/DAY 3/DAY03_MICROSOURCING/new_3.jpeg",
        ],
        photosCaption: "General photos at MicroSourcing Philippines",
      },
    ],
  },

  {
    id: "day-4",
    slug: "day-4",
    label: "Day 4",
    title: "Our Tagaytay Free Day",
    subtitle: "People's Park · Sky Ranch",
    theme: "nature",
    coverImg: "",
    intro:
      "With Araw ng Kagitingan closing all offices, we traded corporate visits for cool highland air. Tagaytay was exactly the kind of reset we needed — views of Taal Volcano, cold breezes, and a little amusement park fun to cap it all off.",
    activities: [
      {
        id: "peoples-park",
        emoji: "🏔️",
        title: "People's Park in the Sky",
        location: "Tagaytay City, Cavite",
        address: "Tagaytay City, Cavite — 700m above sea level",
        description:
          "Perched on Mount Sungay, the highest point in Tagaytay, People's Park in the Sky gave us sweeping 360° views of Taal Lake, the volcano island, and the entire ridge. The weather cooperated perfectly — no fog, just pure highland clarity.",
        story:
          "I'm not an adrenaline person, so a day in the mountains was exactly my kind of free day. The wind up there was cold and constant, and the view of the lake and volcano from that height felt almost unreal. We took photos, bought pasalubong from the stalls, and just breathed for a while. After four days of rushing from office to office, doing nothing felt like everything.",
        feelings:
          "Calm and completely reset. The kind of quiet that only a mountain view can give you.",
        realizations: [
          "Sometimes the unplanned parts of a trip are the best ones.",
          "Nature doesn't need a schedule — it just needs your attention.",
        ],
        keywords: [
          "People's Park",
          "Tagaytay",
          "Taal Volcano",
          "Mountain",
          "Nature",
          "Scenic",
        ],
        photos: [
          "/DAY 4 - TAGAYTAY/peoples_park/att.4P69lz5_c2P8vFiItSnbsM5nB-F8O7C5trt74FEzw-o.jpg",
          "/DAY 4 - TAGAYTAY/peoples_park/IMG_3686.JPG",
          "/DAY 4 - TAGAYTAY/peoples_park/IMG_3799.JPG",
          "/DAY 4 - TAGAYTAY/peoples_park/IMG_3903.JPG",
          "/DAY 4 - TAGAYTAY/peoples_park/IMG_3931.JPG",
          "/DAY 4 - TAGAYTAY/peoples_park/IMG_3979.JPG",
        ],
        photosCaption: "General photos at People's Park in the Sky",
        videos: [
          "/VIDEOS/tagaytay/peoples_park_vids/IMG_3769.webm",
          "/VIDEOS/tagaytay/peoples_park_vids/IMG_3900.webm",
        ],
      },
      {
        id: "sky-ranch",
        emoji: "🎡",
        title: "Sky Ranch Tagaytay",
        location: "Tagaytay City, Cavite",
        address: "Tagaytay City, Cavite — along the ridge",
        description:
          "Sky Ranch sits right on the Tagaytay ridge, combining thrill rides with one of the best natural views in the country. For 400 pesos, you get unlimited access to most attractions — and the Sky Eye Ferris wheel alone is worth the price.",
        story:
          "I skipped the more extreme rides (no Vikings for me), but the Ferris wheel was non-negotiable. It takes about 10 minutes and the view from the top — the whole ridge, the lake, the volcano — is breathtaking. The bumper cars were a bonus. Watching friends brave the drop tower while I stayed safely on the ground was its own kind of entertainment.",
        feelings:
          "Light and happy. Low-stakes fun with the best possible view.",
        realizations: [
          "You don't have to love extreme rides to have a great time at an amusement park.",
          "Pushing past small fears — like the Ferris wheel — is always worth it for the view at the top.",
        ],
        keywords: [
          "Sky Ranch",
          "Tagaytay",
          "Ferris Wheel",
          "Sky Eye",
          "Amusement Park",
          "Friends",
        ],
        photos: [
          "/DAY 4 - TAGAYTAY/sky_ranch/IMG_4027.JPG",
          "/DAY 4 - TAGAYTAY/sky_ranch/IMG_4037.JPG",
          "/DAY 4 - TAGAYTAY/sky_ranch/IMG_4043.JPG",
          "/DAY 4 - TAGAYTAY/sky_ranch/IMG_4044.JPG",
          "/DAY 4 - TAGAYTAY/sky_ranch/IMG_4049.JPG",
          "/DAY 4 - TAGAYTAY/sky_ranch/IMG_4086.JPG",
          "/DAY 4 - TAGAYTAY/sky_ranch/IMG_4093.JPG",
          "/DAY 4 - TAGAYTAY/sky_ranch/IMG_4095.JPG",
          "/DAY 4 - TAGAYTAY/sky_ranch/IMG_4099.JPG",
          "/DAY 4 - TAGAYTAY/sky_ranch/IMG_4104.JPG",
          "/DAY 4 - TAGAYTAY/sky_ranch/IMG_4142.JPG",
          "/DAY 4 - TAGAYTAY/sky_ranch/IMG_4149.JPG",
        ],
        photosCaption: "General photos at Sky Ranch Tagaytay",
        videos: [
          "/VIDEOS/tagaytay/sky_ranch/IMG_4058.webm",
          "/VIDEOS/tagaytay/sky_ranch/IMG_4117.webm",
          "/VIDEOS/tagaytay/sky_ranch/IMG_6585.webm",
        ],
      },
    ],
  },

  {
    id: "day-5",
    slug: "day-5",
    label: "Day 5",
    title: "Welcome to the City of Pines",
    subtitle: "Baguio City",
    theme: "mountain",
    coverImg: "",
    intro:
      "The overnight bus brought us 1,500 meters above sea level to Baguio City — the Summer Capital of the Philippines. Pine trees, cold air, and a full day of sights waited for us on the other side of a 6-hour ride.",
    activities: [
      {
        id: "strawberry-farm",
        emoji: "🍓",
        title: "La Trinidad Strawberry Farm",
        location: "La Trinidad, Benguet",
        address: "La Trinidad, Benguet — Strawberry Capital of the Philippines",
        description:
          "We arrived at the Strawberry Farm just before dawn, fresh off an overnight bus ride. The cold was immediate and welcome. We walked the fields, took photos among the strawberry rows, and started the morning with 50-peso strawberry taho — the best breakfast on the entire trip.",
        story:
          "The temperature drop as we entered Benguet woke me right up. Kuya Jero gave us a great tip — buy your souvenirs here since the prices are lower than at the more touristy spots further into the city. He was right. The strawberry taho alone made the 6-hour bus ride worth it.",
        feelings: "Refreshed and genuinely cold for the first time in days.",
        realizations: [
          "A good tour guide knows where the best deals are — always listen to local advice.",
          "The 'Summer Capital' is cold enough to need a jacket even in April.",
        ],
        keywords: [
          "Strawberry Farm",
          "La Trinidad",
          "Baguio",
          "Strawberry Taho",
          "Benguet",
        ],
        photos: [
          "/DAY 5/STRAWBERRY FARM/77453f1908b6729610b64e88f3e3e4ca.jpeg",
          "/DAY 5/STRAWBERRY FARM/ed7b36feb9c32c05aca54513d5d5d558.jpeg",
          "/DAY 5/STRAWBERRY FARM/IMG_4209.JPG",
          "/DAY 5/STRAWBERRY FARM/IMG_4229.JPG",
          "/DAY 5/STRAWBERRY FARM/IMG_4294.JPG",
          "/DAY 5/STRAWBERRY FARM/IMG_4335.JPG",
        ],
        photosCaption: "General photos at La Trinidad Strawberry Farm",
        videos: ["/VIDEOS/baguio/IMG_4248.webm"],
      },
      {
        id: "bell-church",
        emoji: "🔔",
        title: "Bell Church",
        location: "La Trinidad / Baguio Border",
        address: "Kilometer 3, La Trinidad, Benguet",
        description:
          "Founded in 1960 by Chinese immigrants, the Bell Church is a Taoist-Buddhist temple with steep pathways, dragon sculptures, ornate pagodas, and panoramic views of the surrounding hills. It feels like stepping into an entirely different country.",
        story:
          "The climb up was steep — everything in Baguio goes uphill — but the architecture at the top made it worth every step. Dragon statues, hanging bells, and Chinese inscriptions everywhere. It was quiet in a way that felt intentional. We gave ourselves plenty of time to walk around and take it in.",
        feelings:
          "Quietly amazed. It's one of the most visually distinct places I've been.",
        realizations: [
          "Baguio is more culturally diverse than I expected.",
          "Sacred spaces deserve respect regardless of your own faith.",
        ],
        keywords: [
          "Bell Church",
          "La Trinidad",
          "Chinese Temple",
          "Baguio",
          "Taoist",
          "Culture",
        ],
        photos: [
          "/DAY 5/BELL CHURCH/045948dc664e67194cf144946c41f784.jpeg",
          "/DAY 5/BELL CHURCH/5a944dee049b940737702f29d51235b6.jpeg",
          "/DAY 5/BELL CHURCH/62c13ca47f872f174606a8002ceb3c05.jpeg",
          "/DAY 5/BELL CHURCH/6e03b190b1c1e1f4c224e337ca37742d.jpeg",
          "/DAY 5/BELL CHURCH/990a28bb4195973c039409a5a3507a89.jpeg",
          "/DAY 5/BELL CHURCH/IMG_4350.JPG",
          "/DAY 5/BELL CHURCH/IMG_4355.JPG",
          "/DAY 5/BELL CHURCH/IMG_4358.JPG",
          "/DAY 5/BELL CHURCH/IMG_4363.JPG",
          "/DAY 5/BELL CHURCH/IMG_4379.JPG",
          "/DAY 5/BELL CHURCH/IMG_4398.JPG",
          "/DAY 5/BELL CHURCH/IMG_4413.JPG",
        ],
        photosCaption: "General photos at Bell Church",
      },
      {
        id: "pma",
        emoji: "🎖️",
        title: "Philippine Military Academy (PMA)",
        location: "Fort del Pilar, Baguio City",
        address: "Fort del Pilar, Baguio City, Benguet",
        description:
          "PMA is the country's premier training ground for future military leaders, and it is enormous. Fort del Pilar spans 373 hectares and functions like its own small barangay — complete with a hospital, gas stations, and the historic Melchor Hall.",
        story:
          "I expected a campus. What I found was basically a self-contained city. We walked the grounds, saw WWII-era aircraft on display at the headquarters, and ended with a group photo at Melchor Hall. Kuya Jero reminded us not to disturb the cadets — even passing ones are technically on duty. That detail alone puts their discipline into perspective.",
        feelings:
          "Humbled. There is a weight to the place that you feel the moment you step in.",
        realizations: [
          "PMA isn't a school — it's a lifestyle. 24/7 discipline, every day.",
          "History and modernity sitting side by side at the Academy shows what it means to honor the past while training for the future.",
        ],
        keywords: [
          "PMA",
          "Philippine Military Academy",
          "Baguio",
          "Fort del Pilar",
          "Cadets",
          "Military",
        ],
        photos: [
          "/DAY 5/PMA/599e200af450589ebec25aa14a518c20.jpeg",
          "/DAY 5/PMA/IMG_4439.JPG",
          "/DAY 5/PMA/IMG_4440.JPG",
          "/DAY 5/PMA/IMG_4442.JPG",
          "/DAY 5/PMA/IMG_4453.JPG",
          "/DAY 5/PMA/IMG_4459.JPG",
          "/DAY 5/PMA/IMG_4510.JPG",
          "/DAY 5/PMA/IMG_4527.JPG",
          "/DAY 5/PMA/IMG_4552.JPG",
        ],
        photosCaption: "General photos at the Philippine Military Academy",
        videos: ["/VIDEOS/pma/IMG_4448.webm"],
      },
      {
        id: "the-mansion",
        emoji: "🏛️",
        title: "The Mansion",
        location: "Leonard Wood Road, Baguio City",
        address: "Leonard Wood Road, Baguio City, Benguet",
        description:
          "The Mansion is the official summer residence of the Philippine president — a Victorian-style landmark that has stood since 1908 and survived a world war. We couldn't go far inside, but the famous wrought-iron gates alone are worth the stop.",
        story:
          "It was a quick visit — we stayed near the gates since it\'s still an active government property. But even just standing there, knowing the building has seen colonial governors, post-war reconstruction, and every Philippine president since, gives it a certain gravity. The photo op was excellent.",
        feelings:
          "Grand and fleeting — the kind of place that leaves a quiet impression.",
        realizations: [
          "Some landmarks don't need hours of your time. Just knowing their story is enough.",
          "Buildings survive longer than the people who built them — they're how history stays visible.",
        ],
        keywords: [
          "The Mansion",
          "Baguio",
          "Presidential Residence",
          "Historical",
          "Summer Capital",
        ],
        photos: [
          "/DAY 5/THE MANSION/IMG_4557.JPG",
          "/DAY 5/THE MANSION/IMG_4565.JPG",
          "/DAY 5/THE MANSION/IMG_4574.JPG",
          "/DAY 5/THE MANSION/4670dea5-7e7d-42be-92a1-c45df0db8995.jpeg",
        ],
        photosCaption: "General photos at The Mansion",
      },
      {
        id: "mines-view",
        emoji: "⛰️",
        title: "Mines View Park",
        location: "Mines View, Baguio City",
        address: "Mines View, Baguio City, Benguet",
        description:
          "Mines View Park overlooks the old gold and copper mines of Itogon, Benguet. It\'s small but lively — horses, stalls, traditional Igorot attire rentals, and a sweeping panoramic view of the surrounding mountain ranges.",
        story:
          "The observation deck gives a great mountain view and the area around it is full of souvenir stalls and photo opportunities. We tried on traditional Igorot attire and took in the scenery before heading back.",
        feelings: "Lighthearted and a little touristy, but in the best way.",
        realizations: [
          "Sometimes the best stops on a trip are the unplanned, relaxed ones.",
          "A view like that reminds you how small the city really is against the mountains.",
        ],
        keywords: ["Mines View", "Baguio", "Panorama", "Igorot", "Souvenir"],
        photos: [
          "/DAY 5/MINESVIEW/IMG_4591.JPG",
          "/DAY 5/MINESVIEW/IMG_4624.JPG",
          "/DAY 5/MINESVIEW/IMG_4649.JPG",
        ],
        photosCaption: "General photos at Mines View Park",
        videos: ["/VIDEOS/baguio/IMG_4585.webm"],
      },
      {
        id: "night-market",
        emoji: "🌃",
        title: "Harrison Road Night Market",
        location: "Harrison Road, Baguio City",
        address: "Harrison Road, Baguio City, Benguet",
        description:
          "The Baguio Night Market is one of the most organized ukay-ukay markets in the country. Strictly managed with designated entry and exit points, it runs deep into the night along Harrison Road — packed with quality thrift finds at prices that make you question everything you\'ve ever paid for clothes.",
        story:
          "I wasn\'t expecting much from a night market, but the quality of the finds genuinely surprised me. Police and city staff managed crowd flow perfectly — you enter from the front, exit from the back. No chaos, just rows of stalls with branded items in great condition for a fraction of what you\'d pay anywhere else. We stayed longer than planned.",
        feelings:
          "Excited in the way only a good find at a good price can make you feel.",
        realizations: [
          "Organization transforms even a crowded public market into a pleasant experience.",
          "The best finds on a trip aren\'t always the souvenirs you planned to buy.",
        ],
        keywords: [
          "Night Market",
          "Harrison Road",
          "Baguio",
          "Ukay-Ukay",
          "Thrift",
        ],
        photos: [],
        videos: ["/VIDEOS/baguio/IMG_4675.webm"],
      },
    ],
  },

  {
    id: "day-6",
    slug: "day-6",
    label: "Day 6",
    title: "Free Day in Baguio",
    subtitle: "Burnham Park · SM Baguio",
    theme: "leisure",
    coverImg: "",
    intro:
      "The final day was ours. No itinerary, no company visits, no rush — just the cool Baguio air and freedom to go wherever we wanted. We made the most of it.",
    activities: [
      {
        id: "burnham-park",
        emoji: "🌳",
        title: "Burnham Park",
        location: "Baguio City Center",
        address: "Burnham Park, Baguio City, Benguet",
        description:
          "Designed by American architect Daniel Burnham — who also drafted the original urban plan for Manila — Burnham Park is the heart of Baguio City. We rented carts and spent the morning riding around the massive grounds, breathing in the pine-scented air one last time.",
        story:
          "The lake was dry so boating wasn't an option, but the carts more than made up for it. Riding around the park with no schedule and nowhere to be felt like the perfect end to a packed week. SM Baguio was right there — and being in a mall with no air conditioning because the natural climate handles it is genuinely one of the coolest things I\'ve experienced.",
        feelings: "Calm, satisfied, and a little sad that it was ending.",
        realizations: [
          "A slow morning at the end of a long trip helps you process everything you lived through.",
          "Natural ventilation is a flex. SM Baguio doesn\'t need AC, and honestly, neither did we.",
        ],
        keywords: [
          "Burnham Park",
          "Baguio",
          "SM Baguio",
          "Free Day",
          "Carts",
          "Leisure",
        ],
        photos: [
          "/DAY 6/652350a5520edd14bfd194d98b95157a.jpeg",
          "/DAY 6/IMG_4790.JPG",
          "/DAY 6/IMG_4802.JPG",
        ],
        photosCaption: "General photos at Burnham Park and SM Baguio",
        videos: ["/VIDEOS/baguio/IMG_4785.webm"],
      },
      {
        id: "going-home",
        emoji: "✈️",
        title: "Checking Out & Heading Home",
        location: "Baguio → Quezon City → Zamboanga",
        address: "Prince Plaza Hotel, Quezon City",
        description:
          "After seven packed days, it was finally time to pack our bags and head home. We checked out of Prince Plaza Hotel, made our way back to Quezon City, and spent one last night before flying home to Zamboanga the following morning.",
        story:
          "Leaving felt different from how I expected. The bags were heavier — not just from pasalubong, but from everything the week had given us. Prince Plaza had been our base before the tour began and now it was our send-off. One last group photo, one last jeepney ride, and then the airport. The flight home was quiet in the best way.",
        feelings: "Grateful, exhausted, and already missing it.",
        realizations: [
          "Seven days is short enough to feel like a dream and long enough to change how you see things.",
          "Home feels different when you return with new eyes.",
        ],
        keywords: [
          "Going Home",
          "Zamboanga",
          "Prince Plaza",
          "Quezon City",
          "Farewell",
        ],
        photos: [
          "/PROLOGUE/arrived/IMG_4853.JPG",
          "/PROLOGUE/arrived/IMG_4861.JPG",
          "/PROLOGUE/arrived/IMG_4873.JPG",
        ],
        photosCaption: "Last photos before flying home to Zamboanga",
        videos: [
          "/VIDEOS/mnl-zmb/IMG_4882.webm",
          "/VIDEOS/mnl-zmb/IMG_4897.webm",
        ],
      },
    ],
  },
];
