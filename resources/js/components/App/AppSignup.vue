<template>
    <div class="container">
        <div class="columns is-mobile is-centered mt-20">
            <div class="column is-6-desktop is-12-mobile">
                <div class="box">
                    <div class="field">
                        <p class="control">
                            <input class="input" type="text" placeholder="Name" v-model="form.name">
                        </p>
                        <p class="control">
                            <input class="input" type="text" placeholder="Email" v-model="form.email">
                        </p>
                        <p class="control">
                            <input class="input" type="password" placeholder="password" v-model="form.password">
                        </p>
                    </div>
                     <div class="field">
                        <p class="control">
                            <button :class="isload?'is-loading':''" class="button is-success" @click="signup">
                                Sign Up
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
            isload:false,
            form: {
                name: '',
                email: '',
                password: '',

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
        signup()
        {   this.isload=true
            axios.post('api/signup', this.form)
            .then(res=>{
                this.isload=false
                this.$router.push('/login')
            })
        }
    },
    watch: {

    }
};

</script>
<style scoped>
</style>
