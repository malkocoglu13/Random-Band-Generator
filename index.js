import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const randomAdjective = adj[Math.floor(Math.random() * adj.length)];
  const randomNoun = noun[Math.floor(Math.random() * noun.length)];
  res.render("index.ejs", { adjective: randomAdjective, noun: randomNoun });

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const adj = [
  "Alarming",
  "Awe-Inspiring",
  "Captivating",
  "Celestial",
  "Cosmic",
  "DYNAMIC",
  "Eclectic",
  "Elysian",
  "Enchanting",
  "Enigmatic",
  "Ethereal",
  "Euphoric",
  "Frenetic",
  "Harmonious",
  "Invincible",
  "Jubilant",
  "Kaleidoscopic",
  "Luminous",
  "Melodic",
  "Mesmeric",
  "Mystical",
  "Nebulous",
  "Pioneering",
  "Radiant",
  "Resplendent",
  "Serendipitous",
  "Spirited",
  "Vibrant",
  "Whimsical",
  ];

const noun = [
  "Adventure",
  "Harmony",
  "Mystery",
  "Enchantment",
  "Exploration",
  "Odyssey",
  "Journey",
  "Discovery",
  "Quest",
  "Voyage",
  "Legend",
  "Myth",
  "Wonder",
  "Treasure",
  "Magic",
  "Whisper",
  "Echo",
  "Rhythm",
  "Harbor",
  "Symphony",
  "Spectrum",
  "Horizon",
  "Meadow",
  "Cascade",
  "Celebration",
  "Chaos",
  "Harbor",
  "Serenade",
  "Whisper",
];
