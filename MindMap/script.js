$(function(){

    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    ctx.lineWidth=3;

    var $canvas=$("#canvas");
    var canvasOffset=$canvas.offset();
    var offsetX=canvasOffset.left;
    var offsetY=canvasOffset.top;

    var $0=$("#0");
    var $1=$("#1");
    var $2=$("#2");
    var $3=$("#3"); 
    var $4=$("#4"); 	
	
    var $0r=$("#0r");


    var connectors=[];
    connectors.push({from:$0,to:$0r});
    connectors.push({from:$1,to:$0r});
    //connectors.push({from:$2,to:$0r});
    connectors.push({from:$1,to:$2});	
    connectors.push({from:$1,to:$3});	
    connectors.push({from:$4,to:$0r});	


    connect();
    $(".draggable").draggable({
        // event handlers
        start: noop,
        drag:  connect,
        stop:  noop
    });

    function noop(){}

    function connect(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        for(var i=0;i<connectors.length;i++){
            var c=connectors[i];
            var eFrom=c.from;
            var eTo=c.to;
            var pos1=eFrom.offset();
            var pos2=eTo.offset();
            var size1=eFrom.size();
            var size2=eTo.size();
            ctx.beginPath();
            ctx.moveTo(pos1.left+eFrom.width()+3,pos1.top+eFrom.height());
            ctx.lineTo(pos2.left+3,pos2.top+eTo.height());
            ctx.stroke();

        }
    }

}); // end $(function(){});
