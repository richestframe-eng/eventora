

// Categories used for filtering (the "All" button is added in Stage 4)
const eventCategories = ["Technology", "Music", "Workshop", "Sports", "Cultural"];

const events = [
  // ---------- Technology ----------
  {
    id: 1,
    name: "AI & Machine Learning Summit 2026",
    category: "Technology",
    date: "2026-11-21T10:00:00",
    venue: "Grand Convention Center, Hall A",
    image: "images/events/ai-summit.jpg",
    shortDescription: "A full day of talks and demos on the future of artificial intelligence.",
    fullDescription: "Join industry experts, researchers and students for a full day exploring artificial intelligence and machine learning. The summit includes keynote talks, live demos of real-world AI projects, and a networking session where you can meet professionals and fellow learners. Suitable for beginners and enthusiasts alike.",
    featured: true
  },
  {
    id: 2,
    name: "Code for Change Hackathon",
    category: "Technology",
    date: "2026-12-05T09:00:00",
    venue: "Innovation Lab, Tech Park",
    image: "images/events/hackathon.jpg",
    shortDescription: "24 hours of coding to build solutions for real community problems.",
    fullDescription: "Form a team of up to four members and spend 24 hours building a software solution for a real community problem. Mentors will guide you throughout the event, and the best projects will be awarded prizes and certificates. Bring your laptop, your ideas and plenty of energy.",
    featured: false
  },

  // ---------- Music ----------
  {
    id: 3,
    name: "Indie Music Night",
    category: "Music",
    date: "2026-11-28T18:30:00",
    venue: "Riverside Open-Air Stage",
    image: "images/events/indie-night.jpg",
    shortDescription: "An evening of live performances by the best upcoming indie bands.",
    fullDescription: "Enjoy an open-air evening with five upcoming indie bands performing their original songs. Food stalls and refreshment counters will be available throughout the night. Arrive early to find a good spot, and bring a light jacket for the evening breeze.",
    featured: true
  },
  {
    id: 4,
    name: "Classical Evening: Strings & Piano",
    category: "Music",
    date: "2026-12-12T19:00:00",
    venue: "City Concert Hall",
    image: "images/events/classical-evening.jpg",
    shortDescription: "A calm and elegant night of violin, cello and piano performances.",
    fullDescription: "Experience an elegant evening of classical music performed by a string quartet and a solo pianist. The program includes well-known classical pieces as well as a few modern arrangements. Seating is limited, so early registration is recommended.",
    featured: false
  },

  // ---------- Workshop ----------
  {
    id: 5,
    name: "UI/UX Design Workshop",
    category: "Workshop",
    date: "2026-11-15T11:00:00",
    venue: "Design Studio, Room 204",
    image: "images/events/uiux-workshop.jpg",
    shortDescription: "Learn the basics of user-friendly design through hands-on practice.",
    fullDescription: "A beginner-friendly, hands-on workshop covering the basics of user interface and user experience design. You will learn how to plan layouts, choose colors and fonts, and create a simple prototype. No prior design experience is needed. Please bring a laptop or a notebook.",
    featured: false
  },
  {
    id: 6,
    name: "Photography Masterclass",
    category: "Workshop",
    date: "2026-12-19T10:00:00",
    venue: "Art Gallery Hall",
    image: "images/events/photography.jpg",
    shortDescription: "Improve your photos with tips on light, framing and editing.",
    fullDescription: "Learn how to take better photographs using any camera, including your phone. The session covers lighting, composition, framing and basic editing, followed by a short outdoor photo walk where you can practice what you learned.",
    featured: false
  },

  // ---------- Sports ----------
  {
    id: 7,
    name: "Inter-College Football Cup",
    category: "Sports",
    date: "2026-12-02T14:00:00",
    venue: "City Sports Stadium",
    image: "images/events/football-cup.jpg",
    shortDescription: "Eight college teams compete for the championship trophy.",
    fullDescription: "Eight college teams will compete in a knockout tournament for the championship trophy. Come to cheer for your college, enjoy the matches and be part of the atmosphere. Entry is open to students, staff and families.",
    featured: false
  },
  {
    id: 8,
    name: "City 10K Run",
    category: "Sports",
    date: "2027-01-10T06:30:00",
    venue: "Central Park Main Gate",
    image: "images/events/city-run.jpg",
    shortDescription: "A friendly 10 km run through the city for all fitness levels.",
    fullDescription: "Lace up your running shoes for a friendly 10 km run through the city's main roads. Whether you are an experienced runner or a first-timer, there is a place for you. Water stations, medals for all finishers and a warm-up session are included.",
    featured: true
  },

  // ---------- Cultural ----------
  {
    id: 9,
    name: "Festival of Lights Cultural Night",
    category: "Cultural",
    date: "2026-12-20T17:00:00",
    venue: "Town Hall Grounds",
    image: "images/events/cultural-night.jpg",
    shortDescription: "Traditional dance, music and food celebrating local culture.",
    fullDescription: "Celebrate local culture with an evening of traditional dance, folk music and drama performed by community groups and students. Enjoy a variety of traditional food from local stalls and take part in the lamp-lighting ceremony at the end of the night.",
    featured: true
  },
  {
    id: 10,
    name: "Heritage Food & Art Fair",
    category: "Cultural",
    date: "2027-01-24T11:00:00",
    venue: "Old Market Square",
    image: "images/events/food-art-fair.jpg",
    shortDescription: "Local artists, crafts and traditional dishes in one lively fair.",
    fullDescription: "Explore handmade crafts, paintings and traditional dishes at this lively one-day fair. Meet local artists, watch live craft demonstrations and try food from different regions. A great event for families and friends.",
    featured: false
  }
];