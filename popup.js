document.addEventListener('DOMContentLoaded', function () {
    var pickupLineElement = document.getElementById('pickup-line');
    var copyIcon = document.getElementById('copy-icon');
    var rotateIcon = document.getElementById('rotate-icon');
    var actionButton = document.getElementById('action-btn');

    // Define your pickup lines here
    var pickupLines = [
        "Are you a magician? Because whenever I look at you, everyone else disappears. ✨",
        "Do you have a map? I keep getting lost in your eyes. 🗺️",
        "Do you have a Band-Aid? Because I just scraped my knee falling for you. 🩹",
        "Is your name Google? Because you have everything I've been searching for. 🔍",
        "Excuse me, but I think the stars tonight are outshone by your smile. 🌟",
        "Do you believe in love at first sight, or should I walk by again? 👀",
        "If you were a vegetable, you'd be a cute-cumber! 🥒",
        "Are you a Wi-Fi signal? Because I'm feeling a connection. 📶",
        "Do you have a sunburn, or are you always this hot? ☀️",
        "Are you a camera? Every time I look at you, I smile. 📷",
        "If beauty were time, you'd be an eternity. ⌛",
        "Are you a campfire? Because you're hot and I want s'more. 🔥",
        "Do you have a pencil? Because I want to erase your past and write our future. ✏️",
        "Are you a parking ticket? Because you've got 'Fine' written all over you. 🅿️",
        "Excuse me, but I think you dropped something: MY JAW! 😲",
        "If you were words on a page, you'd be fine print. 📜",
        "Do you have a sun map? I keep getting lost in your radiance. 🌞",
        "Are you a bank loan? Because you have my interest. 💰",
        "Do you have a name, or can I call you mine? 📞",
        "Excuse me, but I think the stars are jealous tonight—your smile outshines them all. ✨",
        "Do you like Star Wars? Because Yoda one for me! 🌌",
        "Are you a time traveler? Because every moment with you feels timeless. ⏳",
        "If you were words on a page, you'd be what they call FINE print. 📄",
        "Excuse me, but I think the fire department needs to know you're causing a five-alarm blaze here. 🔥🚒",
        "Are you a magnet? Because you've attracted my attention. 🔍",
        "Do you have a name, or can I call you mine, officially? 📇",
        "Excuse me, but I think you owe me a drink. When I looked at you, I dropped mine. 🍹",
        "Are you a parking ticket? Because you've got 'Fine' written all over you, literally. 🅿️",
        "If you were a cat, you'd purr-fectly fit into my arms. 🐱",
        "Are you made of copper and tellurium? Because you're Cu-Te. 💎",
        "Excuse me, but I must be a snowflake because I've fallen for you. ❄️",
        "Do you have a sunroof? Because my stars need to see yours, always. 🌌",
        "Are you an alien? Because you just abducted my heart. 👽",
        "Excuse me, but I think you owe me a drink. When I looked at you, I dropped mine, again. 🍸",
        "Do you have a sun map? I keep getting lost in your warmth. ☀️",
        "Excuse me, but do you have a name, or can I call you mine—forever and always? 📞",
        "If you were words on a page, you'd be the novel I'd read over and over. 📖",
        "Are you a time traveler? Because every moment with you feels like an eternity in paradise. 🌴",
        "Are you a bank loan? Because you have my full attention and interest. 💼",
        "Do you have a sunburn, or are you always this hot? Either way, I'm feeling the heat. 🔥",
        "Excuse me, but I think the stars tonight are outshone by your beauty. ✨",
        "Are you a keyboard? Because you're just my type. ⌨️",
        "Do you have a name, or can I call you mine, officially and exclusively? 📇",
        "If you were a snowflake, you'd be one-of-a-kind. ❄️",
        "Are you a scientist? Because you've got the formula for my heart. 🧪",
        "Excuse me, but I think you owe me a map. I keep getting lost in your thoughts. 🗺️",
        "If beauty were a crime, you'd be serving a life sentence. ⚖️",
        "Are you a puzzle? Because I can't seem to piece together my day without you. 🧩",
        "Do you have a sunburn, or are you always this radiant? ☀️",
        "Is your name Google? Because you've got everything I've been searching for, and more. 🔍",
        "Excuse me, but I think the stars tonight are trying to imitate your sparkle. ✨",
        "Are you a magician? Because your smile just made everyone else disappear. 😊",
        "If you were a fruit, you'd be a fineapple. 🍍",
        "Do you have a Band-Aid? Because you've mended my broken heart. 🩹",
        "Are you a photographer? Every moment with you feels like a picture-perfect memory. 📸",
        "Excuse me, but I think you dropped something: MY JAW, again! 😲",
        "If you were a star, you'd be the North Star—guiding me through the darkness. ⭐",
        "Do you have a map? I keep getting lost in the enchanting maze of your smile. 🗺️",
        "If you were a book, you'd be a bestseller in the story of my life. 📖",
        "Are you a time traveler? Because I can't imagine my future without you. ⌛",
        "Excuse me, but I think the fire department needs to know you're causing a five-alarm blaze here. 🔥🚒",
        "Are you a bakery? Because you've got all the buns. 🍞",
        "Do you have a sunroof? Because my stars need to witness your brilliance, always. 🌌",
        "If you were a cat, you'd purr-fectly steal my heart. 🐾",
        "Are you a guitar? Because every time I see you, you strike a chord in my heart. 🎸",
        "Do you have a name or can I call you mine, officially and eternally? 📞",
        "Excuse me, but I must be a mathematician because you're the sum of all my desires. ➕➖➗✖️",
        "If you were a movie, you'd be a blockbuster romance. 🎬",
        "Are you a magician? Because you've just cast a spell on my heart. ✨",
        "Do you have a sunburn, or are you always this hot? 🔥",
        "If you were a painting, you'd be a masterpiece in the gallery of my life. 🎨",
        "Excuse me, but I think the stars tonight are envious of your glow. ✨",
        "Are you an astronaut? Because you've taken my heart to another orbit. 🚀",
        "Do you have a name, or can I call you mine, officially and exclusively? 📇",
        "If you were a constellation, you'd be my guiding star. ⭐",
        "Excuse me, but I think the stars tonight are outshone by your charm. ✨",
        "Are you a bank loan? Because you've got my interest and I'm investing in you. 💼",
        "Do you have a sunburn, or are you always this hot? ☀️",
        "If you were a dessert, you'd be the sweetest part of my day. 🍨",
        "Are you a photographer? Because every time I see you, I smile. 📸",
        "Excuse me, but I think you owe me a drink. When I looked at you, I dropped mine, again. 🍸",
        "If you were a mountain, you'd be the summit of my dreams. ⛰️",
        "Do you have a map? I keep getting lost in the wonder of your presence. 🗺️",
        "Are you a treasure chest? Because you've got the key to my heart. 🗝️",
        "Excuse me, but I think you dropped something: MY JAW, for the third time! 😲",
        "If you were a flower, you'd be the rarest bloom in the garden of my affection. 🌸",
        "Do you have a sunburn, or are you just this hot naturally? 🔥",
        "Are you a chef? Because you've just spiced up my day. 🌶️",
        "Excuse me, but I think the stars tonight are outshone by your charisma. ✨",
        "If you were a playlist, you'd be the melody of my heart. 🎵",
        "Do you have a name, or can I call you mine—forever and always? 📞"
    ];

    // Display a random pickup line
    function displayRandomPickupLine() {
        var randomIndex = Math.floor(Math.random() * pickupLines.length);
        pickupLineElement.textContent = pickupLines[randomIndex];
    }

    // Copy the displayed pickup line to the clipboard
    function copyToClipboard() {
        var textToCopy = pickupLineElement.textContent;
        navigator.clipboard.writeText(textToCopy).then(function () {
            console.log('Text successfully copied to clipboard');
            // Change the icon color to green when text is copied
            copyIcon.style.color = 'blue';
            // Reset the icon color to white after 5 seconds
            setTimeout(function () {
                copyIcon.style.color = 'white';
            }, 3000); // 5000 milliseconds (5 seconds)
        }).catch(function (err) {
            console.error('Unable to copy text to clipboard', err);
        });
    }

    // Initialize the extension
    displayRandomPickupLine();

    // Add event listener for the action button click
    actionButton.addEventListener('click', function (event) {
        // Check which icon was clicked and perform the corresponding action
        if (event.target === copyIcon) {
            copyToClipboard();
        } else if (event.target === rotateIcon) {
            displayRandomPickupLine();
        }
    });
});
