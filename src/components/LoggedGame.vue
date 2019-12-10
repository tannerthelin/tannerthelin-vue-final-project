<template>
    <div class="main-container">
        <div 
            class="image-container" 
            v-bind:class = "{ rateMe: ratingZero }" 
            v-bind:style="{ backgroundImage: gameImage }"
            >
            <div id="overlay" v-if="ratingZero"></div>                
            <div class="trash-button" @click="deleteLogged(game)"></div>
        </div>
        <h2 class="game-title">{{game.shortTitle}}</h2>
        <h3 placeholder= "Date here">{{game.finished}}</h3>
        <heart-rating 
            v-model="myRating"
            :item-size="10"
            inactive-color="#D8D8D9"
            active-color="#F56A72"
            :increment="1"
            border-color="transparent"
            :show-rating="false"
            @rating-selected="ratingChanged"
        ></heart-rating>
        <div v-if="ratingZero" class="rating-tooltip">
                    <p>Rate me!</p>
                </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import {HeartRating} from 'vue-rate-it'
    import axios from 'axios'

    export default {
        props: ['game', 'rating'],
        data () {
            return {
                id: '',
                myRating: this.game.rating,
                ratingZero: false,
                gameImage: 'url(' + this.game.bgImage + ')',
            }
        },
        methods: {
            modifyGame(game) {
                this.$store.dispatch("modifyGame", game);
            },
            updateRating(i) {
                this.game.rating = i;
                this.$store.dispatch("modifyGame", game);
            },
            ratingChanged() {
                this.game.rating = this.myRating;
                this.ratingZero = false;
                this.$store.dispatch("modifyGame", this.game);
            },
            deleteLogged(game) {
                this.$store.dispatch("deleteLogged", game);
            },
        },
        created() {
            this.$store.dispatch("modifyGame", this.game);
            return this.$store.getters.loggedGames;            
        },
        watch: {
            getLogged() {
                return this.$store.state.loggedGames;
            }                   
        },
        components: {
            HeartRating
        },
        computed: {
            checkRating() {
                if (this.game.rating < 1) {
                    console.log('Rate me!');
                };
            }
        }
    }
</script>

<style scoped>

    .rating-tooltip {
        /* background-color: rgba(0,0,0,0.25); */
        background-color: transparent;
        color: black;
        text-transform: uppercase;
        font-size: 9px;
        letter-spacing: 1px;
        text-align: center;
        font-weight: 600;
        border-radius: 200px;
        /* max-width: 80px; */
        /* padding: 4px 8px; */
        position: absolute;
        bottom: 4px;
        right: 0px;
        /* border: 2px solid white; */
        z-index: 3;
    }

    #overlay {
        width: 100%; /* Full width (cover the whole page) */
        height: 100%; /* Full height (cover the whole page) */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255,255,255,0.7); /* Black background with opacity */
        z-index: 2;
    }

    .rating-tooltip p {
        padding: 0px;
        margin: 0px;
    }
    
    .main-container {
        width: 132px;
        margin: 0 13px;
        margin-bottom: 64px;
        position: relative;
    }

    .image-container {
        background-image: url('../assets/images/placeholder-large.png');
        width: 100%;
        height: 170px;
        background-size: cover;
        background-position: center;
        border-radius: 4px;
        box-shadow: 0px 11px 14px 0px rgba(0,0,0,0.05);
        margin-bottom: 12px;
        position: relative;
    }

    h3 {
        margin: 0px;
        margin-top: 5px;
        margin-bottom: 10px;
    }

    h2 {
        font-weight: 500;
    }

    .game-title {
        white-space: nowrap;
    }

    .main-container:hover .trash-button{
        opacity: 1;
    }

    .trash-button {
        width: 33px;
        opacity: 0;
        background-position: center;
        background-image: url('../assets/images/White-Trash.png');
        background-size: contain;
        display: block;
        position: absolute;
        right: 5px;
        top: 0px;
        background-repeat: no-repeat;
        cursor: pointer;
        z-index: 10;
        height: 40px;
        transition: .1s ease;
    }

    .trash-button:hover {
        background-image: url('../assets/images/White-Trash-Hover.png');
    }


</style>