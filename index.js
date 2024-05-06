const wordList = [
    { word: "apple", clue: "A fruit that is often red or green" },
    { word: "banana", clue: "A yellow fruit with a curved shape" },
    { word: "cat", clue: "A common household pet known for its independence" },
    { word: "dog", clue: "A loyal domestic animal often referred to as man's best friend" },
    { word: "elephant", clue: "A large mammal with a long trunk and tusks" },
    { word: "giraffe", clue: "A tall African mammal with a long neck" },
    { word: "keyboard", clue: "An input device used to type characters into a computer" },
    { word: "laptop", clue: "A portable computer that can be carried and used on the go" },
    { word: "mountain", clue: "A large landform that rises steeply above its surroundings" },
    { word: "ocean", clue: "A vast body of saltwater that covers most of the Earth's surface" },
    { word: "pizza", clue: "A popular Italian dish consisting of a round, flat base topped with cheese and other ingredients" },
    { word: "robot", clue: "A machine capable of carrying out a complex series of actions automatically" },
    { word: "sunset", clue: "The daily disappearance of the sun below the horizon" },
    { word: "umbrella", clue: "A device used to protect against rain or sunlight, consisting of a canopy on a folding frame" },
    { word: "volcano", clue: "A mountain or hill that erupts with molten rock, ash, and gases" },
    { word: "waterfall", clue: "A cascade of water falling from a height, often over rocks or cliffs" },
    { word: "xylophone", clue: "A musical instrument consisting of a series of wooden bars of different lengths that are struck by mallets" },
    { word: "yacht", clue: "A recreational boat used for sailing or cruising, often luxurious in design" },
    { word: "zebra", clue: "An African mammal with black and white stripes" },
    { word: "sunflower", clue: "A tall plant with large yellow flowers that turn to face the sun" },
    { word: "guitar", clue: "A stringed musical instrument played by plucking or strumming its strings" },
    { word: "bicycle", clue: "A vehicle with two wheels that is powered by pedals and steered by handlebars" },
    { word: "telephone", clue: "A device used for transmitting sound over long distances, typically by converting electrical signals into audio signals" },
    { word: "telescope", clue: "An optical instrument used to view distant objects, such as stars and planets" }
];

// Function to generate a random crossword puzzle
function generateCrossword() {
    const puzzle = [];
    const gridSize = 10; // Adjust grid size as needed

    // Create an empty grid
    for (let i = 0; i < gridSize; i++) {
        puzzle.push(Array(gridSize).fill(""));
    }

    // Place words horizontally
    wordList.forEach(wordObj => {
        const { word } = wordObj;
        const row = Math.floor(Math.random() * gridSize);
        const col = Math.floor(Math.random() * (gridSize - word.length));
        for (let i = 0; i < word.length; i++) {
            puzzle[row][col + i] = word[i];
        }
    });

    // Place words vertically
    wordList.forEach(wordObj => {
        const { word } = wordObj;
        const row = Math.floor(Math.random() * (gridSize - word.length));
        const col = Math.floor(Math.random() * gridSize);
        for (let i = 0; i < word.length; i++) {
            puzzle[row + i][col] = word[i];
        }
    });

    // Print puzzle to console
    puzzle.forEach(row => {
        console.log(row.join(" "));
    });
}

// Generate a random crossword puzzle
generateCrossword();
