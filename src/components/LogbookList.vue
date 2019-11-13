<template>
    <div class="logbook-container">
    <h3>My logbook</h3>
        <div class="logbook">            
            <logged-game v-for="game in loggedGames" :game="game" :key="game.id"></logged-game>
        </div>
    </div>
</template>

<script>
import LoggedGame from "./LoggedGame.vue";
import {HeartRating} from 'vue-rate-it';


export default {
    computed: {
        loggedGames() {
            return this.$store.getters.loggedGames;
        }
    },
    data () {
        return {
            
        }
    },
    components: {
        loggedGame: LoggedGame
    }
}
</script>

<style>
    .logbook-container {
        margin-top: 80px;
        padding: 16px;
    }

    .logbook {
        display: flex;
        margin: 0 -13px;
        flex-wrap: wrap;
    }
</style>
