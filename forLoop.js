//Forloop generation
var fl = {

    prevInit : 0,
    prevLoop : 10,
    prevLoopCon: "<",
    prevIter : 1,
    prevIterType : "++",
    prevFLString : "",
    //change to array later
    prevActions: "",
    
    init : 0,
    loop : 10,
    loopCon : "<",
    iter : 1,
    iterType : "++",
    flString : "",
    
    //change to array later
    actions : "" ,
    first: true
}

//action is what to put in the forloop
//check operation on iteration

var generateForloop = function(initNum, loopNum, loopCondition, iterNum, itType, action){
       fl.prevInit = fl.init;
       fl.prevLoop = fl.loop;
       fl.prevLoopCon = fl.loopCon;
       fl.prevIter = fl.iter;
       fl.prevIterType = fl.iterType;
       fl.prevActions = fl.actions;
       
       fl.init = initNum;
       fl.loop = loopNum;
       fl.loopCon = loopCondition;
       fl.iter = iterNum; 
       fl.iterType = itType;
       fl.actions = action;
       
       clearPrev(fl);
       execute(fl);
       
       fl.first = false;
       
       
}
var clearPrev = function(forLoop){

     //clear previous actions
       if(forLoop.actions = "Bouncy Balls" && !(forLoop.first)){
           clearBalls();
           
       }
}
//put in a function that determines for the loop condition 
var execute = function(forLoop){

    if(forLoop.actions = "Bouncy Balls"){
        for(var i = forLoop.init; i < forLoop.loop; i++){
    
            createBouncingBall(forLoop.init, i);
        
        }
        for(var i = forLoop.init; i < forLoop.loop; i++){

            ballBounce(i);
            //setTimeout(ballBounce(i), 500*(Math.abs(i-forLoop.init)));
    
        }
        setTimeout(function(){
            for(var i = forLoop.init; i < forLoop.loop; i++){

                adjustBounce(i);
                //setTimeout(ballBounce(i), 500*(Math.abs(i-forLoop.init)));
    
            }
        }, 200*forLoop.loop);
    }
}
var align = function(){

    alignBalls(fl.init, fl.loop);
}


var constructFLString = function(initial, loop, iteration){

    var constructed = "(";
    for(i=0; i<initial.length; i++){
    
        if(initial[i] != " "){
        
            constructed += initial[i]; 
        }
    }
    constructed += ";"
    for(i=0; i<loop.length; i++){
    
        if(loop[i] != " "){
        
            constructed += loop[i]; 
        }
    }
    constructed += ";"
    for(i=0; i<iteration.length; i++){
    
        if(iteration[i] != " "){
        
            constructed += iteration[i]; 
        }
    }
    constructed += ")";
    fl.prevFLString = fl.flString;
    fl.flString = constructed;
    //generateCode(initial, loop, iteration, constructed, "forloop");
}
