import Chart from 'chart.js/auto';
import './styles/app.css';
import {CHART_COLORS} from './utils';
require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');

jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // Data Chart
  var doughnutDataJavascript = {
    labels: [
      'Acquis',
    ],
    datasets: [{
      label: 'JavaScript Skills',
      data: [60, 40],
      backgroundColor: [
        'green',
        'rgba(0, 0, 0, 0)',
      ],
      hoverOffset: 2
    }]
  }
  ;
  var doughnutDataBootstrap = {
    labels: [
      'Acquis',
    ],
    datasets: [{
      label: 'BootStrap Skills',
      data: [80, 20],
      backgroundColor: [
        'red',
        'rgba(0, 0, 0, 0)',
      ],
      hoverOffset: 2
    }]
  };
  var doughnutDataPHP = {
    labels: [
      'Acquis',
    ],
    datasets: [{
      label: 'WordPress Skills',
      data: [55, 45],
      backgroundColor: [
        'blue',
        'rgba(0, 0, 0, 0)',
      ],
      hoverOffset: 2
    }]
  };
  var doughnutDataHTML = {
    labels: [
      'Acquis',
    ],
    datasets: [{
      label: 'HTML Skills',
      data: [85, 15],
      backgroundColor: [
        'yellow',
        'rgba(0, 0, 0, 0)',
      ],
      hoverOffset: 2
    }]
  };
  var doughnutDataCSharp = {
    labels: [
      'Acquis',
    ],
    datasets: [{
      label: 'HTML Skills',
      data: [60, 40],
      backgroundColor: [
        'orange',
        'rgba(0, 0, 0, 0)',
      ],
      hoverOffset: 2
    }]
  };
  var doughnutDataCPlusPlus = {
    labels: [
      'Acquis',
    ],
    datasets: [{
      label: 'HTML Skills',
      data: [80, 20],
      backgroundColor: [
        'purple',
        'rgba(0, 0, 0, 0)',
      ],
      hoverOffset: 2
    }]
  };
  const configDoughnutJS = {
    type: 'doughnut',
    data: doughnutDataJavascript,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
        }
      }
    },
  };  
  const configDoughnutBoostrap = {
    type: 'doughnut',
    data: doughnutDataBootstrap,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
        }
      }
    },
  };  
  const configDoughnutPHP = {
    type: 'doughnut',
    data: doughnutDataPHP,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
        }
      }
    },
  };
  const configDoughnutHTML = {
    type: 'doughnut',
    data: doughnutDataHTML,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
        }
      }
    },
  };
  const configDoughnutCSharp = {
    type: 'doughnut',
    data: doughnutDataCSharp,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
        }
      }
    },
  };  
  const configDoughnutCPlusPlus = {
    type: 'doughnut',
    data: doughnutDataCPlusPlus,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
        }
      }
    },
  };  

  new Chart(document.getElementById("bootstrap"), configDoughnutBoostrap);
  new Chart(document.getElementById("javascript"), configDoughnutJS);
  new Chart(document.getElementById("wordpress"), configDoughnutPHP);
  new Chart(document.getElementById("html"), configDoughnutHTML);
  new Chart(document.getElementById("photoshop"), configDoughnutCSharp);
  new Chart(document.getElementById("illustrator"), configDoughnutCPlusPlus);

});
