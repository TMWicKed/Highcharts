// app.js
// document.addEventListener('DOMContentLoaded', function () {
//     Highcharts.chart('container', {
//         chart: {
//             type: 'areaspline'
//         },
//         title: {
//             text: 'Fruit Consumption'
//         },
//         yAxis: {
//             title: {
//                 text: 'Fruits eaten'
//             }
//         },
//         xAxis: {
//             categories: ['Apples', 'Bananas', 'Oranges']
//         },
//         series: [{  
//             name: 'Jane',
//             data: [1, 0, 4, 25, 78, 56, 34, 23, 12, 11, 9, 7, 5, 4, 3, 2, 1]
//         }, {
//             name: 'John',
//             data: [5, 7, 3, 15, 48, 36, 24, 22, 18, 14, 10, 8, 6, 4, 3, 2, 1]
//         }, {
//            name: 'Joe',
//            data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
//        }, {
//            name: 'Jill',
//            data: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5]
//        }, {
//            name: 'Jack',
//            data: [4, 1, 4, 2, 8, 5, 7, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3]
//        }]
//     });
// });

const { callout } = require("highcharts");
const { useCallback } = require("react");

// ----------------------------------------------------------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function () {
//     Highcharts.chart('container', {
//         chart: {
//             type: 'areaspline'
//         },
//         credits: {
//             // enabled: false
//             text: 'My Custom Credit',
//             href: 'https://www.google.com',
//             position: {
//                 align: 'left',
//                 x: 10
//             },
//             style: {
//                 fontSize: '16px',
//                 color: '#FF0000'
//             }
//         },
//         title: {
//             text: 'Fruit Consumption'
//         },
//         yAxis: {
//             title: {
//                 text: 'Fruits eaten'
//             }
//         },
//         xAxis: {
//             categories: ['Apples', 'Bananas', 'Oranges']
//         },
//         series: [{  
//             name: 'Jane',
//             data: [1, 0, 4, 25, 78, 56, 34, 23, 12, 11, 9, 7, 5, 4, 3, 2, 1]
//         }, {
//             name: 'John',
//             data: [5, 7, 3, 15, 48, 36, 24, 22, 18, 14, 10, 8, 6, 4, 3, 2, 1]
//         }, {
//            name: 'Joe',
//            data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
//        }, {
//            name: 'Jill',
//            data: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5]
//        }, {
//            name: 'Jack',
//            data: [4, 1, 4, 2, 8, 5, 7, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3]
//        }]
//     });
// });

// ----------------------------------------------------------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function () {
//     Highcharts.chart('container', {
//         chart: {
//             type: 'areaspline',
//             zoomType: 'xy'
//         },
//         title: {
//             text: 'Fruit Consumption'
//         },
//         yAxis: {
//             title: {
//                 text: 'Fruits eaten'
//             }
//         },
//         xAxis: {
//             categories: ['Apples', 'Bananas', 'Oranges']
//         },
//         series: [{  
//             name: 'Jane',
//             data: [1, 0, 4, 25, 78, 56, 34, 23, 12, 11, 9, 7, 5, 4, 3, 2, 1]
//         }, {
//             name: 'John',
//             data: [5, 7, 3, 15, 48, 36, 24, 22, 18, 14, 10, 8, 6, 4, 3, 2, 1]
//         }, {
//            name: 'Joe',
//            data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
//        }, {
//            name: 'Jill',
//            data: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5]
//        }, {
//            name: 'Jack',
//            data: [4, 1, 4, 2, 8, 5, 7, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3]
//        }]
//     });
// });

// ----------------------------------------------------------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function () {
//     Highcharts.chart('container', {
//         chart: {
//             type: 'areaspline'
//         },
//         title: {
//             text: 'Fruit Consumption'
//         },
//         tooltip: {
//             // animation: false, // anotation should not be disabled for smoothness
//             backgroundColor: 'black',
//             borderColor: '#f50000ff',
//             borderRadius: 10,
//             borderWidth: 3,
//             followPointer: true,
//             style: {
//                 color: 'white'
//             }
//         },
//         yAxis: {
//             title: {
//                 text: 'Fruits eaten'
//             }
//         },
//         xAxis: {
//             categories: ['Apples', 'Bananas', 'Oranges']
//         },
//         series: [{  
//             name: 'Jane',
//             data: [1, 0, 4, 25, 78, 56, 34, 23, 12, 11, 9, 7, 5, 4, 3, 2, 1]
//         }, {
//             name: 'John',
//             data: [5, 7, 3, 15, 48, 36, 24, 22, 18, 14, 10, 8, 6, 4, 3, 2, 1]
//         }, {
//            name: 'Joe',
//            data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
//        }, {
//            name: 'Jill',
//            data: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5]
//        }, {
//            name: 'Jack',
//            data: [4, 1, 4, 2, 8, 5, 7, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3]
//        }]
//     });
// });

// ----------------------------------------------------------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function () {
//     Highcharts.chart('container', {
//         chart: {
//             type: 'areaspline'
//         },
//         title: {
//             text: 'Fruit Consumption'
//         },
//         yAxis: {
//             title: {
//                 text: 'Fruits eaten'
//             }
//         },
//         colors: ['#533c36ff', '#2a7037ff', '#474c64ff', '#6f0277ff', '#454b4aff'],
//         xAxis: {
//             categories: ['Apples', 'Bananas', 'Oranges']
//         },
//         series: [{  
//             name: 'Jane',
//             data: [1, 0, 4, 25, 78, 56, 34, 23, 12, 11, 9, 7, 5, 4, 3, 2, 1]
//         }, {
//             name: 'John',
//             data: [5, 7, 3, 15, 48, 36, 24, 22, 18, 14, 10, 8, 6, 4, 3, 2, 1]
//         }, {
//             name: 'Joe',
//             data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
//         }, {
//             name: 'Jill',
//             data: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5]
//         }, {
//             name: 'Jack',
//             data: [4, 1, 4, 2, 8, 5, 7, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3]
//         }]
//     });
// });

// ----------------------------------------------------------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function () {
//     Highcharts.chart('container', {
//         chart: {
//             type: 'areaspline'
//         },
//         title: {
//             text: 'Fruit Consumption'
//         },
//         tooltip: {
//             formatter: function() {
//                 return 'X value is: <b>' + this.x + '</b><br/>Y value is: <b>' + this.y + '</b>';
//             }
//         },
//         yAxis: {
//             title: {
//                 text: 'Fruits eaten'
//             }
//         },
//         xAxis: {
//             categories: ['Apples', 'Bananas', 'Oranges']
//         },
//         series: [{  
//             name: 'Jane',
//             data: [1, 0, 4, 25, 78, 56, 34, 23, 12, 11, 9, 7, 5, 4, 3, 2, 1]
//         }, {
//             name: 'John',
//             data: [5, 7, 3, 15, 48, 36, 24, 22, 18, 14, 10, 8, 6, 4, 3, 2, 1]
//         }, {
//             name: 'Joe',
//             data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
//         }, {
//             name: 'Jill',
//             data: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5]
//         }, {
//             name: 'Jack',
//             data: [4, 1, 4, 2, 8, 5, 7, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3]
//         }]
//     });
// });

// ----------------------------------------------------------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function () {
//     Highcharts.chart('container', {
//         chart: {
//             type: 'line'
//         },
//         title: {
//             text: 'Fruit Consumption'
//         },
//         tooltip: {
//             formatter: function() {
//                 let s = '<b>' + this.x + '</b>';
//                 this.points.forEach(function(point) {
//                     s += '<br/>' + point.series.name + ': ' + point.y;
//                 });
//                 return s;
//             },
//             shared: true
//         },
//         yAxis: {
//             title: {
//                 text: 'Fruits eaten'
//             }
//         },
//         xAxis: {
//             categories: ['Apples', 'Bananas', 'Oranges']
//         },
//         series: [{  
//             name: 'Jane',
//             data: [1, 0, 4, 25, 78, 56, 34, 23, 12, 11, 9, 7, 5, 4, 3, 2, 1]
//         }, {
//             name: 'John',
//             data: [5, 7, 3, 15, 48, 36, 24, 22, 18, 14, 10, 8, 6, 4, 3, 2, 1]
//         }, {
//             name: 'Joe',
//             data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
//         }, {
//             name: 'Jill',
//             data: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5]
//         }, {
//             name: 'Jack',
//             data: [4, 1, 4, 2, 8, 5, 7, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3]
//         }]
//     });
// });

// ----------------------------------------------------------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function () {
//     Highcharts.chart('container', {
//         chart: {
//             type: 'line'
//         },
//         title: {
//             text: 'Fruit Consumption'
//         },
//         yAxis: {
//             title: {
//                 text: 'Fruits eaten'
//             }
//         },
//         xAxis: {
//             categories: ['Apples', 'Bananas', 'Oranges']
//         },
//         series: [{
//             name: 'Fruit Consumption',
//             data: [
//                 {
//                     name: 'Jane',
//                     y: 10,
//                     color: 'red',
//                     x: 2
//                 },
//                 {
//                     name: 'John',
//                     y: 15,
//                     color: 'violet',
//                     x: 3
//                 },
//                 {
//                     name: 'Joe',
//                     y: 20,
//                     color: 'green',
//                     x: 4
//                 }
//             ]
//         }]
//     });
// });

// ----------------------------------------------------------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function () {
//     Highcharts.chart('container', {
//         chart: {
//             type: 'areaspline'
//         },
//         title: {
//             text: 'Fruit Consumption'
//         },
//         yAxis: {
//             title: {
//                 text: 'Fruits eaten'
//             }
//         },
//         xAxis: {
//             categories: ['Apples', 'Bananas', 'Oranges']
//         },
//         series: [{  
//             name: 'Jane',
//             negativeColor: 'red',
//             data: [1, 0, 4, 25, 78, 56, 34, -23, 12, 11, 9, 7, 5, 4, 3, 2, 1]
//         }]
//     });
// });

// ----------------------------------------------------------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function () {
//     Highcharts.chart('container', {
//         chart: {
//             type: 'areaspline'
//         },
//         title: {
//             text: 'Fruit Consumption'
//         },
//         yAxis: {
//             alternateGridColor: '#FDFFD5',
//             title: {
//                 text: 'Fruits eaten'
//             }
//         },
//         xAxis: {
//             alternateGridColor: '#b31f8eff',
//             categories: ['Apples', 'Bananas', 'Oranges']
//         },
//         series: [{  
//             name: 'Jane',
//             data: [1, 0, 4, 25, 78, 56, 34, 23, 12, 11, 9, 7, 5, 4, 3, 2, 1]
//         }, {
//             name: 'John',
//             data: [5, 7, 3, 15, 48, 36, 24, 22, 18, 14, 10, 8, 6, 4, 3, 2, 1]
//         }, {
//             name: 'Joe',
//             data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
//         }, {
//             name: 'Jill',
//             data: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5]
//         }, {
//             name: 'Jack',
//             data: [4, 1, 4, 2, 8, 5, 7, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3]
//         }]
//     });
// });

// ----------------------------------------------------------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function () {
//     Highcharts.chart('container', {
//         chart: {
//             type: 'line'
//         },
//         title: {
//             text: 'Fruit Consumption'
//         },
//         yAxis: {
//             title: {
//                 text: 'Fruits eaten'
//             }
//         },
//         xAxis: {
//             categories: ['Apples', 'Bananas', 'Oranges']
//         },
//         series: [{  
//             name: 'Jane',
//             data: [-1, 0, -4, 25, 78, 56, 34, -23, 12, 11, 9, -7, 5, 4, 3, 2, 1],
//             zones: [{
//                 value: 0,
//                 color: '#fd8e80ff'
//             }, {
//                 value: 20,
//                 color: '#53a4c9ff'
//             }, {
//                 color: '#5aa768ff'
//             }]
//         }]
//     });
// });

// ----------------------------------------------------------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function () {
//    const options = {
//         chart: {
//             type: 'column',
//             zoomType: 'xy'
//         },
//         title: {
//             text: 'Fruit Consumption'
//         },
//         yAxis: {
//             title: {
//                 text: 'Fruits eaten'
//             }
//         }
//     };
//     // $.get('test.csv', csv => {
//     //     options.data = {
//     //         csv
//     //     };
//     //     Highcharts.chart('container', options);
//     // });

//     fetch('test.csv')
//         .then(response => response.text())
//         .then(csv => {
//             options.data = {
//                 csv
//             };
//             Highcharts.chart('container', options);
//         });

//     // options.data = {
//     //     csvURL: 'http://localhost:8000/test.csv',
//     //     enablePolling: true,
//     //     dataRefreshRate: 20
//     // };
//     // Highcharts.chart('container', options);
// });

// ----------------------------------------------------------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function () {
//    const options = {
//         chart: {
//             type: 'areaspline',
//             zoomType: 'xy'
//         },
//         title: {
//             text: 'Fruit Consumption'
//         },
//         yAxis: {
//             title: {
//                 text: 'Fruits eaten'
//             }
//         },
//         respoensive: {
//             rules: [{
//                 condition: {
//                     maxWidth: 500,
//                     callback() {
//                         return true;
//                     }
//                 },
//                 chartOptions: {
//                     chart: {
//                         type: 'areaspline'
//                     },
//                     legend: {
//                         enabled: false,
//                         yAxis: {
//                             title: {
//                                 text: null
//                             }
//                         }
//                     }
//                 }
//             }]
//         }
//     };

//     fetch('test.csv')
//         .then(response => response.text())
//         .then(csv => {
//             options.data = {
//                 csv
//             };
//             Highcharts.chart('container', options);
//         });
// });