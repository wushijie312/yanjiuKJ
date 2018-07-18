import './layer.less';
import tpl from './layer.html';
import tplejs from './layer.ejs';
function layer(){
	return {
		name:'layer',
		tpl:tpl,
		tplejs:tplejs
	}
}
export default layer;