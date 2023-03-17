// const tableData = document.querySelectorAll(".table-data");
// const mobileTable = document.querySelectorAll(".mob-scr-tbl");
const dataRow = document.querySelectorAll(".table-data-row");
const mobileData = document.querySelectorAll(".mob-scr-tbl-data");
const popupButton = document.querySelectorAll(".popup-button");
const container = document.getElementById("container");
const closePopup = document.getElementById("popup-close");
const sidebarContainer = document.getElementById(
	"side-bar-container"
);
const btnAdd = document.getElementById("btn-add");
const btnRemove = document.getElementById("btn-remove");
const btnStake = document.getElementById("btn-stake");
const btnUnstake = document.getElementById("btn-unstake");
const basicData = document.getElementById("basic-data");
const addLiquidity = document.getElementById("add-liquidity");
const removeLiquidity = document.getElementById("remove-liquidity");
const stakeLiquidity = document.getElementById("stake-liquidity");
const unstakeLiquidity = document.getElementById("unstake-liquidity");

const backBasicBtn = document.querySelectorAll(".back-basic");
const popupContainers = document.querySelectorAll(
	".popup-content-container"
);
// const tableOptionsToggle = (el, parent) => {
// 	let parentNode = el.parentNode;
// 	if (parentNode.classList.contains("show")) {
// 		parentNode.classList.remove("show");
// 		return;
// 	}
// 	parent.forEach((el) => el.classList.remove("show"));
// 	parentNode.classList.add("show");
// };

const popupToggle = () => container.classList.toggle("popup-active");

document.getElementById("hamburger").addEventListener("click", () => {
	sidebarContainer.classList.add("side-bar-show");
	sidebarContainer.classList.remove("side-bar-hide");
});
document.getElementById("close").addEventListener("click", () => {
	sidebarContainer.classList.remove("side-bar-show");
	sidebarContainer.classList.add("side-bar-hide");
});

// mobileData.forEach((el) =>
// 	el.addEventListener("click", () => {
// 		tableOptionsToggle(el, mobileTable);
// 	})
// );
// dataRow.forEach((el) =>
// 	el.addEventListener("click", () => {
// 		tableOptionsToggle(el, tableData);
// 	})
// );
backBasicBtn.forEach((el) =>
	el.addEventListener("click", () => {
		popupContainers.forEach((el) => el.classList.remove("active"));
		basicData.classList.add("active");
	})
);
btnAdd.addEventListener("click", () => {
	basicData.classList.remove("active");
	addLiquidity.classList.add("active");
});
btnRemove.addEventListener("click", () => {
	basicData.classList.remove("active");
	removeLiquidity.classList.add("active");
});
btnStake.addEventListener("click", () => {
	basicData.classList.remove("active");
	stakeLiquidity.classList.add("active");
});
btnUnstake.addEventListener("click", () => {
	basicData.classList.remove("active");
	unstakeLiquidity.classList.add("active");
});

closePopup.addEventListener("click", popupToggle);
popupButton.forEach((el) => {
	el.addEventListener("click", popupToggle);
});
mobileData.forEach((el) => el.addEventListener("click", popupToggle));
dataRow.forEach((el) => el.addEventListener("click", popupToggle));
