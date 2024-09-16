var theta = 90;

var planetName = ["sun", "mercury", "venus", "earth", "mars", "jupiter", "saturn", "neptune", "uranus"];
var planetSize = [20, 0.3, 1, 1, 0.5, 11, 9, 4, 4];
var orbitRadius = [0, 0.718, 1.221 , 1.635, 2.418, 7.922, 14.433, 28.889, 45.184];

function initPlanet(){
  for(var i=0; i<9; i++){
    $("#planet-" + planetName[i]).css("width",`${planetSize[i]*1}px`);
    $("#planet-" + planetName[i]).css("height",`${planetSize[i]*1}px`);
  }
}

function updatePlanet(){
  for(var i=0; i<9; i++){
    var x = Math.cos(theta / 180 * Math.PI) * orbitRadius[i] * 8;
    var y = Math.sin(theta / 180 * Math.PI) * orbitRadius[i] * 8;
    $("#planet-" + planetName[i]).css("top",`calc(50% + ${x}px - ${planetSize[i]*1/2}px)`);
    $("#planet-" + planetName[i]).css("left",`calc(50% + ${y}px - ${planetSize[i]*1/2}px)`);
  }

  theta += 1;
}

initPlanet();
updatePlanetInterval = setInterval(updatePlanet, 10);