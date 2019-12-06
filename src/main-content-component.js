// Fetching Country Data
const fetchData = () => {
	fetch("http://localhost:3000/countries")
		.then(res => res.json())
		.then(data => {
			data.forEach(countryObj => {
				countryObjData(countryObj);
			});
		});
};
fetchData();

const countryObjData = countryObj => {
	let objInfoArr = [];
	let scenarioArr = [];
	let yieldArr = [];
	objInfoArr.name = countryObj.name;

	countryObj.country_resources.forEach(countryRes => {
		let countryProduction = countryRes.production;
		let countryResourceName = countryRes.resource.name;

		countryRes.resource.resource_scenarios.forEach(scenario => {
			objInfoArr[countryResourceName] = Object.assign(
				{},
				{
					production: countryProduction
				}
			);

			scenarioArr.push(scenario.scenario);
			yieldArr.push(scenario.yield * (countryProduction / 100));
		});
	});

	console.log(scenarioArr);
	renderToggleBtns(objInfoArr, scenarioArr, yieldArr);
};

const mainContent = document.querySelector(".main-content");

const renderToggleBtns = (objArr, scenarioArr, yieldArr) => {
	console.log(scenarioArr.name);
	const countryBtn = document.createElement("button");

	countryBtn.className = `${objArr.name}-btn`;
	countryBtn.innerHTML = `${objArr.name}`;
	countryBtn.id = objArr.name;

	mainContent.prepend(countryBtn);
	renderBarGraph(countryBtn, objArr, scenarioArr, yieldArr);
};
const renderBarGraph = (button, objArr, scenarioArr, yieldArr) => {
  
	button.addEventListener("click", e => {
    console.log(objArr)
		const canvas = document.getElementById("myChart");
		const ctx = canvas.getContext("2d");

		// stackedBar.clearRect(0, 0, canvas.width, canvas.height)
		var stackedBar = new Chart(ctx, {
			type: "bar",
			data: {
				labels: [
					"Current",
					scenarioArr[0].name,
					scenarioArr[1].name,
					scenarioArr[2].name,
					scenarioArr[3].name
				],
				datasets: [
					{
						type: "bar",
						label: "Wheat",
						backgroundColor: "Tan",
						hoverBackgroundColor: "Tan",
						// hoverBorderWidth: 3,
						// hoverBorderColor: "Black",
						data: [yieldArr[0], yieldArr[1], yieldArr[2], yieldArr[3]]
					},
					{
						type: "bar",
						label: "Maize",
						backgroundColor: "Yellow",
						hoverBackgroundColor: "Yellow",
						data: [yieldArr[4], yieldArr[5], yieldArr[6], yieldArr[7]]
					},
					{
						type: "bar",
						label: "Soybeans",
						backgroundColor: "Green",
						hoverBackgroundColor: "Green",
						data: [yieldArr[8], yieldArr[9], yieldArr[10], yieldArr[11]]
          },
        //   {type: "bar",
        //   label: "amber",
        //   backgroundColor: "Green",
        //   hoverBackgroundColor: "Green",
        //   data: [yieldArr[12], yieldArr[13], yieldArr[14], yieldArr[15]]
        // }
				]
			},
			options: {
        responsive: true,
				title: {
					display: true,
					text: `${objArr.name}`
				},
				scales: {
					xAxes: [
						{
							stacked: true
						}
					],
					yAxes: [
						{
							stacked: true
						}
					]
				}
			}
		});
	});
};

const renderMainContent = () => {};

// documentation for the chart: https://www.chartjs.org/docs/latest/charts/bar.html#stacked-bar-chart

// class RenderToggleBtns {
//   constructor(obj){
//     this.buttonTag = document.createElement('button')
//     this.buttonTag.id = obj.id
//     this.buttonTag.innerText = obj.name

// }

// usaBtn = new RenderToggleBtns ({
//   id: 'usa',
//   name: 'USA'
// })
