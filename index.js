const chart = document.getElementById("chart");
const activeUsers = document.getElementById("active-users");
const bestTokens = document.getElementById("best-token");
const analyticsBtn = document.getElementById("analytics-btn");
const analyticsContainer = document.getElementById("analytics");
const sitemapHome = document.getElementById("sitemap-home-btn");
const sitemapAnalytics = document.getElementById(
	"sitemap-analytics-btn"
);
const navbarHome = document.querySelectorAll(".navbar-home-btn");

function scrollToSmoothly(pos, time) {
	var currentPos = window.pageYOffset;
	var start = null;
	if (time == null) time = 500;
	(pos = +pos), (time = +time);
	window.requestAnimationFrame(function step(currentTime) {
		start = !start ? currentTime : start;
		var progress = currentTime - start;
		if (currentPos < pos) {
			window.scrollTo(
				0,
				((pos - currentPos) * progress) / time + currentPos
			);
		} else {
			window.scrollTo(
				0,
				currentPos - ((currentPos - pos) * progress) / time
			);
		}
		if (progress < time) {
			window.requestAnimationFrame(step);
		} else {
			window.scrollTo(0, pos);
		}
	});
}
analyticsBtn.addEventListener("click", () => {
	analyticsContainer.classList.add("show");
	var clientHeight = document.getElementById("home").clientHeight;
	scrollToSmoothly(clientHeight, 600);
});
navbarHome.forEach((el) =>
	el.addEventListener("click", () => {
		scrollToSmoothly(0, 600);
	})
);
sitemapHome.addEventListener("click", () => {
	scrollToSmoothly(0, 600);
});
sitemapAnalytics.addEventListener("click", () => {
	var clientHeight = document.getElementById("home").clientHeight;
	scrollToSmoothly(clientHeight, 600);
});

const barArray = [
	20, 25, 50, 100, 20, 25, 50, 100, 20, 25, 50, 100, 20, 25, 50, 100,
	20, 25, 50, 100,
];

const barCharts = barArray.map((el, index) => {
	let div = document.createElement("section");
	div.innerHTML = `
    <p>${index + 1}</p>
    <div class="bar" style="height: ${el}%"></div>
`;
	return div;
});
chart.append(...barCharts);

const activeUsersArr = [
	["0xFa325", 8],
	["0xFa325", 8],
	["0xFa325", 8],
];
const bestTokensArr = [
	["0xFa325", 8],
	["0xFa325", 8],
	["0xFa325", 8],
];

const active = activeUsersArr.map((el) => {
	let div = document.createElement("div");
	div.innerHTML = `
    <div class="tokens flex">
    <p>${el[0]}</p>
    <p>${el[1]}</p>
</div>
`;
	return div;
});
const best = bestTokensArr.map((el) => {
	let div = document.createElement("div");
	div.innerHTML = `
    <div class="tokens flex">
    <p>${el[0]}</p>
    <p>${el[1]}</p>
</div>
`;
	return div;
});

bestTokens.append(...best);
activeUsers.append(...active);
