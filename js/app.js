var itemChoice = [];
var track = {
  img1: 0,
  img2: 0,
  img3: 0
}
var photo1 = document.createElement('img');
var photo2 = document.createElement('img');
var photo3 = document.createElement('img');
var pic1 = document.getElementById('pic1');
var pic2 = document.getElementById('pic2');
var pic3 = document.getElementById('pic3');

function ProductPhoto(name, path, votes) {
  this.name = name;
  this.path = path;
  this.votes = 0
  itemChoice.push(this);
}
function generateRandom () {
  return Math.floor(Math.random() * itemChoice.length);
}
//display items and check for dups///
startItemDisplay = function() {
  track.img1 = generateRandom();
  track.img2 = generateRandom();
  track.img3 = generateRandom();
  photo1.src = itemChoice[track.img1].path;

  if(track.img1 === track.img2) {
    track.img2 = generateRandom();
  }
  photo2.src = itemChoice[track.img2].path;

  if((track.img1 === track.img3) || (track.img2 === track.img3)) {
    track.img3 = generateRandom();
  }
  photo3.src = itemChoice[track.img3].path;

  pic1.appendChild(photo1);
  pic2.appendChild(photo2);
  pic3.appendChild(photo3);
}

var firstSelection = function() {
  var select = itemChoice[track.img1];
  select.votes++;
  console.log(select.name + ' has ' + select.votes + ' votes');
  startItemDisplay();
};
var secondSelection = function() {
  var select = itemChoice[track.img2];
  select.votes++;
  console.log(select.name + ' has ' + select.votes + ' votes');
  startItemDisplay();
};
var thirdSelection = function() {
  var select = itemChoice[track.img3];
  select.votes++;
  console.log(select.name + ' has ' + select.votes + ' votes');
  startItemDisplay();

  // var voteAgain = document.createElement('button');
  // voteAgain.setAttribute('id', 'vote');
  // voteAgain.textContent = ('Click Here to Vote Again!');
  // document.body.appendChild(voteAgain);
  // function hideButton() {
  //   document.getElementById('vote').style.display = '';
  // }
}

pic1.addEventListener('click', firstSelection);
pic2.addEventListener('click', secondSelection);
pic3.addEventListener('click', thirdSelection);


var bag = new ProductPhoto('bag', 'img/bag.jpg');
var banana = new ProductPhoto('banana', 'img/banana.jpg');
var boots = new ProductPhoto('boots', 'img/boots.jpg');
var chair = new ProductPhoto('chair', 'img/chair.jpg');
var cthulhu = new ProductPhoto('cthulhu', 'img/cthulhu.jpg');
var dragon = new ProductPhoto('dragon', 'img/dragon.jpg');
var pen = new ProductPhoto('pen', 'img/pen.jpg');
var scissors = new ProductPhoto('scissors', 'img/scissors.jpg');
var shark = new ProductPhoto('shark', 'img/shark.jpg');
var sweep = new ProductPhoto('sweep', 'img/sweep.png');
var unicorn = new ProductPhoto('unicorn', 'img/unicorn.jpg');
var usb = new ProductPhoto('usb', 'img/usb.gif');
var water_can = new ProductPhoto('water can', 'img/water_can.jpg');
var wine_glass = new ProductPhoto('wine glass', 'img/wine_glass.jpg');
ProductPhoto();
startItemDisplay();
