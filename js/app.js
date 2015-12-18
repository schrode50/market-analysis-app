var allProducts=[];
var productName = ['bag','banana','boots','chair','cthulhu','dragon','pen','scissors','shark','sweep','unicorn','usb','water_can','wine_glass'];

var data = {
  labels: [],
  datasets: [
    {
      label: 'HUH',
      fillColor: '#3D93FF',
      strokeColor: 'rgba(220,220,220,0.8)',
      highlightFill: 'rgba(220,220,220,0.75)',
      highlightStroke: 'rgba(220,220,220,1)',
      data: []
    }]};

var resultsEl = document.getElementById('results');

function Product (imageName, filePath) {
  this.imageName = imageName;
  this.filePath = filePath;
  this.tally = 0;
  this.views = 0;
  allProducts.push(this);
  data.labels.push(imageName);
  data.datasets[0].data.push(0);
}

function buildAlbum() {
  for (var i = 0; i<productName.length; i++){
    new Product(productName[i], '../img/' + productName[i] + '.jpg');
}};
buildAlbum();

var productRank = {
  totalClicks: 0,
  leftObj: null,
  middleObj: null,
  rightObj: null,
  resultsEl: document.getElementById('results'),
  leftEl: document.getElementById('img1'),
  middleEl: document.getElementById('img2'),
  rightEl: document.getElementById('img3'),

  getRandomIndex: function() {
    return Math.floor(Math.random() * productName.length);
  },
  displayImages: function() {
    productRank.leftObj = allProducts[productRank.getRandomIndex()];
    productRank.middleObj = allProducts[productRank.getRandomIndex()];
    productRank.rightObj = allProducts[productRank.getRandomIndex()];

    if (productRank.leftObj === productRank.middleObj || productRank.leftObj === productRank.rightObj || productRank.rightObj === productRank.middleObj){
      productRank.displayImages();
    }

    productRank.leftEl.src = productRank.leftObj.filePath;
    productRank.leftEl.id = productRank.leftObj.imageName;

    productRank.middleEl.src = productRank.middleObj.filePath;
    productRank.middleEl.id = productRank.middleObj.imageName;

    productRank.rightEl.src = productRank.rightObj.filePath;
    productRank.rightEl.id = productRank.rightObj.imageName;
  },

  tallyClicks: function(elId) {
    for(var i in allProducts){
      if(allProducts[i].imageName === elId) {
        allProducts[i].tally +=1;
        this.totalClicks +=1;
        console.log(allProducts[i].imageName + ' has ' + allProducts[i].tally);
        data.datasets[0].data[i] = allProducts[i].tally;
      }}},

  showResults: function(){
    if (this.totalClicks % 15 === 0) {
      this.resultsEl.hidden = false;
      productRank.leftEl.removeEventListener('click', false);
      productRank.middleEl.removeEventListener('click', false);
      productRank.rightEl.removeEventListener('click', false);
    } else {
      this.resultsEl.hidden = true;
    }}};

productRank.leftEl.addEventListener('click', function(){
  productRank.tallyClicks(productRank.leftEl.id);
  productRank.displayImages();
  productRank.showResults();
});

productRank.middleEl.addEventListener('click', function(){
  productRank.tallyClicks(productRank.middleEl.id);
  productRank.displayImages();
  productRank.showResults();
});

productRank.rightEl.addEventListener('click', function(){
  productRank.tallyClicks(productRank.rightEl.id);
  productRank.displayImages();
  productRank.showResults();
});

productRank.leftEl.addEventListener('click', productRank.displayImages);
productRank.middleEl.addEventListener('click', productRank.displayImages);
productRank.rightEl.addEventListener('click', productRank.displayImages);

function voteTable() {
  var catalogVotesEl = document.getElementById('votes');
  var tbEl = document.createElement('table');

  var prodChart = document.getElementById('prodChart').getContext('2d');
  new Chart(prodChart).Bar(data);
}

productRank.displayImages();
productRank.resultsEl.addEventListener('click', function(){
  refresh.hidden = false;

  voteTable();
});

refresh.addEventListener('click', function(){
  window.location.reload();
});
