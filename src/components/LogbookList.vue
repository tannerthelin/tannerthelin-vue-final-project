<template>
    <div class="logbook-container">
    <h3>My logbook</h3>
        <div class="logbook">            
            <logged-game v-for="game in loggedGames" :key="game.title" :game="game" v-rateMe></logged-game>
        </div>
    </div>
</template>

<script>
import LoggedGame from "./LoggedGame.vue";
import {HeartRating} from 'vue-rate-it';


export default {
    computed: {
        getLogged() {
          return this.$store.state.loggedGames;
        },
    },
    directives: {
        rateMe: {
            bind: function (el, binding, vnode) {
                // Check if the rating is zero
                if (vnode.componentInstance.game.rating === 0){
                    // If it is, set the 'ratingZero' variable to true
                    vnode.componentInstance.ratingZero = true;
                }                
            }
        }
    },
    data () {
        return {
            loggedGames: this.$store.state.loggedGames,
        }
    },
    components: {
        loggedGame: LoggedGame
    }
}
</script>

<style>
    .logbook-container {
        margin-top: 20px;
        padding: 16px;
    }

    .logbook {
        display: flex;
        margin: 0 -13px;
        flex-wrap: wrap;
    }
</style>
