const tableData = document.querySelectorAll(".table-data");
const dataRow = document.querySelectorAll(".table-data-row");
const mobileTable = document.querySelectorAll(".mob-scr-tbl");
const mobileData = document.querySelectorAll(".mob-scr-tbl-data");
const popupButton = document.querySelectorAll(".popup-button");
const container = document.getElementById("container");
const closePopup = document.getElementById("popup-close");
const sidebarContainer = document.getElementById(
	"side-bar-container"
);
const tableOptionsToggle = (el, parent) => {
	let parentNode = el.parentNode;
	if (parentNode.classList.contains("show")) {
		parentNode.classList.remove("show");
		return;
	}
	parent.forEach((el) => el.classList.remove("show"));
	parentNode.classList.add("show");
};

const popupToggle = () => container.classList.toggle("popup-active");

document.getElementById("hamburger").addEventListener("click", () => {
	sidebarContainer.classList.add("side-bar-show");
	sidebarContainer.classList.remove("side-bar-hide");
});
document.getElementById("close").addEventListener("click", () => {
	sidebarContainer.classList.remove("side-bar-show");
	sidebarContainer.classList.add("side-bar-hide");
});

mobileData.forEach((el) =>
	el.addEventListener("click", () => {
		tableOptionsToggle(el, mobileTable);
	})
);
dataRow.forEach((el) =>
	el.addEventListener("click", () => {
		tableOptionsToggle(el, tableData);
	})
);

closePopup.addEventListener("click", popupToggle);
popupButton.forEach((el) => {
	el.addEventListener("click", popupToggle);
});
