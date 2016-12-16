/**
 * User control using the GUI 
 * 
 */

var forloop = {
        type: "forloop",
        initialCondition: "i = 0",
        loopingCondition : "i < 10",
        iteration : "i++",
        action : "Bouncy Balls"
};
var gui = new dat.gui.GUI();

//add folders for the different control flow structs



gui.remember(forloop);
gui.add(forloop, 'initialCondition');
gui.add(forloop, 'loopingCondition');
gui.add(forloop, 'iteration');
gui.add(forloop, 'action', ['Bouncy Balls', 'Rotating Cubs', 'Surprise!']);
var run = { run :function(){ parse(forloop) }};

gui.add(run,'run');

var lookaround = { lookaround : function(){lookAround()}};
gui.add(lookaround, 'lookaround');

var align = { align : function(){align()}};
gui.add(align, 'align');



