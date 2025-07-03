const missions = [
	{
		name: "Landsat 1",
		start: "1972-07-23",
		end: "1978-01-06",
		color: "#00ffff"
	},
	{
		name: "Landsat 2",
		start: "1975-01-22",
		end: "1983-07-25",
		color: "#00ffff"
	},
	{
		name: "Landsat 3",
		start: "1978-03-05",
		end: "1983-09-07",
		color: "#00ffff"
	},
	{
		name: "Landsat 4",
		start: "1982-07-16",
		end: "1993-12-14",
		color: "#00ffff"
	},
	{
		name: "Landsat 5",
		start: "1984-03-01",
		end: "2013-01-06",
		color: "#00ffff"
	},
	{
		name: "Landsat 6",
		start: "1993-10-05",
		end: "1993-10-05",
		color: "#00ffff"
	},
	{
		name: "Landsat 7",
		start: "1999-04-15",
		end: "2025-04-01",
		color: "#00ffff"
	},
	{
		name: "Landsat 8",
		start: "2013-02-11",
		end: "2025-04-01",
		color: "#00ffff"
	},
	{
		name: "Landsat 9",
		start: "2021-09-27",
		end: "2025-04-01",
		color: "#00ffff"
	},
	{
		name: "Landsat Next",
		start: "2030-01-01",
		end: "2035-01-01",
		color: "#00ffff"
	}
];

const startYear = 1970;
const endYear = 2036;
const totalYears = endYear - startYear;

function createYearAxis() {
	const yearAxis = document.getElementById("yearAxis");
	const container = document.querySelector(".timeline-container");
	const containerWidth = container.offsetWidth - 80; // Account for padding
	const timelineWidth = containerWidth - 135; // Account for mission labels

	for (let year = startYear; year <= endYear; year += 5) {
		const position = ((year - startYear) / totalYears) * timelineWidth;

		const tick = document.createElement("div");
		tick.className = "year-tick";
		tick.style.left = 135 + position + "px";
		yearAxis.appendChild(tick);

		const label = document.createElement("div");
		label.className = "year-label";
		label.textContent = year;
		label.style.left = 135 + position + "px";
		yearAxis.appendChild(label);
	}
}

function createMissionTimeline() {
	const missionsContainer = document.getElementById("missions");
	const container = document.querySelector(".timeline-container");
	const containerWidth = container.offsetWidth - 80;
	const timelineWidth = containerWidth - 135;

	missions.forEach((mission) => {
		const startDate = new Date(mission.start);
		const endDate = new Date(mission.end);
		const startYear = startDate.getFullYear() + startDate.getMonth() / 12;
		const endYear = endDate.getFullYear() + endDate.getMonth() / 12;

		const startPos = ((startYear - 1970) / totalYears) * timelineWidth;
		const endPos = ((endYear - 1970) / totalYears) * timelineWidth;
		const width = Math.max(endPos - startPos, 3); // Minimum 3px width

		const row = document.createElement("div");
		row.className = "mission-row";

		const label = document.createElement("div");
		label.className = "mission-label";
		label.textContent = mission.name;

		const timeline = document.createElement("div");
		timeline.className = "mission-timeline";

		const bar = document.createElement("div");
		bar.className = "mission-bar";
		bar.style.left = startPos + "px";
		bar.style.width = width + "px";
		bar.style.backgroundColor = mission.color;

		// Add duration text if bar is wide enough
		if (width > 60) {
			const duration = endDate.getFullYear() - startDate.getFullYear();
			if (mission.name === "Landsat 6") {
				bar.textContent = "FAILED";
			} else if (mission.name === "Landsat Next") {
				bar.textContent = "UPCOMING";
			} else {
				bar.textContent = duration + " yrs";
			}
		}

		// Add hover tooltip
		bar.addEventListener("mouseenter", (e) => {
			const tooltip = document.getElementById("tooltip");
			const duration = endDate.getFullYear() - startDate.getFullYear();
			const askSound = new Howl({
				src: ["./static/assets/sound/ask.mp3"],
				volume: 0.3
			});
			askSound.play();
			if (mission.name === "Landsat 6") {
				tooltip.innerHTML = `${
					mission.name
				}<br>Launch failed on ${startDate.toLocaleDateString()}`;
			} else if (mission.name === "Landsat Next") {
				tooltip.innerHTML = `${
					mission.name
				}<br>Launching on ${startDate.toLocaleDateString()}`;
			} else {
				tooltip.innerHTML = `${
					mission.name
				}<br>Active: ${startDate.getFullYear()} - ${endDate.getFullYear()}<br>Duration: ${duration} years`;
			}

			tooltip.classList.add("visible");
		});

		bar.addEventListener("mousemove", (e) => {
			const tooltip = document.getElementById("tooltip");
			tooltip.style.left = e.pageX + 10 + "px";
			tooltip.style.top = e.pageY - 40 + "px";
		});

		bar.addEventListener("mouseleave", () => {
			const tooltip = document.getElementById("tooltip");
			tooltip.classList.remove("visible");
		});

		timeline.appendChild(bar);
		row.appendChild(label);
		row.appendChild(timeline);
		missionsContainer.appendChild(row);
	});
}

// Initialize the timeline
window.addEventListener("load", () => {
	createYearAxis();
	createMissionTimeline();
	createLegend();
});

// Handle window resize
window.addEventListener("resize", () => {
	document.getElementById("yearAxis").innerHTML = "";
	document.getElementById("missions").innerHTML = "";
	createYearAxis();
	createMissionTimeline();
});
