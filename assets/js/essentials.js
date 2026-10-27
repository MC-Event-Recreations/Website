document.getElementById("head").innerHTML =
    "<link rel='stylesheet' href='assets/css/main.css'>"
    + "<link rel='stylesheet' href='assets/scss/main.scss'>"
    + "<link rel='icon' href='assets/images/logos/favicon.ico' type='image/x-icon'>"
	+ "<a href='index.html'> <img src='assets/images/logos/MCLER.png' id='logo' class='center'></a><br>";
document.getElementById("footer").innerHTML =
    "<a href='https://archive.mceventrecreations.net'><button class='minecraft-main-button button-red'>Archives</button></a>"
    + " <a href='https://github.com/MC-Event-Recreations' title='GitHub Organization Page'><button class='minecraft-main-button button-red'>GitHub</button></a>"
    + " <a href='https://discord.com/invite/w4uFWffMkB?utm_source=Discord%20Widget&amp;utm_medium=Connect'><button class='minecraft-main-button button-red'>Discord server</button></a>"
    + " <a href='https://bsky.app/profile/mceventrecreations.net' title='@mceventrecreations.net on Bluesky'><button class='minecraft-main-button button-red'>Bluesky</button></a>"
    + " <a href='mailto:contact@mceventrecreations.net' title='Email contact@mceventrecreations.net'><button class='minecraft-main-button button-red'>Contact</button></a><br><br>"
    + "<i line-height='1.5em'>Copyright &copy; " + new Date().getFullYear() + " MC Live Event Recreations. Some rights reserved. We are not affiliated nor endorsed by Mojang Studios nor by their partners. <a href='disclaimer.html'>See the full disclaimer.</a></i>";
