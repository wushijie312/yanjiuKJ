
<template>
	<ul>
		<li>News 01</li>
		<li>{{msg}}</li>
		<li>News 03</li>
		<sddsd :price="msg" ></sddsd>
	</ul>
	<input type="text" v-model="inputValue" />
		  <span>{{spanValue}}</span>
</template>

<script>
	import sddsd from './SS.vue';
  export default {
			data() {
		        return {
		            msg: 'Welcome to Your Vue.js App',
		            inputValue:'sdsd11',
	             	a: 1,
				    b: 2,
				    c: 3
		        }
		    },
		     created(){
           var self=this;
		      setTimeout(function(){
		      	self.a='dddd';
		      	console.log(self.a);
		      },2000);
        },
	        components: {
		        sddsd
		    },
		    mounted :function(){
		      var self=this;
		      setTimeout(function(){
		      	self.msg='sdssssswushijie';
		      	console.log(self.msg);
		      },2000);
		    },
		    computed : {
		            spanValue : function() {
		                return this.inputValue + '.00';
		            }
		        },
		         watch: {
    // 监控a变量变化的时候，自动执行此函数
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
    // 深度 watcher
    c: {
      handler: function (val, oldVal) { /* ... */ },
      deep: true
    }
  }


	}
</script>
<style>
#app{
	background:#f90;
}
</style>