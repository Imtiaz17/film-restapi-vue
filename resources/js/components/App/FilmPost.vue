<template>
    <div class="container"> 
    	<div class="columns">
    		<div class="column is-6">
    			{{slug}}
    		</div>
    	</div>
    </div>
        
</template>
<script>
export default {
    data() {
        return {
        	slug: this.$route.params.slug
        }
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    watch: {

    }
};

</script>
<style scoped>
</style>