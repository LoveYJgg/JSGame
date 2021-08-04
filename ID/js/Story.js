var shujimeng;
var guoyiru;
var drouyang;
var caoxiyan;
var teacherli;
var invisible;
var msgbox;
var player;



var drouyang = new Array();
var shujimeng = new Array();


msgbox = document.createElement("div");

msgbox.className = "msgbox";
msg = document.createElement("span");
msg.className="msg"
msgbox.appendChild(msg);

	// function a(){
	// 		if(player.pos.equal(new Vec(5,10))){
				
				 
	// 			 		console.log("qwe")
	// 			 		msgbox.innerText=drouyang[0]
	// 			 		document.getElementsByClassName("npc1")[0].appendChild(msgbox);
				 
					
	// 	}
	// 	else{
	// 		msgbox.innerText =drouyang[0];
			
		
			
	// 		document.getElementsByClassName("player")[0].appendChild(msgbox);
				
	// 	}
	// }	
class story{
	constructor(map) {
    
	}
	
			
	move(){
		
		document.onkeydown = function (event){
			
		player.interactive(event.keyCode);	
		
		console.log(player.pos);
		
		// a();
		
		
		}
		
		document.onkeyup = function(event){
			
			setTimeout(function(){player.show();},100)
		}
		
	
	}
	
	
	
	
	map1(){
		
		
		drouyang[0]=""
		drouyang[1]=""
		drouyang[2]=""
		drouyang[3]=""
		drouyang[4]=""
		drouyang[5]=""
		drouyang[6]=""
		drouyang[7]=""
		
		shujimeng[0]="Hello!,"
		shujimeng[1]=""
		shujimeng[2]=""
		shujimeng[3]=""
		shujimeng[4]=""
		shujimeng[5]=""
		shujimeng[6]=""
		
		i=0;
		
		
		
		Showmap();
		
		player = new Player(new Vec(4,23));
	 
		player.dwPlayer();
	 
		level.appendChild(player.ply);
		
		msg.innerText =shujimeng[0];
		
		
			
		var npc = new Npc("1" ,new Vec(4,16),"npc1",new Vec(-1,0));
		npc.show();	
		
		
		console.log(player.pos);
		
		// document.getElementsByClassName("npc1")[0].appendChild(msgbox);
		
		setInterval(function(){
			
			
		},5000)
	
		
	
	}
	

	
}