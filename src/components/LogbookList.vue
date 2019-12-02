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
            // directive definition
            bind: function (el, binding, vnode) {
                if (vnode.componentInstance.game.rating === 0){
                    vnode.componentInstance.ratingZero = true;
                    // style.background = "red";
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
