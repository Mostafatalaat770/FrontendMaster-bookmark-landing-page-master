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
