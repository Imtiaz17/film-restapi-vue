<template>
    <div class="container">
        <div class="columns is-mobile is-centered mt-20">
            <div class="column is-4-desktop is-12-mobile">
                <div class="box">
                    <div class="field">
                        <p class="control">
                            <input class="input" type="text" placeholder="Name" v-model="form.name">
                        </p>
                        <p class="control">
                            <textarea class="textarea" rows="3" v-model="form.description" placeholder="description"></textarea>
                        </p>
                        <p class="control">
                            <input class="input" type="text" placeholder="Release" v-model="form.release">
                        </p>
                        <p class="control">
                            <input class="input" type="date" placeholder="Date" v-model="form.date">
                        </p>
                        <p class="control">
                            <div class="select">
                                <select v-model="form.rating">
                                    <option value="null" selected hidden>Select a rating</option>
                                    <option v-for="(rating,i) in ratings" :key="i" :value="rating">{{rating}}</option>
                                </select>
                            </div>
                        </p>
                        <p class="control">
                            <input class="input" type="text" placeholder="Ticket" v-model="form.ticket">
                        </p>
                        <p class="control">
                            <input class="input" type="text" placeholder="Price" v-model="form.price">
                        </p>
                        <p class="control">
                            <input class="input" type="text" placeholder="Country" v-model="form.country">
                        </p>
                        <p class="control">
                            <multiselect :multiple="true" placeholder="Select genre" v-model="form.genre" :options="options"></multiselect>
                        </p>
                        <p class="control">
                            <div class="file">
                                <label class="file-label">
                                    <input class="file-input" type="file" name="photo" @change="onPhotoChnage($event)">
                                    <span class="file-cta">
                                        <span class="file-icon">
                                            <i class="fas fa-upload"></i>
                                        </span>
                                        <span class="file-label">
                                            Choose a file…
                                        </span>
                                    </span>
                                </label>
                            </div>
                            <p>{{filename}}</p>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control">
                            <button :class="isload?'is-loading':''" class="button is-success" @click="submit">
                                Submit
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
export default {
    components: { Multiselect },
    data() {
        return {
            isload: false,
            filename: '',
            form: {
                name: "",
                description: "",
                release: "",
                date: "",
                rating: null,
                ticket: "",
                price: "",
                country: "",
                genre: [],
                photo: "",
            },
            ratings: [
                '1',
                '2',
                '3',
                '4',
                '5'
            ],
            options: ['Horror', 'Action', 'Comedy', 'Science Fiction', 'Romantic', 'Thriller', 'Animation', 'Fantasy']
        }
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    methods: {
        onPhotoChnage(e) {
            let file = e.target.files[0];
            this.filename = file.name
            let reader = new FileReader();
            reader.onload = (file) => {
                this.form.photo = reader.result;
            }
            reader.readAsDataURL(file);
        },
        submit() {
            this.isload = true,
                axios.post('/api/films', this.form)
                .then(res => {
                    this.isload = false
                    this.form = null
                    this.$router.push({ name: 'films' })
                })
                .catch(error=>{
                    this.isload=false
                    console.log(error)
                })
        }

    },
    watch: {

    }
};

</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.select {
    width: 100%;
}

select {
    width: 100%;

}

</style>
