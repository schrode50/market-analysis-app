var itemChoice = [];
var images = ["boots", "chair", "scissors", "water_can", "wine_glass", "bag", "banana", "cthulhu", "dragon", "pen", "shark", "sweep",
"unicorn", "usb"]

function ProductPhoto(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  itemChoice.push(this);
};

function buildAlbum() {
  for(var i = 0; i < images.length; i++) {
    new ProductPhoto(images[i], '../img/' + images[i] + '.jpg');
  }
}
buildAlbum();

var tracker = {
  totalClicks: 0,
  img1: null,
  img2: null,
  img3: null
};

var photo1 = document.createElement('img');
var photo2 = document.createElement('img');
var photo3 = document.createElement('img');
var pic1 = document.getElementById('pic1');
var pic2 = document.getElementById('pic2');
var pic3 = document.getElementById('pic3');

function generateRandom () {
  return Math.floor(Math.random() * images.length);
}

startItemDisplay = function() {
  tracker.img1 = generateRandom();
  tracker.img2 = generateRandom();
  tracker.img3 = generateRandom();
  photo1.src = itemChoice[tracker.img1].path;

  if(tracker.img1 === tracker.img2) {
    tracker.img2 = generateRandom();
  }
  photo2.src = itemChoice[tracker.img2].path;

  if((tracker.img1 === tracker.img3) || (tracker.img2 === tracker.img3)) {
    tracker.img3 = generateRandom();
  }
  photo3.src = itemChoice[tracker.img3].path;

  pic1.appendChild(photo1);
  pic2.appendChild(photo2);
  pic3.appendChild(photo3);
}

var firstSelection = function() {
var select = itemChoice[tracker.img1];
  tracker.totalClicks += 1;
  select.votes++;
  console.log(select.name + ' has ' + select.votes + ' votes');
  startItemDisplay();
  showResults();
};
var secondSelection = function() {
  var select = itemChoice[tracker.img2];
  tracker.totalClicks += 1;
  select.votes++;
  startItemDisplay();
  showResults();
};
var thirdSelection = function() {
  var select = itemChoice[tracker.img3];
  tracker.totalClicks += 1;
  select.votes++;
  startItemDisplay();
  showResults();
};

var resultsEl = document.getElementById('results');
var showResults = function() {
  // console.log(tracker.totalClicks);
  if (tracker.totalClicks % 15 === 0) {
    resultsEl.hidden = false;
  }
};

pic1.addEventListener('click', firstSelection);
pic2.addEventListener('click', secondSelection);
pic3.addEventListener('click', thirdSelection);

var tblSection = document.getElementById('tblSection');
var table = document.getElementById('table');
results.addEventListener("click", function(){

		for (i = 1 ; i < images.length ; i++){
			var row = document.createElement("tr");
			var th = document.createElement("th");
			var td1 = document.createElement("td");
      th.textContent = itemChoice[i].name;
			td1.textContent = itemChoice[i].votes;

			row.appendChild(th);
			row.appendChild(td1);
      table.appendChild(row);
		}
});

ProductPhoto();
startItemDisplay();
