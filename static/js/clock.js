const hours_hand = document.querySelector(".hours-hand");
const minutes_hand = document.querySelector(".minutes-hand");
const seconds_hand = document.querySelector(".seconds-hand");

function set_date() {
	const now = new Date();

	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();

	const hours_degrees = ((hours / 12) * 360) + ((minutes / 60) * 30 + 90);
	const minutes_degrees = ((minutes / 60) * 360) + ((minutes / 60) * 30) + 90;
	const seconds_degrees = (seconds / 60) * 360 + 90;

	hours_hand.style.transform = `rotate(${hours_degrees}deg)`;
	minutes_hand.style.transform = `rotate(${minutes_degrees}deg)`;
	seconds_hand.style.transform = `rotate(${seconds_degrees}deg)`;

	if (hours_degrees == 444 || minutes_degrees == 444 || seconds_degrees == 444) {
		seconds_hand.style.transition = "all 0s";
	}
}

setInterval(set_date, 1000);
set_date();

