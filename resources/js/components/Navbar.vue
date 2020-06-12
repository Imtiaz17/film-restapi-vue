<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
                Film-Mania
            </router-link>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
            </div>
            <div class="navbar-end" v-if="loggedin">
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        <p>{{username}}</p>
                    </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item" @click="logout">
                            Logout
                        </a>
                    </div>
                </div>
            </div>
            <div class="navbar-end" v-else>
                <div class="navbar-item">
                    <div class="buttons">
                        <router-link to="/signup" class="button is-primary">
                            Sign Up
                        </router-link>
                        <router-link to="/login" class="button is-info">
                            Log in
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        loggedin() {
            return this.$store.getters.loggedIn
        },
        username() {
            return this.$store.getters.user.name
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        logout(){
            axios.post('/api/logout')
            .then(res=>{
                 this.$store.dispatch('removeuser')
            })
           
        }
    },
    watch: {

    }
};

</script>
<style scoped>
</style>
