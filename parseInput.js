var parse = function(flowStatement){
    
    if(flowStatement.type == "forloop"){
        parseForloop(flowStatement);
    }
}
var parseForloop = function(forloop){

    var initialString = forloop.initialCondition;
    var initial = "";
    var initNum = 0; 
    //extract number
    for(i=0; i<initialString.length; i++){
    
        if(initialString.charCodeAt(i) >= 48 && initialString.charCodeAt(i) <= 57){
        
            initial+= initialString[i]; 
        }
    }
    initNum = parseInt(initial, 10);
    var loopString = forloop.loopingCondition;
    var loopCondition = "";
    var loop="";
    var loopNum = 0;
    for(i=0; i<loopString.length; i++){
    
        if(loopString.charCodeAt(i) >= 48 && loopString.charCodeAt(i) <= 57){
        
            loop+= loopString[i]; 
        } else if((loopString.charCodeAt(i) >=60 && loopString.charCodeAt(i) <=62 ) || loopString.charCodeAt(i) == 33){
        
            loopCondition+=loopString[i];
        }
    }
    loopNum = parseInt(loop, 10);
    
    //have to figure out parsig for iteration ourselves
    var iterationString = forloop.iteration;
    var iteration = "";
    var iterationNum = 0;
    var itStart = 0;
    var eval = false;
    for(i=0; i < iterationString.length; i++){
        //i++, i+=1, i = i + 1
        if(iterationString[i] < iterationString.length-1 ){
        
            //if ++ or --
            if(iterationString[i] == '+' && iterationString[i+1] == '+'){
            
                iteration = "++";
                iterationNum = 1;
                break;
            } else if(iterationString[i] == '-' && iterationString[i+1] == '-'){
            
                iteration = "--";
                iterationNum = -1;
                break;
            } else if(iterationString[i] == '+' && iterationString[i+1] == '='){
                iteration = "+=";
                itStart = 0;
                eval = true;
                break;
                
            }else if(iterationString[i] == '-' && iterationString[i+1] == '='){
                iteration = "-=";
                itStart = i+2;
                eval = true;
                break;
            }else if(iterationString[i] == '*' && iterationString[i+1] == '='){
                iteration = "*=";
                itStart = i+2;
                eval = true;
                break;
                
            }else if(iterationString[i] == '/' && iterationString[i+1] == '='){
                iteration = "/=";
                itStart = i+2;
                eval = true;
                break;
            }
            //else if +-*/=
            //else if +-*/ # or i
        }
    }
    generateForloop(initNum, loopNum, loopCondition, iterationNum, iteration, forloop.action);
    
    
}

