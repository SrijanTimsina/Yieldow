const sidebarContainer = document.getElementById(
	"side-bar-container"
);
document.getElementById("hamburger").addEventListener("click", () => {
	sidebarContainer.classList.add("side-bar-show");
	sidebarContainer.classList.remove("side-bar-hide");
});
document.getElementById("close").addEventListener("click", () => {
	sidebarContainer.classList.remove("side-bar-show");
	sidebarContainer.classList.add("side-bar-hide");
});
