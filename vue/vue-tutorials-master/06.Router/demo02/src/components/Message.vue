<template>
	<ul>
		<li>Message 01</li>
		<li>{{price}}</li>
		<li>Message 03</li>
	</ul>
</template>
<script>
  export default {
    name: 'message',
    props: ['price'],

  }
</script>