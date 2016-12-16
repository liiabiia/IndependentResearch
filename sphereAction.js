//All things sphere related
var Spheres = [];
var SphereMovements=[];
var ColorPicker = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
var SphereX = [];
var SphereY = [];
var SphereZ = [];
//sphere array with sphere, sphere movement, and functions!!!
//sphere overlay with numbers


var createBouncingBall = function(init, i){
    var d = new Date();
    SphereX[i] =  Math.floor(Math.random() * d.getTime()) % 30 -15;
    SphereY[i] =  Math.floor(Math.random() * d.getTime()) % 7 + 8;
    SphereZ[i] =  Math.floor(Math.random() * d.getTime()) % 30 -15;

    position = String(SphereX[i]) + ' ' + String(SphereY[i]) + ' ' + String(SphereZ[i]);
    //endPos = String(i*1.05) + ' ' + '0.5' + ' ' + '0';
    color = '#';
    
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
   if((i - init) != 0){
    Spheres[i].setAttribute('visible', false);
    
   
    display = document.createElement('a-animation');
    display.setAttribute('attribute', 'visible');
   //begin
    display.setAttribute('begin', 100*(Math.abs(i-init)));
    display.setAttribute('to', true);
    Spheres[i].appendChild(display);
   }
   
}

var ballBounce = function(i){
    
    //hold ball up until it's ready
   // var vis = Spheres[i].getAttribute('visible');
   //var startPos = document.getElementById('Sphere['+String(i)+']').getAttribute('position');
    var endPos = String(SphereX[i]) + ' ' + '1' + ' ' + String(SphereZ[i]);
    SphereMovements[i] = document.createElement('a-animation');
    SphereMovements[i].setAttribute('id', 'SM['+String(i)+']');
    SphereMovements[i].setAttribute('attribute', 'position');
    SphereMovements[i].setAttribute('begin', i);
    //SphereMovements[i].setAttribute('from', startPos);
    SphereMovements[i].setAttribute('to', endPos);
    SphereMovements[i].setAttribute('dur', 800);
    SphereMovements[i].setAttribute('direction', 'alternate');
    SphereMovements[i].setAttribute('repeat', 'indefinite');
    //SphereMovements[i].setAttribute('easing', 'ease-elastic');
    Spheres[i].appendChild(SphereMovements[i]);
    
    
}
var adjustBounce = function (i){

    //SphereMovements[i].setAttribute('begin', 0);
}

var clearBalls = function(){
    for(var i=0; i < Spheres.length; i++){
        var sphere = document.getElementById('Sphere['+String(i)+']');
        if(sphere != null){
            sphere.parentNode.removeChild(sphere);
        }
    }
    
}
//work on if i starts not at 0
var alignBalls = function(start, finish){

    var total = finish - start;
    var half = total/2;
    
    var space = 30 / total;
    //15 is half of the box
    //1.05 is 2 radius plus room inbetween
    var startPos = -15;
    //radius of 0.5
    //-15 to 15
    for(var i = start; i < finish; i++){
        var move = document.getElementById('SM['+String(i)+']');
        if(move != null){
        
            Spheres[i].removeChild(move);
        }
        var endPos = String(startPos + space*i) + ' 3 0';
    
        alignPos = document.createElement('a-animation');
        alignPos.setAttribute('attribute', 'position');
        alignPos.setAttribute('dur', 1000);
        alignPos.setAttribute('to', endPos);
        Spheres[i].appendChild(alignPos);
        
    }
}
