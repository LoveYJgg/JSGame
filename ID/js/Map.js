


var starthouse = `
z1111111111111111111111c
gaaaaaaaapaaaaadaaaaaaa0
g752222222222222222222@0
g862222223-/2222222222!0
g922222&24.=2&2222222222
g22222222+*_222222222220
g@22222222222222222222@0
g!22222222222222222222!0
l1111111111111111111111r
baaaaaaaaaaaaaaaaaaaaaau
ntttttttttttttttttttttto
`;



var map2=`
zzzzdnvnvnvnvdczzzdnvnvnvnvdazzzgh
xxxxfmbmbmbmbfxxxxfmbmbmbmbfxxxxgh
2222222222222222222222222222222222
2222222222222222222222222222222222
2222222222222222222222222222222222
2222222222222222222222222222222222
2222222222222222222222222222222222
lrlrlrlrlrlrlrlrlrlrlrlrlrlrlrl222
`;




var map3=`
lhqqqqqqqqqqqqqqqqqfg
lhwwwwrttttttttywwwfg
lhwwwwuiiiiiiiiowwwfg
lhwwwwpaaaaaaaaswwwfg
lheeeeeeeeeeeeeeeeefg
lh[[222222222222222fg
lh]]222224562222222nm
lh22222227892222222xz
lh2+++222+++222+++2jk
lh2---222---222---2xz
lh22222222222222222jk
lh2+++222+++222+++2xz
lh2---222---222---2jk
lh22222222222222222xz
lh2+++222+++222+++2xz
lh2---222---222---2jk
lh22222222222222222jk
lh2+++222+++222+++2xz
lh2---222---222---2nm
lh22222222222222222fg
lh22222222222222222fg
`;

var map4=`
z11111111111111c
gaaaaaaaaaaaaaa0
gj2-22[2*******0
gk7892]2///////0
g234522222222220
g226222222222220
g22-222222222220
g278922222222222
g234522222222220
g22+222222222220
gj345222222222j0
gk2+2222222222k0
l11111111111111r
baaaaaaaaaaaaaau
ntttttttttttttto
`




var map1u;
var map2u;
var map3u;
var map4u;
var mapp = new Array();
mapp[0]=starthouse;
mapp[1]=map2;
mapp[2]=map3;
mapp[3]=map4;
var  map = new Array();
var  i ; 
var  level;
var  pan;
var chmap=0;
var px=32;

class Wall_1{
		constructor() {
		this.state = false ;
		this.name = "wall_1";
		this.dom ;
	}
	get type(){return "wall_1"}
	
	static create(){
		return new 	Wall_1();
	}
	show(){
		return this.name;
	}
}

class b1{
	constructor() {
		this.state = false ;
		this.name = "b1";
		this.dom ;
	}
	get type(){return "b1"}
	
	static create(){
		return new 	b1();
	}
	show(){
		return this.name;
	}
}
class b2{
	constructor() {
		this.state = false ;
		this.name = "b2";
		this.dom ;
	}
	get type(){return "b2"}
	
	static create(){
		return new 	b2();
	}
	show(){
		return this.name;
	}
}
class b3{
	constructor() {
		this.state = true ;
		this.name = "b3";
		this.dom ;
	}
	get type(){return "b3"}
	
	static create(){
		return new 	b3();
	}
	show(){
		return this.name;
	}
}
class wd{
	constructor() {
		this.state = false ;
		this.name = "wd";
		this.dom ;
	}
	get type(){return "wd"}
	
	static create(){
		return new 	wd();
	}
	show(){
		return this.name;
	}
}
class tb1{
	constructor() {
		this.state = false ;
		this.name = "tb1";
		this.dom ;
	}
	get type(){return "tb1"}
	
	static create(){
		return new 	tb1();
	}
	show(){
		return this.name;
	}
}
class tb2{
	constructor() {
		this.state = true ;
		this.name = "tb2";
		this.dom ;
	}
	get type(){return "tb2"}
	
	static create(){
		return new 	tb2();
	}
	show(){
		return this.name;
	}
}

class Wall_b{
	constructor() {
		this.state = false ;
		this.name = "Wall_b";
		this.dom ;
	}
	get type(){return "Wall_b"}
	
	static create(){
		return new 	Wall_b();
	}
	show(){
		return this.name;
	}
}
class Wall_u{
	constructor() {
		this.state = false ;
		this.name = "Wall_u";
		this.dom ;
	}
	get type(){return "Wall_u"}
	
	static create(){
		return new 	Wall_u();
	}
	show(){
		return this.name;
	}
}

class Wall_o{
	constructor() {
		this.state = false ;
		this.name = "Wall_o";
		this.dom ;
	}
	get type(){return "Wall_o"}
	
	static create(){
		return new 	Wall_o();
	}
	show(){
		return this.name;
	}
}
class Window1{
	constructor() {
		this.state = false ;
		this.name = "Window1";
		this.dom ;
	}
	get type(){return "Window1"}
	
	static create(){
		return new 	Window1();
	}
	show(){
		return this.name;
	}
}
class Wall_3{
	constructor() {
		this.state = false ;
		this.name = "wall_3";
		this.dom ;
	}
	get type(){return "wall_3"}
	
	static create(){
		return new 	Wall_3();
	}
	show(){
		return this.name;
	}
}
class Wall_m{
	constructor() {
		this.state = false ;
		this.name = "Wall_m";
		this.dom ;
	}
	get type(){return "Wall_m"}
	
	static create(){
		return new 	Wall_m();
	}
	show(){
		return this.name;
	}
}
class Wall_lb{
	constructor() {
		this.state = false ;
		this.name = "Wall_lb";
		this.dom ;
	}
	get type(){return "Wall_lb"}
	
	static create(){
		return new 	Wall_lb();
	}
	show(){
		return this.name;
	}
}
class Wall_n{
	constructor() {
		this.state = false ;
		this.name = "Wall_n";
		this.dom ;
	}
	get type(){return "Wall_n"}
	
	static create(){
		return new 	Wall_n();
	}
	show(){
		return this.name;
	}
}
class Floor{
	constructor() {
	    this.state = true ;
		this.name = "floor";
		this.dom;
	}
	get type(){return "floor"}
	
	static create(){
		return new Floor();
	}
}
class Wall_left{
	constructor() {
		this.state = false ;
		this.name = "wall_left";
		this.dom ;
	}
	get type(){return "wall_left"}
	
	static create(){
		return new 	Wall_left();
	}
	show(){
		return this.name;
	}
}


class Wall_right{
	constructor() {
		this.state = false ;
		this.name = "wall_right";
		this.dom ;
	}
	get type(){return "wall_right"}
	
	static create(){
		return new 	Wall_right();
	}
	show(){
		return this.name;
	}
}


class Wall_left1{
	constructor() {
		this.state = false ;
		this.name = "wall_left1";
		this.dom ;
	}
	get type(){return "wall_left1"}
	
	static create(){
		return new 	Wall_left1();
	}
	show(){
		return this.name;
	}
}
class Wall_l{
	constructor() {
		this.state = false ;
		this.name = "Wall_l";
		this.dom ;
	}
	get type(){return "Wall_l"}
	
	static create(){
		return new 	Wall_l();
	}
	show(){
		return this.name;
	}
}



class Wall_right1{
	constructor() {
		this.state = false ;
		this.name = "wall_right1";
		this.dom ;
	}
	get type(){return "wall_right1"}
	
	static create(){
		return new 	Wall_right1();
	}
	show(){
		return this.name;
	}
}

class Door{
	
	constructor(state ,name) {
		
	    this.state = state ;
		this.name = name ;
		this.dom;
	}
	openDoor(){
		if(this.state == false){
			this.state = true ;
			//this.dom.style.background = "#f0f0f0";
		}else{
			this.state = false ;
			//this.dom.style.background = "red";
		}
	}
	static create(){
		return new Door(false , "door");
	}
}


class tab1{
	constructor() {
		this.state = false ;
		this.name = "tab1";
		this.dom ;
	}
	get type(){return "tab1"}
	
	static create(){
		return new 	tab1();
	}
	show(){
		return this.name;
	}
}
class tab2{
	constructor() {
		this.state = false ;
		this.name = "tab2";
		this.dom ;
	}
	get type(){return "tab2"}
	
	static create(){
		return new 	tab2();
	}
	show(){
		return this.name;
	}
}
class tab3{
	constructor() {
		this.state = true ;
		this.name = "tab3";
		this.dom ;
	}
	get type(){return "tab3"}
	
	static create(){
		return new 	tab3();
	}
	show(){
		return this.name;
	}
}

class tab4{
	constructor() {
		this.state = false ;
		this.name = "tab4";
		this.dom ;
	}
	get type(){return "tab4"}
	
	static create(){
		return new 	tab4();
	}
	show(){
		return this.name;
	}
}
class tab5{
	constructor() {
		this.state = false ;
		this.name = "tab5";
		this.dom ;
	}
	get type(){return "tab5"}
	
	static create(){
		return new 	tab5();
	}
	show(){
		return this.name;
	}
}
class tab6{
	constructor() {
		this.state = true ;
		this.name = "tab6";
		this.dom ;
	}
	get type(){return "tab6"}
	
	static create(){
		return new 	tab6();
	}
	show(){
		return this.name;
	}
}
class tab7{
	constructor() {
		this.state = false ;
		this.name = "tab7";
		this.dom ;
	}
	get type(){return "tab7"}
	
	static create(){
		return new 	tab7();
	}
	show(){
		return this.name;
	}
}
class tab8{
	constructor() {
		this.state = false ;
		this.name = "tab8";
		this.dom ;
	}
	get type(){return "tab8"}
	
	static create(){
		return new 	tab8();
	}
	show(){
		return this.name;
	}
}
class tab9{
	constructor() {
		this.state = true ;
		this.name = "tab9";
		this.dom ;
	}
	get type(){return "tab9"}
	
	static create(){
		return new 	tab9();
	}
	show(){
		return this.name;
	}
}


class tree1{
	constructor() {
		this.state = false ;
		this.name = "tree1";
		this.dom ;
	}
	get type(){return "tree1"}
	
	static create(){
		return new 	tree1();
	}
	show(){
		return this.name;
	}
}


class pic1{
	constructor() {
		this.state = false ;
		this.name = "pic1";
		this.dom ;
	}
	get type(){return "pic1"}
	
	static create(){
		return new 	pic1();
	}
	show(){
		return this.name;
	}
}

class date{
	constructor() {
		this.state = false ;
		this.name = "date";
		this.dom ;
	}
	get type(){return "date"}
	
	static create(){
		return new 	date();
	}
	show(){
		return this.name;
	}
}


class tree2{
	constructor() {
		this.state = false ;
		this.name = "tree2";
		this.dom ;
	}
	get type(){return "tree2"}
	
	static create(){
		return new 	tree2();
	}
	show(){
		return this.name;
	}
}



class stool{
	constructor() {
		this.state = true ;
		this.name = "stool";
		this.dom ;
	}
	get type(){return "stool"}
	
	static create(){
		return new 	stool();
	}
	show(){
		return this.name;
	}
}

class m2_floor{
	constructor() {
		this.state = true ;
		this.name = "m2_floor";
		this.dom ;
	}
	get type(){return "m2_floor"}
	
	static create(){
		return new 	m2_floor();
	}
	show(){
		return this.name;
	}
}

class m2_wallL{
	constructor() {
		this.state = false ;
		this.name = "m2_wallL";
		this.dom ;
	}
	get type(){return "m2_wallL"}
	
	static create(){
		return new 	m2_wallL();
	}
	show(){
		return this.name;
	}
}
class m2_wallr{
	constructor() {
		this.state = false ;
		this.name = "m2_wallr";
		this.dom ;
	}
	get type(){return "m2_wallr"}
	
	static create(){
		return new 	m2_wallr();
	}
	show(){
		return this.name;
	}
}
class m2_d1{
	constructor() {
		this.state = false ;
		this.name = "m2_d1";
		this.dom ;
	}
	get type(){return "m2_d1"}
	
	static create(){
		return new 	m2_d1();
	}
	show(){
		return this.name;
	}
}

class m2_d2{
	constructor() {
		this.state = false ;
		this.name = "m2_d2";
		this.dom ;
	}
	get type(){return "m2_d2"}
	
	static create(){
		return new 	m2_d2();
	}
	show(){
		return this.name;
	}
}

class m2_glass{
	constructor() {
		this.state = false ;
		this.name = "m2_glass";
		this.dom ;
	}
	get type(){return "m2_glass"}
	
	static create(){
		return new 	m2_glass();
	}
	show(){
		return this.name;
	}
}


class m2_glass2{
	constructor() {
		this.state = false ;
		this.name = "m2_glass2";
		this.dom ;
	}
	get type(){return "m2_glass2"}
	
	static create(){
		return new 	m2_glass2();
	}
	show(){
		return this.name;
	}
}



class m2_glass3{
	constructor() {
		this.state = false ;
		this.name = "m2_glass3";
		this.dom ;
	}
	get type(){return "m2_glass3"}
	
	static create(){
		return new 	m2_glass3();
	}
	show(){
		return this.name;
	}
}

class m2_glass4{
	constructor() {
		this.state = false ;
		this.name = "m2_glass4";
		this.dom ;
	}
	get type(){return "m2_glass4"}
	
	static create(){
		return new 	m2_glass4();
	}
	show(){
		return this.name;
	}
}

class m2_w1{
	constructor() {
		this.state = false ;
		this.name = "m2_w1";
		this.dom ;
	}
	get type(){return "m2_w1"}
	
	static create(){
		return new 	m2_w1();
	}
	show(){
		return this.name;
	}
}

class m2_w2{
	constructor() {
		this.state = false ;
		this.name = "m2_w2";
		this.dom ;
	}
	get type(){return "m2_w2"}
	
	static create(){
		return new 	m2_w2();
	}
	show(){
		return this.name;
	}
}


class m2_c{
	constructor() {
		this.state = false ;
		this.name = "m2_c";
		this.dom ;
	}
	get type(){return "m2_c"}
	
	static create(){
		return new 	m2_c();
	}
	show(){
		return this.name;
	}
}

class m2_c2{
	constructor() {
		this.state = false ;
		this.name = "m2_c2";
		this.dom ;
	}
	get type(){return "m2_c2"}
	
	static create(){
		return new 	m2_c2();
	}
	show(){
		return this.name;
	}
}

class m2_staircase1{
	constructor() {
		this.state = true ;
		this.name = "m2_staircase1";
		this.dom ;
	}
	get type(){return "m2_staircase1"}
	
	static create(){
		return new 	m2_staircase1();
	}
	show(){
		return this.name;
	}
}


class m2_staircase2{
	constructor() {
		this.state = true ;
		this.name = "m2_staircase2";
		this.dom ;
	}
	get type(){return "m2_staircase2"}
	
	static create(){
		return new 	m2_staircase2();
	}
	show(){
		return this.name;
	}
}



class m3_w1{
	constructor() {
		this.state = false ;
		this.name = "m3_w1";
		this.dom ;
	}
	get type(){return "m3_w1"}
	
	static create(){
		return new 	m3_w1();
	}
	show(){
		return this.name;
	}
}

class m3_w2{
	constructor() {
		this.state = false ;
		this.name = "m3_w2";
		this.dom ;
	}
	get type(){return "m3_w2"}
	
	static create(){
		return new 	m3_w2();
	}
	show(){
		return this.name;
	}
}

class m3_w3{
	constructor() {
		this.state = false ;
		this.name = "m3_w3";
		this.dom ;
	}
	get type(){return "m3_w3"}
	
	static create(){
		return new 	m3_w3();
	}
	show(){
		return this.name;
	}
}


class m3_b1{
	constructor() {
		this.state = false ;
		this.name = "m3_b1";
		this.dom ;
	}
	get type(){return "m3_b1"}
	
	static create(){
		return new 	m3_b1();
	}
	show(){
		return this.name;
	}
}


class m3_b2{
	constructor() {
		this.state = false ;
		this.name = "m3_b2";
		this.dom ;
	}
	get type(){return "m3_b2"}
	
	static create(){
		return new 	m3_b2();
	}
	show(){
		return this.name;
	}
}

class m3_b3{
	constructor() {
		this.state = false ;
		this.name = "m3_b3";
		this.dom ;
	}
	get type(){return "m3_b3"}
	
	static create(){
		return new 	m3_b3();
	}
	show(){
		return this.name;
	}
}

class m3_b4{
	constructor() {
		this.state = false ;
		this.name = "m3_b4";
		this.dom ;
	}
	get type(){return "m3_b4"}
	
	static create(){
		return new 	m3_b4();
	}
	show(){
		return this.name;
	}
}

class m3_b5{
	constructor() {
		this.state = false ;
		this.name = "m3_b5";
		this.dom ;
	}
	get type(){return "m3_b5"}
	
	static create(){
		return new 	m3_b5();
	}
	show(){
		return this.name;
	}
}

class m3_b6{
	constructor() {
		this.state = false ;
		this.name = "m3_b6";
		this.dom ;
	}
	get type(){return "m3_b6"}
	
	static create(){
		return new 	m3_b6();
	}
	show(){
		return this.name;
	}
}

class m3_b7{
	constructor() {
		this.state = false ;
		this.name = "m3_b7";
		this.dom ;
	}
	get type(){return "m3_b7"}
	
	static create(){
		return new 	m3_b7();
	}
	show(){
		return this.name;
	}
}

class m3_b8{
	constructor() {
		this.state = false ;
		this.name = "m3_b8";
		this.dom ;
	}
	get type(){return "m3_b8"}
	
	static create(){
		return new 	m3_b8();
	}
	show(){
		return this.name;
	}
}

class m3_b9{
	constructor() {
		this.state = false ;
		this.name = "m3_b9";
		this.dom ;
	}
	get type(){return "m3_b9"}
	
	static create(){
		return new 	m3_b9();
	}
	show(){
		return this.name;
	}
}

class m3_wl{
	constructor() {
		this.state = false ;
		this.name = "m3_wl";
		this.dom ;
	}
	get type(){return "m3_wl"}
	
	static create(){
		return new 	m3_wl();
	}
	show(){
		return this.name;
	}
}



class m3_w4{
	constructor() {
		this.state = false ;
		this.name = "m3_w4";
		this.dom ;
	}
	get type(){return "m3_w4"}
	
	static create(){
		return new 	m3_w4();
	}
	show(){
		return this.name;
	}
}


class m3_w5{
	constructor() {
		this.state = false ;
		this.name = "m3_w5";
		this.dom ;
	}
	get type(){return "m3_w5"}
	
	static create(){
		return new 	m3_w5();
	}
	show(){
		return this.name;
	}
}


class m3_wa1{
	constructor() {
		this.state = false ;
		this.name = "m3_wa1";
		this.dom ;
	}
	get type(){return "m3_wa1"}
	
	static create(){
		return new 	m3_wa1();
	}
	show(){
		return this.name;
	}
}

class m3_wa2{
	constructor() {
		this.state = false ;
		this.name = "m3_wa2";
		this.dom ;
	}
	get type(){return "m3_wa2"}
	
	static create(){
		return new 	m3_wa2();
	}
	show(){
		return this.name;
	}
}

class m3_wa3{
	constructor() {
		this.state = false ;
		this.name = "m3_wa3";
		this.dom ;
	}
	get type(){return "m3_wa3"}
	
	static create(){
		return new 	m3_wa3();
	}
	show(){
		return this.name;
	}
}



class m3_wd3{
	constructor() {
		this.state = false ;
		this.name = "m3_wd3";
		this.dom ;
	}
	get type(){return "m3_wd3"}
	
	static create(){
		return new 	m3_wd3();
	}
	show(){
		return this.name;
	}
}

class m3_wd4{
	constructor() {
		this.state = false ;
		this.name = "m3_wd4";
		this.dom ;
	}
	get type(){return "m3_wd4"}
	
	static create(){
		return new 	m3_wd4();
	}
	show(){
		return this.name;
	}
}


class m3_d1{
	constructor() {
		this.state = false ;
		this.name = "m3_d1";
		this.dom ;
	}
	get type(){return "m3_d1"}
	
	static create(){
		return new 	m3_d1();
	}
	show(){
		return this.name;
	}
}


class m3_d2{
	constructor() {
		this.state = false ;
		this.name = "m3_d2";
		this.dom ;
	}
	get type(){return "m3_d2"}
	
	static create(){
		return new 	m3_d2();
	}
	show(){
		return this.name;
	}
}

class m3_tab1{
	constructor() {
		this.state = false ;
		this.name = "m3_tab1";
		this.dom ;
	}
	get type(){return "m3_tab1"}
	
	static create(){
		return new 	m3_tab1();
	}
	show(){
		return this.name;
	}
}
class m3_tab2{
	constructor() {
		this.state = false ;
		this.name = "m3_tab2";
		this.dom ;
	}
	get type(){return "m3_tab2"}
	
	static create(){
		return new 	m3_tab2();
	}
	show(){
		return this.name;
	}
}
class m3_tab3{
	constructor() {
		this.state = false ;
		this.name = "m3_tab3";
		this.dom ;
	}
	get type(){return "m3_tab3"}
	
	static create(){
		return new 	m3_tab3();
	}
	show(){
		return this.name;
	}
}
class m3_cabinet1{
	constructor() {
		this.state = false ;
		this.name = "m3_cabinet1";
		this.dom ;
	}
	get type(){return "m3_cabinet1"}
	
	static create(){
		return new 	m3_cabinet1();
	}
	show(){
		return this.name;
	}
}

class m3_cabinet2{
	constructor() {
		this.state = false ;
		this.name = "m3_cabinet2";
		this.dom ;
	}
	get type(){return "m3_cabinet2"}
	
	static create(){
		return new 	m3_cabinet2();
	}
	show(){
		return this.name;
	}
}
class m3_tab4{
	constructor() {
		this.state = false ;
		this.name = "m3_tab4";
		this.dom ;
	}
	get type(){return "m3_tab4"}
	
	static create(){
		return new 	m3_tab4();
	}
	show(){
		return this.name;
	}
}
class m3_tab5{
	constructor() {
		this.state = false ;
		this.name = "m3_tab5";
		this.dom ;
	}
	get type(){return "m3_tab5"}
	
	static create(){
		return new 	m3_tab5();
	}
	show(){
		return this.name;
	}
}
class m3_tab6{
	constructor() {
		this.state = false ;
		this.name = "m3_tab6";
		this.dom ;
	}
	get type(){return "m3_tab6"}
	
	static create(){
		return new 	m3_tab6();
	}
	show(){
		return this.name;
	}
}


class m3_floor{
	constructor() {
		this.state = true ;
		this.name = "m3_floor";
		this.dom ;
	}
	get type(){return "m3_floor"}
	
	static create(){
		return new 	m3_floor();
	}
	show(){
		return this.name;
	}
}


class m3_ct1{
	constructor() {
		this.state = false ;
		this.name = "m3_ct1";
		this.dom ;
	}
	get type(){return "m3_ct1"}
	
	static create(){
		return new 	m3_ct1();
	}
	show(){
		return this.name;
	}
}

class m3_ct2{
	constructor() {
		this.state = true ;
		this.name = "m3_ct2";
		this.dom ;
	}
	get type(){return "m3_ct2"}
	
	static create(){
		return new 	m3_ct2();
	}
	show(){
		return this.name;
	}
}




class m4_floor{
	constructor() {
		this.state = true ;
		this.name = "m4_floor";
		this.dom ;
	}
	get type(){return "m4_floor"}
	
	static create(){
		return new 	m4_floor();
	}
	show(){
		return this.name;
	}
}



class m4_wall1{
	constructor() {
		this.state = false ;
		this.name = "m4_wall1";
		this.dom ;
	}
	get type(){return "m4_wall1"}
	
	static create(){
		return new 	m4_wall1();
	}
	show(){
		return this.name;
	}
}

class m4_wall2{
	constructor() {
		this.state = false ;
		this.name = "m4_wall2";
		this.dom ;
	}
	get type(){return "m4_wall2"}
	
	static create(){
		return new 	m4_wall2();
	}
	show(){
		return this.name;
	}
}
class m4_wall3{
	constructor() {
		this.state = false ;
		this.name = "m4_wall3";
		this.dom ;
	}
	get type(){return "m4_wall3"}
	
	static create(){
		return new 	m4_wall3();
	}
	show(){
		return this.name;
	}
}
class m4_wall4{
	constructor() {
		this.state = false ;
		this.name = "m4_wall4";
		this.dom ;
	}
	get type(){return "m4_wall4"}
	
	static create(){
		return new 	m4_wall4();
	}
	show(){
		return this.name;
	}
}

class m4_wall5{
	constructor() {
		this.state = false ;
		this.name = "m4_wall5";
		this.dom ;
	}
	get type(){return "m4_wall5"}
	
	static create(){
		return new 	m4_wall5();
	}
	show(){
		return this.name;
	}
}
class m4_wall6{
	constructor() {
		this.state = false ;
		this.name = "m4_wall6";
		this.dom ;
	}
	get type(){return "m4_wall6"}
	
	static create(){
		return new 	m4_wall6();
	}
	show(){
		return this.name;
	}
}
class m4_wall7{
	constructor() {
		this.state = false ;
		this.name = "m4_wall7";
		this.dom ;
	}
	get type(){return "m4_wall7"}
	
	static create(){
		return new 	m4_wall7();
	}
	show(){
		return this.name;
	}
}
class m4_wall8{
	constructor() {
		this.state = false ;
		this.name = "m4_wall8";
		this.dom ;
	}
	get type(){return "m4_wall8"}
	
	static create(){
		return new 	m4_wall8();
	}
	show(){
		return this.name;
	}
}
class m4_wall9{
	constructor() {
		this.state = false ;
		this.name = "m4_wall9";
		this.dom ;
	}
	get type(){return "m4_wall9"}
	
	static create(){
		return new 	m4_wall9();
	}
	show(){
		return this.name;
	}
}
class m4_wall10{
	constructor() {
		this.state = false ;
		this.name = "m4_wall10";
		this.dom ;
	}
	get type(){return "m4_wall10"}
	
	static create(){
		return new 	m4_wall10();
	}
	show(){
		return this.name;
	}
}
class m4_wall11{
	constructor() {
		this.state = false ;
		this.name = "m4_wall11";
		this.dom ;
	}
	get type(){return "m4_wall11"}
	
	static create(){
		return new 	m4_wall11();
	}
	show(){
		return this.name;
	}
}
class m4_wall12{
	constructor() {
		this.state = false ;
		this.name = "m4_wall12";
		this.dom ;
	}
	get type(){return "m4_wall12"}
	
	static create(){
		return new 	m4_wall12();
	}
	show(){
		return this.name;
	}
}
class m4_wall13{
	constructor() {
		this.state = false ;
		this.name = "m4_wall13";
		this.dom ;
	}
	get type(){return "m4_wall13"}
	
	static create(){
		return new 	m4_wall13();
	}
	show(){
		return this.name;
	}
}

class m4_tab1{
	constructor() {
		this.state = false ;
		this.name = "m4_tab1";
		this.dom ;
	}
	get type(){return "m4_tab1"}
	
	static create(){
		return new 	m4_tab1();
	}
	show(){
		return this.name;
	}
}

class m4_tab2{
	constructor() {
		this.state = false ;
		this.name = "m4_tab2";
		this.dom ;
	}
	get type(){return "m4_tab2"}
	
	static create(){
		return new 	m4_tab2();
	}
	show(){
		return this.name;
	}
}

class m4_tab3{
	constructor() {
		this.state = false ;
		this.name = "m4_tab3";
		this.dom ;
	}
	get type(){return "m4_tab3"}
	
	static create(){
		return new 	m4_tab3();
	}
	show(){
		return this.name;
	}
}


class m4_chair{
	constructor() {
		this.state = true ;
		this.name = "m4_chair";
		this.dom ;
	}
	get type(){return "m4_chair"}
	
	static create(){
		return new 	m4_chair();
	}
	show(){
		return this.name;
	}
}
class m4_tab4{
	constructor() {
		this.state = false ;
		this.name = "m4_tab4";
		this.dom ;
	}
	get type(){return "m4_tab4"}
	
	static create(){
		return new 	m4_tab4();
	}
	show(){
		return this.name;
	}
}
class m4_tab5{
	constructor() {
		this.state = false ;
		this.name = "m4_tab5";
		this.dom ;
	}
	get type(){return "m4_tab5"}
	
	static create(){
		return new 	m4_tab5();
	}
	show(){
		return this.name;
	}
}
class m4_tab6{
	constructor() {
		this.state = false ;
		this.name = "m4_tab6";
		this.dom ;
	}
	get type(){return "m4_tab6"}
	
	static create(){
		return new 	m4_tab6();
	}
	show(){
		return this.name;
	}
}

class m4_chair2{
	constructor() {
		this.state = true ;
		this.name = "m4_chair2";
		this.dom ;
	}
	get type(){return "m4_chair2"}
	
	static create(){
		return new 	m4_chair2();
	}
	show(){
		return this.name;
	}
}

class m4_chair3{
	constructor() {
		this.state = true ;
		this.name = "m4_chair3";
		this.dom ;
	}
	get type(){return "m4_chair3"}
	
	static create(){
		return new 	m4_chair3();
	}
	show(){
		return this.name;
	}
}

class m4_cabinet1{
	constructor() {
		this.state = false ;
		this.name = "m4_cabinet1";
		this.dom ;
	}
	get type(){return "m4_cabinet1"}
	
	static create(){
		return new 	m4_cabinet1();
	}
	show(){
		return this.name;
	}
}
class m4_cabinet2{
	constructor() {
		this.state = false ;
		this.name = "m4_cabinet2";
		this.dom ;
	}
	get type(){return "m4_cabinet2"}
	
	static create(){
		return new 	m4_cabinet2();
	}
	show(){
		return this.name;
	}
}

class m4_cmche1{
	constructor() {
		this.state = false ;
		this.name = "m4_cmche1";
		this.dom ;
	}
	get type(){return "m4_cmche1"}
	
	static create(){
		return new 	m4_cmche1();
	}
	show(){
		return this.name;
	}
}
class m4_cmche2{
	constructor() {
		this.state = false ;
		this.name = "m4_cmche2";
		this.dom ;
	}
	get type(){return "m4_cmche2"}
	
	static create(){
		return new 	m4_cmche2();
	}
	show(){
		return this.name;
	}
}

class m4_tree1{
	constructor() {
		this.state = false ;
		this.name = "m4_tree1";
		this.dom ;
	}
	get type(){return "m4_tree1"}
	
	static create(){
		return new 	m4_tree1();
	}
	show(){
		return this.name;
	}
}
class m4_tree2{
	constructor() {
		this.state = false ;
		this.name = "m4_tree2";
		this.dom ;
	}
	get type(){return "m4_tree2"}
	
	static create(){
		return new 	m4_tree2();
	}
	show(){
		return this.name;
	}
}

 map1u = {
	 
	'w':Window1,
	'1':Wall_1,
	'2':Floor,
	'0':Wall_3,
	'z':Wall_left1,
	'c':Wall_right1,
	'l':Wall_left,
	'r':Wall_right,
	'D':Door,
	'a':Wall_m,
	't':Wall_b,
	'g':Wall_l,
	'b':Wall_lb,
	'n':Wall_n,
	'o':Wall_o,
	'u':Wall_u,
	'7':b1,
	'8':b2,
	'9':b3,
	'5':tb1,
	'6':tb2,
	'3':tab1,
	'4':tab2,
	'+':tab3,
	'-':tab4,
	'.':tab5,
	'*':tab6,
	'/':tab7,
	'=':tab8,
	'_':tab9,
	'@':tree1,
	'!':tree2,
	'&':stool,
	'p':pic1,
	'd':date,
	
}
 map2u = {
	 
	'w':Window1,
	'1':Wall_1,
	'2':m2_floor,
	'0':Wall_3,
	'c':m2_c,
	'l':m2_wallL,
	'r':m2_wallr,
	'd':m2_d1,
	'f':m2_d2,
	'm':m2_glass,
	'n':m2_glass2,
	'v':m2_glass3,
	'b':m2_glass4,
	'z':m2_w1,
	'x':m2_w2,
	'a':m2_c2,
	'g':m2_staircase1,
	'h':m2_staircase2,
}
map3u = {
	
	'2':m3_floor,
	'q':m3_w1,
	'w':m3_w2,
	'e':m3_w3,
	'r':m3_b1,
	't':m3_b2,
	'y':m3_b3,
	'u':m3_b4,
	'i':m3_b5,
	'o':m3_b6,
	'p':m3_b7,
	'a':m3_b8,
	's':m3_b9,
	'l':m3_wl,
	'z':m3_w4,
	'x':m3_w5,
	'f':m3_wa1,
	'g':m3_wa2,
	'h':m3_wa3,
	'j':m3_wd3,
	'k':m3_wd4,
	'n':m3_d1,
	'm':m3_d2,
	'4':m3_tab1,
	'5':m3_tab2,
	'6':m3_tab3,
	'7':m3_tab4,
	'8':m3_tab5,
	'9':m3_tab6,
	'+':m3_ct1,
	'-':m3_ct2,
	'[':m3_cabinet1,
	']':m3_cabinet2,
	
}
map4u = {
	
	'2':m4_floor,
	'z':m4_wall1,
	'1':m4_wall2,
	'c':m4_wall3,
	'g':m4_wall4,
	'a':m4_wall5,
	'0':m4_wall6,
	'l':m4_wall7,
	'r':m4_wall8,
	'b':m4_wall9,
	'u':m4_wall10,
	'n':m4_wall11,
	't':m4_wall12,
	'o':m4_wall13,
	'3':m4_tab1,
	'4':m4_tab2,
	'5':m4_tab3,
	'6':m4_chair,
	'7':m4_tab4,
	'8':m4_tab5,
	'9':m4_tab6,
	'+':m4_chair2,
	'-':m4_chair3,
	'*':m4_cabinet1,
	'/':m4_cabinet2,
	'[':m4_cmche1,
	']':m4_cmche2,
	'j':m4_tree1,
	'k':m4_tree2,
	
}



function run(){


	map = mapp[i].trim().split("\n").map(m =>[...m]);
	map.map((row , x)=>{
		row.map((ch , y)=>{
			if(mapp[i]==starthouse)
			{
				map[x][y] = map1u[ch].create();
			}
			else if(mapp[i]==map2)
			{
					map[x][y] = map2u[ch].create();
			}
			else if(mapp[i]==map3)
			{
					map[x][y] = map3u[ch].create();
			}
			else if(mapp[i]==map4)
			{
					map[x][y] = map4u[ch].create();
			}
		})
	})
}



function Dw(){
	pan = document.createElement("div")	
	level = document.createElement("div");
	level.style.height = map.length*px +"px";
	level.style.width = map[0].length*px +"px";
		
	map.map((row,x)=>{
		row.map((ch , y )=>{
			let div =  document.createElement("div");
			div.className = ch.name;
			map[x][y].dom = div ;
			level.appendChild(div)
		})
	})
	level.style.position = "relative"
	pan.style.border="1px solid red"
	pan.className="wd";
	level.style.border="1px solid white"
	pan.appendChild(level)
	 pan.style.width  = "1920px"
	 pan.style.height = "960px"
	pan.style.overflow =  "scroll";
	pan.style
	document.body.appendChild(pan)
}

function Showmap(){
	
	run();
	
	Dw();
	
}