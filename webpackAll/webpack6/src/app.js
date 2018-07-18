import Layer from './components/layer/layer.js';
import './css/main.css';
var App=function (){
	console.log("sd_app");
	var dom=document.getElementById('app');
	var layer=new Layer();
	dom.innerHTML=layer.tplejs({
		name:'2222',
		arr:['s',123,32]
	});
}
App();