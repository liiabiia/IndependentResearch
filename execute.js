/*var delay = function(ms){
    var d = new Date();
    var beginTime = d.getTime();
    var msPassed = 0;
    while(msPassed < ms){
    
        var d2 = new Date();
        var nextTime = d2.getTime();
        msPassed = nextTime - beginTime;
    }
    
}*/
var lookAround = function(){
    var spinDur = 15000;
    var pos = document.getElementById("pos");
    var spin = document.createElement('a-animation');
   spin.setAttribute('attribute', 'rotation');
   spin.setAttribute('to', '0 360 0');
   spin.setAttribute('dur', spinDur);
   pos.appendChild(spin);
   
   setTimeout(function(){pos.removeChild(spin);}, spinDur + 20);
}

/*var Spheres = [];
var SphereMovements=[];
var ColorPicker = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];


var generateCode = function (initial, loop, iteration, constructed, id) {
    var action = "";
    if(id == "forloop"){
    
        action = "for"
    }
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = action + constructed + " \n{ fallingBalls(i);\n} ";//fall();" ; //put a function in here
    document.body.appendChild(script);
    
    
}

var lookUpFunction = function (whichFunction) {

    if (whichFunction == "forloop"){
    
        runforloop();
    }
}


var fallingBalls = function(i){
    position = String(i*1.05) + ' ' + '3' + ' ' + '0';
    endPos = String(i*1.05) + ' ' + '0.5' + ' ' + '0';
    color = '#';
    var d = new Date();
    for(var x=0; x<6; x++){
    
        color += ColorPicker[Math.floor(Math.random() * d.getTime()) % ColorPicker.length]; 
    }
   Spheres[i] = document.createElement('a-sphere');
   Spheres[i].setAttribute('id', 'Sphere['+String(i)+']');
   Spheres[i].setAttribute('position', position);
   Spheres[i].setAttribute('color', color);
   Spheres[i].setAttribute('radius', 0.5);
   Spheres[i].setAttribute('metalness', 0.5);
   
   document.querySelector('a-scene').appendChild(Spheres[i]);
   //animation portion
   SphereMovements[i] = document.createElement('a-animation');
   SphereMovements[i].setAttribute('attribute', 'position');
   //SphereMovements[i].setAttribute('begin', 'start');
   SphereMovements[i].setAttribute('delay', 100);
   SphereMovements[i].setAttribute('from', position);
   SphereMovements[i].setAttribute('to', endPos);
   
   //Spheres[i].pause();
   
   document.getElementById('Sphere['+String(i)+']').appendChild(SphereMovements[i]);
   
                                   
   //DELAY
   
}

var fall = function(){

    for(var i=0; i<Spheres.length; i++){
        
        var sphere = document.getElementById('Sphere['+String(i)+']');
        //adjust position
        var oldPos = sphere.getAttribute('position');
        var spaceBetween = 0;
        //yCoord string
        var yCoordS = '\0';
        var gravity = 0.1;
        //parse position to get y coordinate
        for(j=0; j < oldPos.length; j++){
        
            if(oldPos[j] == ' '){
            
                spaceBetween++;
            } else if(oldPos[j] != ' ' && spaceBetween == 1){
            
                //get all digits
                while(oldPos[j] != ' '){
                
                    yCoordS +=oldPos[j];
                    j++;
                }
                break;
            }
        }
        yCoord = parseFloat(yCoordS);
        yCoord += gravity;
        //floor of box minus radius
        if(yCoord < 0.5){
        
            yCoord = 0.5;
        }
        //height of box minus radius
        if(yCoord > 29.5){
        
            yCoord = 29.5;
        }
        position = String(i*1.05) + String(yCoord) + '0' ;
        sphere.setAttribute('position', position);
        //Spheres[i].move
        //DELAY
        setTimeout(fall, 20);
    }
}
//pause and play for components*/
