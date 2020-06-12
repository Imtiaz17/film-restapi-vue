<template>
    <div class="container">
        <div class="columns is-mobile is-centered mt-20">
            <div class="column is-6-desktop is-12-mobile" >
                <div class="box" v-for="(film,i) in films" :key="i" >
                    <router-link :to="{name:'filmpost',params:{slug:film.slug}}">
                    <article class="media">
                        <div class="media-left">
                            <figure class="image is-128x128">
                                <img :src="getImage(film.image)" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>{{film.name}}</strong>
                                    <span class="rating">
                                       <a class="level-item" aria-label="like">
                                        <span class="icon is-small">
                                            <i class="fas fa-heart" aria-hidden="true"></i>
                                        </span>
                                         {{film.rating}}.00
                                    </a>
                               </span>
                                    <br>
                                    {{film.description}}
                                </p>
                            </div>
                        
                        </div>
                    </article>
                </router-link>
                </div>

                <button v-if="films.length>0" :class="isload?'is-loading':''" class="button is-info" @click="loadmore">Load More</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isload:false,
            films:[],
            page:1
        }
    },
    computed: {

    },
    created() {
        axios.get('/api/films?page=' + this.page)
        .then(res=>{
            this.page += 1
            this.films=res.data.data
        })
    },
    mounted() {

    },
    methods: {
        getImage(pic)
        {
            return pic
        },
        loadmore()
        {
            this.isload = true
             axios.get('api/films?page=' + this.page)
                .then(response => {
                    this.films.push(...response.data.data);
                    this.page += 1
                    this.isload = false
                })
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
