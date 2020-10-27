const setCurrentTab = (tabNumber) => {
	const tabs = document.getElementById("items-names").children;
	const items = document.getElementById("items").children;
	const currentTabIndex = Array.from(tabs).findIndex((i) =>
		i.classList.contains("active")
	);

	items[currentTabIndex].classList.remove("active");
	tabs[currentTabIndex].classList.remove("active");

	items[tabNumber - 1].classList.add("active");
	tabs[tabNumber - 1].classList.add("active");
};

document.addEventListener("DOMContentLoaded", () => {
	const emailField = document.getElementById("email");
	emailField.addEventListener("invalid", (e) => {
		e.preventDefault();
	});

	document.querySelectorAll(".collapse-icon").forEach((navCollapseButton) => {
		navCollapseButton.addEventListener("click", () => {
			const desktopHeader = document.getElementById("desktop-header");
			const mobileHeader = document.getElementById("mobile-header");
			if (navCollapseButton.classList.contains("active")) {
				mobileHeader.classList.remove("show");
				desktopHeader.classList.remove("hide");
			} else {
				mobileHeader.classList.add("show");
				desktopHeader.classList.add("hide");
			}
		});
	});
});
