<template>
    <div>
        <nav-bar></nav-bar>
       <router-view />
        <app-footer></app-footer>
    </div>
    
</template>

<script>
export default {
    components:{
    	navBar: () => import('./Navbar'),
    	AppFooter: () => import('./AppFooter'),
    }

}
</script>

<style>

</style>
