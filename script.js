const landsats = [
	{
		mission: "Landsat 1",
		img: "../static/assets/img/satellites/Landsat-1.svg",
		rocket: "Delta 900",
		launched: "July 23, 1973",
		decommissioned: " January 6, 1978",
		sensors: ["Return Beam Vidicon (RBV)", "Multi- Spectral Scanner (MSS)"],
		orbitAltitude: "917KM",
		swath: "185KM",
		temporalResolution: "18days",
		groundResolution: "80m",
		spectralBands: [
			{
				rbv: [
					"Band 1 Visible blue-green (475-575 nm)",
					"Band 2 Visible orange-red (580-680 nm)",
					"Band 3 Visible red to Near-Infrared (690-830 nm)"
				],
				mss: [
					"Band 4 Visible green (0.5 to 0.6 µm)",
					"Band 5 Visible red (0.6 to 0.7 µm)",
					"Band 6 Near-Infrared (0.7 to 0.8 µm)",
					"Band 7 Near-Infrared (0.8 to 1.1 µm)"
				]
			}
		]
	},
	{
		mission: "Landsat 2",
		img: "../static/assets/img/satellites/Landsat-2.svg",
		rocket: "Delta 2910",
		launched: "January 22, 1975",
		decommissioned: "July 27, 1983",
		sensors: ["Return Beam Vidicon (RBV)", "Multi- Spectral Scanner (MSS)"],
		orbitAltitude: "900KM",
		swath: "185KM",
		temporalResolution: "18days",
		groundResolution: "80m",
		spectralBands: [
			{
				rbv: [
					"Band 1 Visible blue-green (475-575 nm)",
					"Band 2 Visible orange-red (580-680 nm)",
					"Band 3 Visible red to Near-Infrared (690-830 nm)"
				],
				mss: [
					"Band 4 Visible green (0.5 to 0.6 µm)",
					"Band 5 Visible red (0.6 to 0.7 µm)",
					"Band 6 Near-Infrared (0.7 to 0.8 µm)",
					"Band 7 Near-Infrared (0.8 to 1.1 µm)"
				]
			}
		]
	},
	{
		mission: "Landsat 3",
		img: "../static/assets/img/satellites/Landsat-3.svg",
		rocket: "Delta 2910",
		launched: "March 5, 1978",
		decommissioned: "March 31, 1983",
		sensors: ["Return Beam Vidicon (RBV)", "Multi-Spectral Scanner (MSS)"],
		orbitAltitude: "915KM",
		swath: "185KM",
		temporalResolution: "18days",
		groundResolution: "80m",
		spectralBands: [
			{
				rbv: [
					"Band 1 Visible blue-green (475–575 nm)",
					"Band 2 Visible orange-red (580–680 nm)",
					"Band 3 Visible red to Near-Infrared (690–830 nm)"
				],
				mss: [
					"Band 4 Visible green (0.5 to 0.6 µm)",
					"Band 5 Visible red (0.6 to 0.7 µm)",
					"Band 6 Near-Infrared (0.7 to 0.8 µm)",
					"Band 7 Near-Infrared (0.8 to 1.1 µm)"
				]
			}
		]
	},
	{
		mission: "Landsat 4",
		img: "../static/assets/img/satellites/Landsat-4.svg",
		rocket: "Delta 3920",
		launched: "July 16, 1982",
		decommissioned: "June 15, 2001",
		sensors: ["Thematic Mapper (TM)", "Multi-Spectral Scanner (MSS)"],
		orbitAltitude: "705KM",
		swath: "185KM",
		temporalResolution: "16days",
		groundResolution: "30m (TM), 80m (MSS)",
		spectralBands: [
			{
				mss: [
					"Band 1 Green (0.5 to 0.6 µm)",
					"Band 2 Red (0.6 to 0.7 µm)",
					"Band 3 Near-IR (0.7 to 0.8 µm)",
					"Band 4 Near-IR (0.8 to 1.1 µm)"
				],
				tm: [
					"Band 1 Blue (0.45–0.52 µm)",
					"Band 2 Green (0.52–0.60 µm)",
					"Band 3 Red (0.63–0.69 µm)",
					"Band 4 NIR (0.76–0.90 µm)",
					"Band 5 SWIR1 (1.55–1.75 µm)",
					"Band 6 Thermal (10.4–12.5 µm)",
					"Band 7 SWIR2 (2.08–2.35 µm)"
				]
			}
		]
	},
	{
		mission: "Landsat 5",
		img: "../static/assets/img/satellites/Landsat-5.svg",
		rocket: "Delta 3920",
		launched: "March 1, 1984",
		decommissioned: "June 5, 2013",
		sensors: ["Thematic Mapper (TM)", "Multi-Spectral Scanner (MSS)"],
		orbitAltitude: "705KM",
		swath: "185KM",
		temporalResolution: "16days",
		groundResolution: "30m (TM), 120m thermal, 80m (MSS)",
		spectralBands: [
			{
				mss: [
					"Band 1 Green (0.5 to 0.6 µm)",
					"Band 2 Red (0.6 to 0.7 µm)",
					"Band 3 Near-IR (0.7 to 0.8 µm)",
					"Band 4 Near-IR (0.8 to 1.1 µm)"
				],
				tm: [
					"Band 1 Blue (0.45–0.52 µm)",
					"Band 2 Green (0.52–0.60 µm)",
					"Band 3 Red (0.63–0.69 µm)",
					"Band 4 NIR (0.76–0.90 µm)",
					"Band 5 SWIR1 (1.55–1.75 µm)",
					"Band 6 Thermal (10.4–12.5 µm)",
					"Band 7 SWIR2 (2.08–2.35 µm)"
				]
			}
		]
	},
	{
		mission: "Landsat 6",
		img: "../static/assets/img/satellites/Landsat-6.svg",
		rocket: "Titan II",
		launched: "October 5, 1993",
		decommissioned: "Launch failure",
		sensors: ["Enhanced Thematic Mapper (ETM) – Planned"],
		orbitAltitude: "705KM (planned)",
		swath: "185KM",
		temporalResolution: "16days",
		groundResolution: "15m (pan), 30m (multispectral), 120m (thermal)",
		spectralBands: [
			{
				etm: [
					"Band 1 Blue (0.45–0.52 µm)",
					"Band 2 Green (0.52–0.60 µm)",
					"Band 3 Red (0.63–0.69 µm)",
					"Band 4 NIR (0.76–0.90 µm)",
					"Band 5 SWIR1 (1.55–1.75 µm)",
					"Band 6 Thermal (10.4–12.5 µm)",
					"Band 7 SWIR2 (2.08–2.35 µm)",
					"Band 8 Panchromatic (0.52–0.90 µm)"
				]
			}
		]
	},
	{
		mission: "Landsat 7",
		img: "../static/assets/img/satellites/Landsat-7.svg",
		rocket: "Delta II 7920",
		launched: "April 15, 1999",
		decommissioned: "June 4, 2025",
		sensors: ["Enhanced Thematic Mapper Plus (ETM+)"],
		orbitAltitude: "705KM",
		swath: "185KM",
		temporalResolution: "16days",
		groundResolution: "15m (pan), 30m (multispectral), 60m (thermal)",
		spectralBands: [
			{
				"etm+": [
					"Band 1 Blue (0.45–0.52 µm)",
					"Band 2 Green (0.52–0.60 µm)",
					"Band 3 Red (0.63–0.69 µm)",
					"Band 4 NIR (0.77–0.90 µm)",
					"Band 5 SWIR1 (1.55–1.75 µm)",
					"Band 6 Thermal (10.4–12.5 µm)",
					"Band 7 SWIR2 (2.09–2.35 µm)",
					"Band 8 Panchromatic (0.52–0.90 µm)"
				]
			}
		]
	},
	{
		mission: "Landsat 8",
		img: "../static/assets/img/satellites/Landsat-8.svg",
		rocket: "Atlas V 401",
		launched: "February 11, 2013",
		decommissioned: "Operational",
		sensors: [
			"Operational Land Imager (OLI)",
			"Thermal Infrared Sensor (TIRS)"
		],
		orbitAltitude: "705KM",
		swath: "185KM",
		temporalResolution: "16days",
		groundResolution: "15m (pan), 30m (multispectral), 100m (thermal)",
		spectralBands: [
			{
				oli: [
					"Band 1 Coastal/Aerosol (0.435–0.451 µm) – 30 m",
					"Band 2 Blue (0.450–0.512 µm) – 30 m",
					"Band 3 Green (0.533–0.590 µm) – 30 m",
					"Band 4 Red (0.636–0.673 µm) – 30 m",
					"Band 5 NIR (0.851–0.879 µm) – 30 m",
					"Band 6 SWIR1 (1.566–1.651 µm) – 30 m",
					"Band 7 SWIR2 (2.107–2.294 µm) – 30 m",
					"Band 8 Panchromatic (0.503–0.676 µm) – 15 m",
					"Band 9 Cirrus (1.363–1.384 µm) – 30 m"
				],
				tirs: [
					"Band 10 Thermal Infrared 1 (10.6–11.19 µm) – 100 m",
					"Band 11 Thermal Infrared 2 (11.5–12.51 µm) – 100 m"
				]
			}
		]
	},
	{
		mission: "Landsat 9",
		img: "../static/assets/img/satellites/Landsat-9.svg",
		rocket: "Atlas V 401",
		launched: "September 27, 2021",
		decommissioned: "Operational",
		sensors: [
			"Operational Land Imager‑2 (OLI‑2)",
			"Thermal Infrared Sensor‑2 (TIRS‑2)"
		],
		orbitAltitude: "705KM",
		swath: "185KM",
		temporalResolution: "16days",
		groundResolution: "15m (pan), 30m (multispectral), 100m (thermal)",
		spectralBands: [
			{
				oli2: [
					"Band 1 Coastal/Aerosol (0.433–0.453 µm) – 30 m",
					"Band 2 Blue (0.450–0.515 µm) – 30 m",
					"Band 3 Green (0.525–0.600 µm) – 30 m",
					"Band 4 Red (0.630–0.680 µm) – 30 m",
					"Band 5 NIR (0.845–0.885 µm) – 30 m",
					"Band 6 SWIR1 (1.560–1.660 µm) – 30 m",
					"Band 7 SWIR2 (2.100–2.300 µm) – 30 m",
					"Band 8 Panchromatic (0.500–0.680 µm) – 15 m",
					"Band 9 Cirrus (1.360–1.390 µm) – 30 m"
				],
				tirs2: [
					"Band 10 Thermal Infrared 1 (10.6–11.19 µm) – 100 m",
					"Band 11 Thermal Infrared 2 (11.5–12.51 µm) – 100 m"
				]
			}
		]
	}
];

// Cursor glow effect
document.addEventListener("mousemove", (e) => {
	const x = (e.clientX / window.innerWidth) * 100;
	const y = (e.clientY / window.innerHeight) * 100;
	document.body.style.setProperty("--x", `${x}%`);
	document.body.style.setProperty("--y", `${y}%`);
});

document.addEventListener("mouseleave", () => {
	document.body.style.setProperty("--x", `50%`);
	document.body.style.setProperty("--y", `50%`);
});

// Typing animation and card update
const buttons = document.querySelectorAll(".sat-button");
const satName = document.getElementById("satName");
const underline = document.querySelector(".underline");
const satImage = document.getElementById("satImage");
const satDetails = document.getElementById("satDetails");

const clickSound = new Howl({
	src: ["./static/assets/sound/click.mp3"],
	volume: 0.3
});
const typeSound = new Howl({
	src: ["./static/assets/sound/typing.mp3"],
	volume: 0.3
});
function updateCard(index) {
	const sat = landsats[index];
	satName.textContent = sat.mission;
	typeSound.play();
	// Reset underline
	underline.style.width = "0";
	// Animate sat name with typing effect
	new Typed("#satName", {
		strings: [sat.mission],
		typeSpeed: 40,
		backSpeed: 50,
		fadeOut: true,
		loop: false,
		showCursor: false,
		onComplete: () => {
			// Animate underline after typing is done
			underline.style.width = "400px";
		}
	});
	satImage.src = sat.img;
	// Reset image scale before applying condition
	satImage.style.width = "500px";
	satImage.style.marginLeft = "0";
	satImage.style.marginRight = "0";

	// Conditionally scale only Landsat-3 and Landsat-6
	if (sat.mission === "Landsat 6") {
		satImage.style.width = "400px";
	} else if (sat.mission === "Landsat 3") {
		satImage.style.marginRight = "100px";
		satImage.style.width = "500px";
	} else if (sat.mission === "Landsat 2") {
		satImage.style.marginLeft = "100px";
	} else if (sat.mission === "Landsat 4") {
		satImage.style.marginLeft = "60px";
	} else {
		satImage.style.width = "500px";
		satImage.style.marginLeft = "0";
		satImage.style.marginRight = "0";
	}
	satDetails.innerHTML = `
					<p><strong>Rocket:</strong> ${sat.rocket}</p>
					<p><strong>Launched:</strong> ${sat.launched}</p>
					<p><strong>Decommissioned:</strong> ${sat.decommissioned || "-"}</p>
					<p><strong>Sensors:</strong> ${sat.sensors.join(", ")}</p>
					<p><strong>Orbit Altitude:</strong> ${sat.orbitAltitude}</p>
					<p><strong>Swath:</strong> ${sat.swath}</p>
					<p><strong>Temporal Resolution:</strong> ${sat.temporalResolution}</p>
					<p><strong>Ground Resolution:</strong> ${sat.groundResolution}</p>
					<p><strong>Spectral Bands:</strong></p>
					<ul>
						${Object.entries(sat.spectralBands[0])
							.map(
								([sensor, bands]) => `
									<li><strong>${sensor.toUpperCase()}:</strong>
										<ul>
											${bands.map((band) => `<li>${band}</li>`).join("")}
										</ul>
									</li>
								`
							)
							.join("")}
					</ul>
				`;
	// Animate reveal after short delay
	satDetails.classList.remove("reveal");
	satDetails.classList.add("reveal");
}

buttons.forEach((button, index) => {
	button.addEventListener("click", () => {
		clickSound.play();
		buttons.forEach((btn) => btn.classList.remove("active"));
		button.classList.add("active");
		updateCard(index);
	});
});

// Set Landsat-1 as default
updateCard(0);
