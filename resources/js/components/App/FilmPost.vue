<template>
    <div class="container">
        <div class="columns is-mobile is-centered mt-20">
            <div class="column is-6-desktop is-12-mobile">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-3by2">
                            <img :src="getPhoto(data.image)" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{{data.name}} ( <small>{{data.country}}</small>)</p>
                                <span class="rating">
                                    <a class="level-item" aria-label="like">
                                        <span class="icon is-small">
                                            <i class="fas fa-heart" aria-hidden="true"></i>
                                        </span>
                                        {{data.rating}}.00
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div class="content">
                            <p>{{data.description}}</p>
                            <br>
                            <p><b>Genre:</b> {{data.genre}}</p>
                            <p><b>Date: </b> {{data.date}}</p>
                            <p><b>Ticket: </b>{{data.ticket}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns is-mobile is-centered mt-20" v-if="loggedin">
            <div class="column is-6-desktop is-12-mobile">
                <div class="card">
                    <div class="card-content">
                        <textarea class="textarea" placeholder="Comment"></textarea>
                        <button class="button is-info mt-10 is-right">Submit</button>
                    </div>
                </div>
            </div>
        </div>
         <div class="columns is-mobile is-centered mt-20" v-else>
            <div class="column is-6-desktop is-12-mobile">
                <div class="card">
                    <div class="card-content">
                        <p>Login to comment</p>
                        <router-link to="/login">
                        <button class="button is-info mt-10 is-right">Login</button>
                    </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns is-mobile is-centered mt-20">
            <div class="column is-6-desktop is-12-mobile">
                <div class="card" v-for="(comment,i) in data.comments" :key="i">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-6">{{comment.name}}</p>
                                 <div class="content">
                                    <p>{{comment.comment}}</p>
                                 </div>
                            </div>
                        </div>
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
            slug: this.$route.params.slug,
            data: '',
        }
    },
    computed: {
        loggedin()
        {
            return this.$store.getters.loggedIn
        }
    },
    created() {
        axios.get(`/api/films/${this.slug}`)
            .then(res => {
                this.data = res.data.data
            })
    },
    mounted() {

    },
    methods: {
        getPhoto(pic) {
            return pic;
        }

    },
    watch: {

    }
};

</script>
<style scoped>
.icon.is-small {
    margin-right: 2px;
}

</style>
