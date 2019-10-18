<template>
    <div class="flex-grow">
        <h3>Currently playing</h3>
        <div class="list-container">
            <current-game></current-game>
        </div>
    </div>
</template>

<script>
import CurrentGame from './CurrentGame.vue';

export default {
    components: {
        currentGame: CurrentGame
    }
    
}
</script>

<style>

</style>
