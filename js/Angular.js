var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  var colors = ["rgb(139,233,253)",
    "rgb(80,250,123)",
    "rgb(255,184,108)",
    "rgb(255,121,198)",
    "rgb(189,147,249)",
    "rgb(241,250,140)",
]
function randomColor(arr) {
  var color = arr[Math.floor(Math.random() * 6)]
  return color;
}
// console.log(randomColor(colors));
function randomNumber() {
  return (Math.floor(Math.random() * 900) + 99) + '.' + (Math.floor(Math.random() * 900) + 99) + ' views'
}
// console.log(randomColor());
  $scope.listLink = [
    {link: 'child/JQuery/JQuery01/index.html',
     img: 'https://source.unsplash.com/random/?sig=1',
     title: "JQuery Bài 1: Add Element",
     view: randomNumber(),
     color: randomColor(colors),
     des: 'jquery',
    },
    {link: 'child/JQuery/JQuery02/index.html',
     img: 'https://source.unsplash.com/random/?sig=2',
     title: "JQuery Bài 2: Task Name",
     view: randomNumber(),
     color: randomColor(colors),
     des: 'jquery',
    },
    {link: 'child/JQuery/JQuery03/index.html',
     img: 'https://source.unsplash.com/random/?sig=3',
     title: "JQuery Bài 3: Form Input",
     view: randomNumber(),
     color: randomColor(colors),
     des: 'jquery',
    },
    {link: 'child/AngularJS/AngularJS01/index.html',
     img: 'https://source.unsplash.com/random/?sig=4',
     title: "AngularJS Bài 1: Add Element",
     view: randomNumber(),
     color: randomColor(colors),
     des: 'AngularJS',
    },
    {link: 'child/AngularJS/AngularJS02/index.html',
     img: 'https://source.unsplash.com/random/?sig=5',
     title: "AngularJS Bài 2: Task Name",
     view: randomNumber(),
     color: randomColor(colors),
     des: 'AngularJS',
    },
    {link: 'child/AngularJS/AngularJS03/index.html',
     img: 'https://source.unsplash.com/random/?sig=6',
     title: "AngularJS Bài 3: Form Input",
     view: randomNumber(),
     color: randomColor(colors),
     des: 'AngularJS',
    },
  ]

  $scope.filAll = function(){
    $scope.description = '';
  }
  $scope.filJquery = function(){
    $scope.description = 'Jquery';
  }
  $scope.filAngularJS = function(){
    $scope.description = 'AngularJS';
  }

// console.log($scope.listLink);

})