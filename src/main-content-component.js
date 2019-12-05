// Fetching Country Data
const fetchData = () => {
  fetch("http://localhost:3000/countries")
    .then(res => res.json())
    .then(data => {
      data.forEach(countryObj => {
        if (countryObj.name === "USA") {
          usaObjData(countryObj);
        } else if (countryObj.name === "China") {
          chinaObjData(countryObj);
        } else if (countryObj.name === "India") {
          indiaObjData(countryObj);
        } else if (countryObj.name === "Brazil") {
          brazilObjData(countryObj);
        } else {
          franceObjData(countryObj);
        }
      });
    });
};
fetchData();




let usaInfoArr = []
const usaObjData = usaObj => {
  let usaName = usaObj.name
  
  usaObj.country_resources.forEach(countryRes =>{
    
    let usaProduction = countryRes.production
    let usaResourceName = countryRes.resource.name
    
    countryRes.resource.resource_scenarios.forEach(scenario =>{

      let usaScenarioYield = scenario.yield
      let usaScenarioName =  scenario.scenario.name
      let usaInfo = Object.assign({}, 
        {
          name: usaName,
          production: usaProduction,
          resource: usaResourceName,
          yield: usaScenarioYield,
          scenario: usaScenarioName,
        })
      usaInfoArr.push(usaInfo)
    })
  })
};

let chinaInfoArr = []

const chinaObjData = chinaObj  => {
  let chinaName = chinaObj.name

  chinaObj.country_resources.forEach(countryRes => {

    let chinaProduction = countryRes.production
    let chinaResourceName = countryRes.resource.name

    countryRes.resource.resource_scenarios.forEach(scenario => {

      let chinaScenarioYield = scenario.yield
      let chinaScenarioName = scenario.scenario.name
      let chinaInfo = Object.assign({},
        {
          name: chinaName,
          production: chinaProduction,
          resource: chinaResourceName,
          yield: chinaScenarioYield,
          scenario: chinaScenarioName,
        })
      chinaInfoArr.push(chinaInfo)
    })
  })
};

let indiaInfoArr = []
const indiaObjData = indiaObj => {
  let indiaName = indiaObj.name

  indiaObj.country_resources.forEach(countryRes => {

    let indiaProduction = countryRes.production
    let indiaResourceName = countryRes.resource.name

    countryRes.resource.resource_scenarios.forEach(scenario => {

      let indiaScenarioYield = scenario.yield
      let indiaScenarioName = scenario.scenario.name
      let indiaInfo = Object.assign({},
        {
          name: indiaName,
          production: indiaProduction,
          resource: indiaResourceName,
          yield: indiaScenarioYield,
          scenario: indiaScenarioName,
        })
      indiaInfoArr.push(indiaInfo)
    })
  })

};

let brazilInfoArr = []
const brazilObjData = brazilObj => {
  let brazilName = brazilObj.name

  brazilObj.country_resources.forEach(countryRes => {

    let brazilProduction = countryRes.production
    let brazilResourceName = countryRes.resource.name

    countryRes.resource.resource_scenarios.forEach(scenario => {

      let brazilScenarioYield = scenario.yield
      let brazilScenarioName = scenario.scenario.name
      let brazilInfo = Object.assign({},
        {
          name:brazilName,
          production: brazilProduction,
          resource: brazilResourceName,
          yield: brazilScenarioYield,
          scenario: brazilScenarioName,
        })
      brazilInfoArr.push(brazilInfo)
    })
  })
  
};

let franceInfoArr = []
const franceObjData = franceObj => {
  let franceName = franceObj.name
  franceObj.country_resources.forEach(countryRes => {

    let franceProduction = countryRes.production
    let franceResourceName = countryRes.resource.name

    countryRes.resource.resource_scenarios.forEach(scenario => {

      let franceScenarioYield = scenario.yield
      let franceScenarioName = scenario.scenario.name
      let franceInfo = Object.assign({},
        {
          name: franceName,
          production: franceProduction,
          resource: franceResourceName,
          yield: franceScenarioYield,
          scenario: franceScenarioName,
        })
      franceInfoArr.push(franceInfo)
    })
  })
  debugger
};




const mainContent = document.querySelector(".main-content");


// documentation for the chart: https://www.chartjs.org/docs/latest/charts/bar.html#stacked-bar-chart

const renderMainContent = () =>{

  var ctx = document.getElementById('myChart').getContext('2d');
  
  var stackedBar = new Chart(ctx, {
    
      type: 'bar',
      data: {
        labels: [ "Current", "Scenario1", "Scenario2", "Scenario3", "Scenario4"],
        datasets: [{
          type: 'bar',
          label: 'Wheat',
          backgroundColor: "Tan",
          hoverBackgroundColor: "Tan",
          // hoverBorderWidth: 3,
          // hoverBorderColor: "Black",
          data: [47, 45, 43, 40, 35],
        }, {
          type: 'bar',
          label: 'Maize',
          backgroundColor: "Yellow",
          hoverBackgroundColor: "Yellow",
          data: [47, 45, 43, 40, 35]
        }, {
          type: 'bar',
          label: 'Soybeans',
          backgroundColor: "Green",
          hoverBackgroundColor: "Green",
          data: [47, 45, 43, 40, 35]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'USA'
        },
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
    });

}
//     type: 'bar',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//           label: '# of Votes',
//           data: [12, 19, 3, 5, 2, 3],
//           backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 206, 86, 0.2)',
//               'rgba(75, 192, 192, 0.2)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)'
//           ],
//           borderWidth: 1
//       }]
//     },
//     options: {
//       responsive: false,
//       scales: {
//         xAxes: [{
//           stacked: true
//         }],
//         yAxes: [{
//           ticks: {
//             beginAtZero: true,
//             stacked: true
//           }
//         }]
//       }
//     },
//   });
//  console.log('myChart: ', ctx)



