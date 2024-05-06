// script.js
const wordList = [
    { word: "apple", description: "A fruit that is often red or green" },
    { word: "banana", description: "A yellow fruit with a soft texture" },
    { word: "cherry", description: "A small, round, red fruit with a pit" },
    { word: "orange", description: "A citrus fruit with a tough outer rind" },
    { word: "grape", description: "A small, round fruit often used to make wine" },
    { word: "strawberry", description: "A sweet, red fruit with small seeds on the outside" },
    { word: "blueberry", description: "A small, round fruit with a blue-purple color" },
    { word: "watermelon", description: "A large fruit with a green rind and pink flesh" },
    { word: "pineapple", description: "A tropical fruit with a spiky outer shell" },
    { word: "kiwi", description: "A small, brown fruit with green flesh and black seeds" },
    { word: "mango", description: "A tropical fruit with a sweet, juicy flesh" },
    { word: "pear", description: "A sweet fruit with a green or yellow skin and a soft, juicy flesh" },
    { word: "peach", description: "A soft fruit with a fuzzy skin and a sweet, juicy flesh" },
    { word: "plum", description: "A small, round fruit with a smooth skin and a sweet, juicy flesh" },
    { word: "apricot", description: "A small, orange fruit with a soft, velvety skin and a sweet flesh" },
    { word: "lemon", description: "A yellow citrus fruit with a sour taste" },
    { word: "lime", description: "A green citrus fruit with a sour taste" },
    { word: "coconut", description: "A large, brown fruit with a hard shell and white flesh" },
    { word: "avocado", description: "A pear-shaped fruit with green or black skin and a large seed inside" },
    { word: "fig", description: "A small, purple or green fruit with a soft flesh and tiny seeds" },
    { word: "nectarine", description: "A smooth-skinned peach with a firm flesh" },
    { word: "raspberry", description: "A small, red fruit with a sweet-tart flavor" },
    { word: "blackberry", description: "A dark purple fruit with a sweet-tart flavor" },
    { word: "cranberry", description: "A small, red fruit with a tart flavor" },
    { word: "grapefruit", description: "A large citrus fruit with a bitter taste" },
    { word: "pomegranate", description: "A red fruit with a tough outer rind and juicy seeds inside" },
    { word: "melon", description: "A large fruit with sweet, juicy flesh and a thick rind" },
    { word: "dragonfruit", description: "A tropical fruit with a bright pink or yellow skin and white or red flesh" },
    { word: "guava", description: "A tropical fruit with a green or yellow skin and sweet, pink flesh" },
    { word: "passionfruit", description: "A round or oval fruit with a thick, tough rind and juicy, seed-filled pulp" },
    { word: "tangerine", description: "A small citrus fruit similar to an orange, but smaller and sweeter" },
    { word: "lychee", description: "A small, round fruit with a rough, red shell and sweet, white flesh" },
    { word: "persimmon", description: "An orange fruit with a sweet, honey-like flavor" },
    { word: "kiwifruit", description: "A small fruit with brown, fuzzy skin and green flesh with black seeds" },
    { word: "starfruit", description: "A tropical fruit with a yellow or green skin and a star-shaped cross-section" },
    { word: "mulberry", description: "A small, sweet fruit with a dark purple color" },
    { word: "lychee", description: "A small, round fruit with a rough, red shell and sweet, white flesh" },
    { word: "currant", description: "A small, tart fruit that grows in clusters" },
    { word: "boysenberry", description: "A hybrid fruit that is a cross between a raspberry, blackberry, and loganberry" },
    { word: "elderberry", description: "A small, dark purple fruit with a tart flavor" },
    { word: "gooseberry", description: "A small, round fruit with a tart flavor" },
    { word: "kumquat", description: "A small citrus fruit with an edible skin and tart flesh" },
    { word: "cantaloupe", description: "A sweet melon with orange flesh and a ribbed rind" },
    { word: "honeydew", description: "A sweet melon with green flesh and a smooth rind" },
    { word: "breadfruit", description: "A starchy fruit with a green or yellow skin and soft, white flesh" },
    { word: "ackee", description: "A tropical fruit with red skin and yellow flesh" },
    { word: "durian", description: "A large fruit with a spiky outer shell and a strong odor" },
    { word: "longan", description: "A small, round fruit with a brown shell and translucent, juicy flesh" },
    { word: "rambutan", description: "A tropical fruit with a hairy outer shell and sweet, white flesh" },
    { word: "tamarillo", description: "An egg-shaped fruit with red or orange skin and tangy flesh" },
    { word: "ugli fruit", description: "A citrus fruit with a wrinkled, greenish-yellow skin and sweet-tart flesh" },
    { word: "chayote", description: "A green, pear-shaped fruit with a mild flavor" },
    { word: "custard apple", description: "A sweet fruit with a green or brown skin and creamy flesh" },
    { word: "feijoa", description: "A green fruit with a sweet, aromatic flavor" },
    { word: "jabuticaba", description: "A grape-like fruit that grows directly on the trunk of the tree" },
    { word: "mangosteen", description: "A tropical fruit with a thick, purple rind and juicy, white segments" },
    { word: "papaya", description: "A tropical fruit with orange flesh and black seeds" },
    { word: "soursop", description: "A green, spiky fruit with white, fibrous flesh and black seeds" },
    { word: "tamarind", description: "A tangy fruit with a brown, pod-like shell and sticky pulp" },
    { word: "breadnut", description: "A starchy fruit with a green or brown shell and soft, white flesh" },
    { word: "star apple", description: "A purple fruit with a star-shaped cross-section and sweet, milky flesh" },
    { word: "water apple", description: "A crisp, watery fruit with a red or pink skin" },
    { word: "watermelon", description: "A large fruit with a green rind and pink flesh" },
    { word: "black sapote", description: "A green fruit with dark brown flesh that tastes like chocolate pudding" },
    { word: "custard apple", description: "A sweet fruit with a green or brown skin and creamy flesh" },
    { word: "feijoa", description: "A green fruit with a sweet, aromatic flavor" },
    { word: "longan", description: "A small, round fruit with a brown shell and translucent, juicy flesh" },
    { word: "jabuticaba", description: "A grape-like fruit that grows directly on the trunk of the tree" },
    { word: "mangosteen", description: "A tropical fruit with a thick, purple rind and juicy, white segments" },
    { word: "papaya", description: "A tropical fruit with orange flesh and black seeds" },
    { word: "soursop", description: "A green, spiky fruit with white, fibrous flesh and black seeds" },
    { word: "tamarind", description: "A tangy fruit with a brown, pod-like shell and sticky pulp" },
    { word: "breadnut", description: "A starchy fruit with a green or brown shell and soft, white flesh" },
    { word: "star apple", description: "A purple fruit with a star-shaped cross-section and sweet, milky flesh" },
    { word: "water apple", description: "A crisp, watery fruit with a red or pink skin" },
    { word: "black sapote", description: "A green fruit with dark brown flesh that tastes like chocolate pudding" },
    { word: "starfruit", description: "A tropical fruit with a yellow or green skin and a star-shaped cross-section" },
    { word: "loganberry", description: "A hybrid fruit that is a cross between a raspberry and a blackberry" },
    { word: "miracle fruit", description: "A red fruit that makes sour foods taste sweet" },
    { word: "pitaya", description: "A tropical fruit with bright pink or yellow skin and white or red flesh" },
    { word: "salak", description: "A small, reddish-brown fruit with a scaly outer shell and white, sweet flesh" },
    { word: "santol", description: "A tropical fruit with a thick, yellow rind and soft, juicy flesh" },
    { word: "sapodilla", description: "A brown fruit with a rough, sandy skin and sweet, grainy flesh" },
    { word: "sugar apple", description: "A sweet fruit with a green or brown skin and creamy, custard-like flesh" },
    { word: "yangmei", description: "A small, red fruit with a sweet and sour flavor" },
    { word: "yuzu", description: "A citrus fruit with a tart flavor and aromatic peel" },
    { word: "cherimoya", description: "A sweet fruit with a green, scaly skin and creamy, white flesh" },
    { word: "sweety drop pepper", description: "A small, round pepper with a sweet and tangy flavor" },
    { word: "tindora", description: "A small, green vegetable with a crunchy texture and mild flavor" },
    { word: "veldt grape", description: "A small, purple fruit with a tart flavor" },
    { word: "ugli fruit", description: "A citrus fruit with a wrinkled, greenish-yellow skin and sweet-tart flesh" },
    { word: "yamamomo", description: "A small, red fruit with a sweet and sour flavor" },
    { word: "yumberry", description: "A small, red fruit with a sweet and sour flavor" },
    { word: "zapote", description: "A tropical fruit with a brown, rough skin and sweet, creamy flesh" },
    { word: "durian", description: "A large fruit with a spiky outer shell and a strong odor" },
    { word: "ackee", description: "A tropical fruit with red skin and yellow flesh" },
    { word: "alkekengi", description: "A red or orange fruit enclosed in a papery husk" },
    { word: "araza", description: "A small, yellow fruit with a sweet and sour flavor" },
    { word: "abiu", description: "A yellow fruit with a smooth, glossy skin and sweet, creamy flesh" },
    { word: "american persimmon", description: "An orange fruit with a sweet, honey-like flavor" },
    { word: "bignay", description: "A small, red or black fruit with a tart flavor" },
    { word: "bael fruit", description: "A green fruit with a hard shell and aromatic, orange flesh" },
    { word: "bilimbi", description: "A small, green fruit with a tart flavor" },
    { word: "calabash", description: "A gourd-like fruit with a hard, woody shell" },
    { word: "chico fruit", description: "A brown fruit with a rough, sandy skin and sweet, grainy flesh" },
    { word: "cupuacu", description: "A brown fruit with a hard shell and creamy, aromatic flesh" },
    { word: "caimito", description: "A purple fruit with a star-shaped cross-section and sweet, milky flesh" },
    { word: "chayote", description: "A green, pear-shaped fruit with a mild flavor" },
    { word: "cempedak", description: "A large fruit with a spiky outer shell and a sweet, fruity flavor" },
    { word: "dabai", description: "A small, black fruit with a sweet and sour flavor" },
    { word: "emerald plum", description: "A small, green fruit with a tart flavor" },
    { word: "elephant apple", description: "A green fruit with a hard shell and tart, crunchy flesh" },
    { word: "finger lime", description: "A small, finger-shaped citrus fruit with a tart flavor and juicy pearls" },
    { word: "grumichama", description: "A small, purple fruit with a sweet and tart flavor" },
    { word: "genip", description: "A small, green fruit with a sweet and tangy flavor" },
    { word: "hog plum", description: "A small, red or yellow fruit with a sweet and tart flavor" },
    { word: "horned melon", description: "A small, oval fruit with a spiky yellow or orange skin and green, jelly-like flesh" },
    { word: "hog apple", description: "A green fruit with a hard shell and tart, crunchy flesh" },
    { word: "ice cream bean", description: "A long, flat fruit with a sweet, cottony pulp" },
    { word: "ilama", description: "A green fruit with a hard shell and creamy, aromatic flesh" },
    { word: "jatoba", description: "A small, red fruit with a sweet and tart flavor" },
    { word: "jujube", description: "A small, red or yellow fruit with a sweet, apple-like flavor" },
    { word: "kokum", description: "A small, purple fruit with a tart flavor" },
    { word: "lucuma", description: "A yellow fruit with a sweet, custard-like flesh" },
    { word: "langsat", description: "A small, round fruit with a sweet and tangy flavor" },
    { word: "marang", description: "A large fruit with a spiky outer shell and a sweet, fruity flavor" },
    { word: "mamey sapote", description: "A large fruit with a brown, rough skin and sweet, creamy flesh" },
    { word: "mabolo", description: "A small, round fruit with a fuzzy outer shell and sweet, juicy flesh" },
    { word: "muntingia", description: "A small, red fruit with a sweet and tart flavor" },
    { word: "nance", description: "A small, yellow fruit with a sweet and tart flavor" },
    { word: "nipa palm fruit", description: "A small, round fruit with a sweet, coconut-like flavor" },
    { word: "noni", description: "A small, green fruit with a pungent odor and bitter flavor" },
    { word: "ostinato", description: "A small, red or yellow fruit with a sweet, apple-like flavor" },
    { word: "pitahaya", description: "A tropical fruit with bright pink or yellow skin and white or red flesh" },
    { word: "pulasan", description: "A small, round fruit with a red or purple skin and sweet, juicy flesh" },
    { word: "pummelo", description: "A large citrus fruit with a thick rind and sweet, juicy flesh" },
    { word: "papaw", description: "A large, green fruit with a soft, juicy flesh" },
    { word: "passionfruit", description: "A round or oval fruit with a thick, tough rind and juicy, seed-filled pulp" },
    { word: "quandong", description: "A small, red fruit with a tart flavor" },
    { word: "rata fruit", description: "A small, red fruit with a sweet and sour flavor" },
    { word: "ramontchi", description: "A small, red or yellow fruit with a tart flavor" },
    { word: "safou", description: "A green or black fruit with a thick, creamy flesh" },
    { word: "sugar palm fruit", description: "A small, round fruit with a sweet, coconut-like flavor" },
    { word: "sloes", description: "A small, dark purple fruit with a tart flavor" },
    { word: "sour cherry", description: "A small, red fruit with a tart flavor" },
    { word: "tamarillo", description: "An egg-shaped fruit with red or orange skin and tangy flesh" },
    { word: "ugni", description: "A small, red or purple fruit with a sweet and tart flavor" },
    { word: "wild peach", description: "A small, red fruit with a sweet and tart flavor" },
    { word: "west indian cherry", description: "A small, red fruit with a tart flavor" },
    { word: "white sapote", description: "A green or yellow fruit with a creamy, custard-like flesh" },
    { word: "wood apple", description: "A brown fruit with a hard shell and aromatic, orange flesh" },
    { word: "wax jambu", description: "A green fruit with a crunchy texture and mild flavor" },
    { word: "yellow mombin", description: "A small, yellow fruit with a tart flavor" }
];

let crosswordWords = [];
let crosswordDescriptions = [];

function generateCrossword() {
    // Clear previous crossword
    crosswordWords = [];
    crosswordDescriptions = [];
    
    // Shuffle the word list
    wordList.sort(() => Math.random() - 0.5);
    
    // Select the first 24 words
    crosswordWords = wordList.slice(0, 24).map(wordObj => wordObj.word);
    crosswordDescriptions = wordList.slice(0, 24).map(wordObj => wordObj.description);
    
    // Display the crossword
    displayCrossword();
}

function displayCrossword() {
    const crosswordContainer = document.getElementById("crossword-container");
    crosswordContainer.innerHTML = "";
    
    for (let i = 0; i < crosswordWords.length; i++) {
        const wordDiv = document.createElement("div");
        wordDiv.classList.add("word");
        wordDiv.textContent = crosswordWords[i];
        
        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("description");
        descriptionDiv.textContent = crosswordDescriptions[i];
        
        const wordWrapper = document.createElement("div");
        wordWrapper.classList.add("word-wrapper");
        wordWrapper.appendChild(wordDiv);
        wordWrapper.appendChild(descriptionDiv);
        
        crosswordContainer.appendChild(wordWrapper);
    }
}

// Call generateCrossword when the page loads
window.onload = generateCrossword;


