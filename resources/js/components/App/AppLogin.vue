<template>
    <div class="container">
        <div class="columns is-mobile is-centered mt-20">
            <div class="column is-6-desktop is-12-mobile">
                <div class="box">
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input class="input" type="email" placeholder="Email" v-model="form.email">
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input" type="password" placeholder="Password" v-model="form.password">
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control">
                            <button class="button is-success" @click="login">
                                Login
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        	form:{
        		email:'',
        		password:''
        	}

        }
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    methods: {
    	login()
    	{
			axios.post('/api/login',this.form)
			   .then(res => {
			   	this.$store.dispatch("saveToken", {
                    token: res.data
                  });
			   })
    	}
    },
    watch: {

    }
};

</script>
<style scoped>
</style>
