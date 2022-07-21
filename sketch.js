function setup(){
  
  sounds = [
    document.getElementById("backyard"),
    document.getElementById("park"),
    document.getElementById("parkingGarage"),
  ]
  
  soundI = 0;
  
  icursor = new ImprovedCursor({
    threeFingerConsole: true,
  })
  
  myLoader = new FileLoader({
    
  })
  textSize(50)
}

function onLoadComplete(){
  
}

function draw(){
  //Remember to use if(myLoader.complete)
  background(0,0,100)
  
  icursor.update();
  icursor.render();
  
  for(let i in sounds){
    fill(255);
    text(sounds[i], 0, height/2 + (i * 40) )
    
  }
}

function cursorPressStart(){
  sounds[soundI].pause();
  soundI = (soundI + 1) % sounds.length;
  sounds[soundI].play();
}
