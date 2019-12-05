// Fetching Country Data
const fetchData = () => {
  fetch("http://localhost:3000/countries")
    .then(res => res.json())
    .then(data => {
      data.forEach(countryObj => {
        countryObjData(countryObj)
        // console.log(countryObj)
        // if (countryObj.name === "USA") {
        //   countryObjData(countryObj);
          
        // } else if (countryObj.name === "China") {
        //   countryObjData(countryObj);
         
        // } else if (countryObj.name === "India") {
        //   countryObjData(countryObj);
        // } else if (countryObj.name === "Brazil") {
        //   countryObjData(countryObj);
        // } else {
        //   countryObjData(countryObj);
        // }
        
      });
      
    });

};
fetchData();





const countryObjData = countryObj => {
  let objInfoArr = []
  
  // countryInfo[countryObj.name] = {}


  countryObj.country_resources.forEach(countryRes =>{
    
    let countryProduction = countryRes.production
    let countryResourceName = countryRes.resource.name
    
     countryRes.resource.resource_scenarios.forEach(scenario =>{
      
      let countryScenarioYield = scenario.yield
      let countryScenarioName =  scenario.scenario.name
       let countryInfo = Object.assign({}, 
        {
          name: countryObj.name,
          production: countryProduction,
          resource: countryResourceName,
          yield: countryScenarioYield,
          scenario: countryScenarioName,
        })
        
       objInfoArr.push(countryInfo)
       
        // Buttons
      
    })
    
  })

  
 

};




const mainContent = document.querySelector(".main-content");


// documentation for the chart: https://www.chartjs.org/docs/latest/charts/bar.html#stacked-bar-chart

const renderMainContent = (countryInfoArr) =>{
  console.log(countryInfoArr)
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



