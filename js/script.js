

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1200},"pages":[{"id":"page-page-1","displayName":"Page 1","link":{"linkType":"LinkTypePage","href":"#!page-page-1"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false}]}
// Get the player and enemy elements
let player = document.getElementById("player");
let enemy = document.getElementById("enemy");
// Set the initial position of the enemy
let enemyPosition = 0;
// Move the enemy down the screen every 10 milliseconds
let enemyInterval = setInterval(() => {
	enemyPosition += 10;
	enemy.style.top = `${enemyPosition}px`;
	// If the enemy reaches the bottom of the screen, reset its position
	if (enemyPosition >= 350) {
		enemyPosition = 0;
		enemy.style.right = `${enemyPosition}px`;
	}
}, 10);
// Move the player left and right when the user presses the arrow keys
document.addEventListener("keydown", event => {
	if (event.key === "ArrowLeft") {
		let playerPosition = parseInt(player.style.left);
		playerPosition -= 10;
		player.style.left = `${playerPosition}px`;
	} else if (event.key === "ArrowRight") {
		let playerPosition = parseInt(player.style.left);
		playerPosition += 10;
		player.style.left = `${playerPosition}px`;
	}
});
// Check for collisions between the player and enemy every 10 milliseconds
let collisionInterval = setInterval(() => {
	let playerRect = player.getBoundingClientRect();
	let enemyRect = enemy.getBoundingClientRect();
	if (playerRect.right >= enemyRect.left && playerRect.left <= enemyRect.right && playerRect.bottom >= enemyRect.top && playerRect.top