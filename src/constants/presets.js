export const presetLabels = [
  "Completion",
  "Grammatical Standard English",
  //   "Summarize for a 2nd grader",
  //   "Text to command",
  "Q&A",
  "English to other languages",
  //   "Parse unstructured data",
  "Classification",
  "Text to code",
];

export const presets = {
  Completion: "",
  "Grammatical Standard English":
    "Correct this to standard English:\n\nShe no went to the market.",
  //   "Summarize for a 2nd grader":
  //     "Summarize this for a second-grade student:\n\nJupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.",
  //   "Text to command":
  //     "Convert this text to a programmatic command:\n\nExample: Ask Constance if we need some bread\nOutput: send-msg `find constance` Do we need some bread?\n\nContact the ski store and figure out if I can get my skis fixed before I leave on Thursday",
  "Q&A":
    'I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ:',
  "English to other languages":
    "Translate this into 1. French, 2. Spanish and 3. Japanese:\n\nWhat rooms do you have available?\n\n1.",
  //   "Parse unstructured data":
  //     "A table summarizing the fruits from Goocrux:\n\nThere are many fruits that were found on the recently discovered planet Goocrux. There are neoskizzles that grow there, which are purple and taste like candy. There are also loheckles, which are a grayish blue fruit and are very tart, a little bit like a lemon. Pounits are a bright green color and are more savory than sweet. There are also plenty of loopnovas which are a neon pink flavor and taste like cotton candy. Finally, there are fruits called glowls, which have a very sour and bitter taste which is acidic and caustic, and a pale orange tinge to them.\n\n| Fruit | Color | Flavor |",
  Classification:
    "The following is a list of companies and the categories they fall into:\n\nApple, Facebook, Fedex\n\nApple\nCategory:",
  "Text to code": "javascript code for inverting  a binary tree",
};
