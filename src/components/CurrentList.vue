<template>
    <div class="flex-grow">
        <h3>Currently playing</h3>
        <div class="list-container">
            <current-game v-for="game in currentGames" :game="game" :key="game"></current-game>
        </div>
    </div>
</template>

<script>
import CurrentGame from './CurrentGame.vue';

export default {
    data () {
        return {
            currentGames: [
                  {title:"Untitled Goose Game", numberOfDays: 5},
                  {title:"Hollow Knight", numberOfDays: 12},
                  {title:"Modern Warfare", numberOfDays: 24},
              ]
        };
    },
    components: {
        currentGame: CurrentGame
    },
    methods: {

    }
    
}
</script>

<style>

</style>
