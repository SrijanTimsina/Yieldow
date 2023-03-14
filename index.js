document.querySelectorAll(".navbar").forEach((el) => {
	el.innerHTML = `<div class="empty"></div>
    <div class="logo">
    <a href="#home">
        <img src="./images/logo.png" alt="YieldoW"/>
        </a>
    </div>
    <div class="social">
        <a href="">
            <img src="./images/discord.png" alt="Discord" />
            </a>
        <a href="">
            <img src="./images/twitter.png" alt="Twitter" />
        </a>
        <a href="">
            <img
                src="./images/icons8-github-32.png"
                alt="Github"
            />
        </a>
    </div>`;
});
const chart = document.getElementById("chart");
const activeUsers = document.getElementById("active-users");
const bestTokens = document.getElementById("best-token");
const analyticsBtn = document.getElementById("analytics-btn");
const analyticsContainer = document.getElementById("analytics");

analyticsBtn.addEventListener("click", () => {
	analyticsContainer.classList.add("show");
	analyticsContainer.scrollIntoView();
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