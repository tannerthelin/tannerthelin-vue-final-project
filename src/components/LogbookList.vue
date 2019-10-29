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
    data () {
        return {
            loggedGames: [
                  {title:"Untitled Goos...", date: 'Jan 8, 2020'},
                  {title:"Hollow Knight", date: 'Dec 24, 2019'},
                  {title:"Modern Warfare", date: 'Nov 14, 2019'},
                  {title:"Fortnite", date: 'Jan 8, 2020'},
                  {title:"Celeste", date: 'Dec 24, 2019'},
                  {title:"Destiny 2", date: 'Nov 14, 2019'},
                  {title:"Link's Awaken...", date: 'Jan 8, 2020'},
                  {title:"Borderlands 3", date: 'Dec 24, 2019'},
              ]
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
