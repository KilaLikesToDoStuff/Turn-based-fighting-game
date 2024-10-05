let playerHealth = 100;
let enemyHealth = 100;

const statusDiv = document.getElementById("status");
const attackButton = document.getElementById("attackButton");
const restartButton = document.getElementById("restartButton");
let player;

// Load the YouTube player
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'aMnD5Pnwtv0', // Replace with your YouTube video ID
        playerVars: {
            'autoplay': 1, // Auto play the video
            'loop': 1, // Loop the video
            'playlist': 'aMnD5Pnwtv0' // To loop, playlist must be the same video ID
        },
        events: {
            'onReady': (event) => {
                event.target.mute(); // Mute the video if you want
            }
        }
    });
}

function updateStatus() {
    statusDiv.innerHTML = `Player Health: ${playerHealth}<br>Enemy Health: ${enemyHealth}`;
    if (playerHealth <= 0) {
        statusDiv.innerHTML += "<br>You have been defeated! <br>";
        attackButton.disabled = true;
        restartButton.style.display = "inline-block";
    } else if (enemyHealth <= 0) {
        statusDiv.innerHTML += "<br>You have defeated the enemy! <br>";
        attackButton.disabled = true;
        restartButton.style.display = "inline-block";
    }
}

attackButton.addEventListener("click", () => {
    const playerDamage = Math.floor(Math.random() * 20) + 1;
    const enemyDamage = Math.floor(Math.random() * 20) + 1;

    enemyHealth -= playerDamage;
    playerHealth -= enemyDamage;

    updateStatus();
});

restartButton.addEventListener("click", () => {
    playerHealth = 100;
    enemyHealth = 100;
    attackButton.disabled = false;
    restartButton.style.display = "none";
    updateStatus();
});

updateStatus();
