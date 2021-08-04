var flyer;
var pos;
var a = true;


class Vec{
	constructor(x , y) {
	    this.x = x;
		this.y = y;
	}
 	plus(other){//相加
		this.x += other.x ;
		this.y += other.y ;
		return this.getVec();
	}
	ride(value){ //相乘
		this.x *= value ;
		this.y *= value ;
		
	}
	equal(other){
		if(this.x == other.x && this.y == other.y) return true ;
		
		return false;
	}
	getVec(){
		return new Vec(this.x ,this.y);
	}
	}
	class Player{
		
		
		constructor(pos ) {
			
			this.pos = pos ;//位置；
			this.point = new Vec(0,1) ;//方向
			this.ply = document.createElement("div")//dom元素
			this.ply.className = "player";	
			this.flag = true ;
				
	}
	 


	
	show(){
		
		if(this.point.equal(new Vec(-1,0))){
			this.ply.style.backgroundImage = "url(./img/player/up.png)"
			
		}else if(this.point.equal(new Vec(1,0))){
			this.ply.style.backgroundImage = "url(./img/player/back.png)"
		
		}else if(this.point.equal(new Vec(0,1))){
			this.ply.style.backgroundImage = "url(./img/player/right.png)"
		}else if(this.point.equal(new Vec(0,-1))){
			this.ply.style.backgroundImage = "url(./img/player/left.png)"
		}
		
				
	}
	
	 interactive( keyCode ){
		
	 		let x = this.pos.x ;
			
	 		let y =  this.pos.y ;
	 		if(keyCode == 87 || keyCode == 65 ||keyCode == 68 ||keyCode == 83 ){
	 			if( ! this.flag){
	 				return ;
	 			} ;
	 		};
	 		switch(keyCode){
	 				
	 			case 87://w
	 				if(! this.point.equal(new Vec(-1 , 0)) )
	 					this.point = new Vec(-1 , 0);
	 				else if(x > 0 && map[x-1][y].state ){
	 					this.ply.style.backgroundImage ="url(./img/player/goup.gif)"
	 					this.pos.plus(this.point);
	 					this.flag = false;
	 				}
	 			break;
	 			case 65://A
	 				if( !this.point.equal(new Vec( 0,-1)))
	 					//向左
	 					this.point = new Vec( 0,-1) ;
	 				else if(y > 0 && map[x][y-1].state ){
	 					this.ply.style.backgroundImage = "url(./img/player/goleft.gif)"
						this.pos.plus(this.point)
	 					this.flag = false
	 					
						
	 				}
	 			break;
	 			case 68://D
	 				if(!this.point.equal( new Vec(0 , 1)))
	 					this.point = new Vec(0 , 1);
	 				else if(y < map[0].length && map[x][y+1].state ){
	 					this.ply.style.backgroundImage = "url(./img/player/goright.gif)"
	 					this.flag = false;
	 					this.pos.plus(this.point);
	 				}
	 			break;
	 			case 83://S
	 				if(! this.point.equal(new Vec(1 , 0)))
	 					this.point = new Vec(1 , 0);
	 				else if(x < map[0].length && map[x+1][y].state ){
	 					this.ply.style.backgroundImage = "url(./img/player/goback.gif)"
	 					this.flag = false;
	 					this.pos.plus(this.point);
	 				}
	 			break;
	 			case 70://
				
				if(a)
				{
						this.openDoor();
						a=false
				}
				else
				{
					this.closeDoor();
				}
				
	 			break;
	 			case 74 :
				
	 				this.attack1();
	 			break;
	 			case 75:
	 				 this.attack2();
	 			break;
	 		}
	 			this.dwPlayer();
	 			scll();
	 			if( !this.flag){
	 				setTimeout(function(){
	 					player.flag = true;
	 				},"200")
	 			}
				
			
	 }
	 dwPlayer(){
		  this.ply.style.left = (this.pos.y)*32+ "px";
		  this.ply.style.top = (this.pos.x)*32-16+ "px";
		  
		 
	 }

	
	 openDoor(){
		let door = document.getElementsByClassName("door")[0];
		 pos = this.pos ;
		 if(pos.x > 0 && map[pos.x-1][pos.y].name == "door"){
			 door.style.backgroundImage ="url(./img/door/open.gif)"
			 map[pos.x-1][pos.y].openDoor();
		 }else if(pos.x < map.length && map[pos.x+1][pos.y].name == "door"){
			 door.style.backgroundImage ="url(./img/door/open.gif)"
			  map[pos.x+1][pos.y].openDoor();
		 }else if(pos.y > 0 && map[pos.x][pos.y-1].name == "door"){
			 door.style.backgroundImage ="url(./img/door/open.gif)"
			  map[pos.x][pos.y-1].openDoor();
		 }else if(pos.y < map[0].length && map[pos.x][pos.y+1].name == "door"){
			
			  map[pos.x][pos.y+1].openDoor();
			   door.style.backgroundImage ="url(./img/door/open.gif)"
		 }
		  a = true
	  }	 
	  
	closeDoor(){
			let door = document.getElementsByClassName("door")[0];
			 pos = this.pos ;
			 if(pos.x > 0 && map[pos.x-1][pos.y].name == "door"){
				 door.style.backgroundImage ="url(./img/door/close.gif)"
				 map[pos.x-1][pos.y].openDoor();
				 
			 }else if(pos.x < map.length && map[pos.x+1][pos.y].name == "door"){
				 door.style.backgroundImage ="url(./img/door/close.gif)"
				  map[pos.x+1][pos.y].openDoor();
			 }else if(pos.y > 0 && map[pos.x][pos.y-1].name == "door"){
				 door.style.backgroundImage ="url(./img/door/close.gif)"
				  map[pos.x][pos.y-1].openDoor();
			 }else if(pos.y < map[0].length && map[pos.x][pos.y+1].name == "door"){
				
				  map[pos.x][pos.y+1].openDoor();
				   door.style.backgroundImage ="url(./img/door/close.gif)"
			 }
			  a = true
	 }	 
	 
	 
}
function scll(){
	let width = pan.clientWidth;
	let height = pan.clientHeight;
	let marginW = width / 3;
	let marginH = height / 3;
	//the viewport
	let left  = pan.scrollLeft, right = left + width;
	let top = pan.scrollTop, bottom = top + height;

	let center = new Vec(player.pos.y , player.pos.x);
	center.ride(64);
	if (center.x < left + marginW) {
	 pan.scrollLeft = center.x - marginW;
	} else if (center.x > right - marginW) {
	pan.scrollLeft = center.x + marginW - width;
	}
	if (center.y < top + marginH) {
	 pan.scrollTop = center.y - marginH;
	} else if (center.y > bottom - marginH) {
	pan.scrollTop = center.y + marginH - height;
	}
}






