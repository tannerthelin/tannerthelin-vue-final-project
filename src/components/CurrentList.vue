<template>
    <div class="flex-grow">
        <h3>Currently playing</h3>
        <div class="list-container">

            <current-game v-for="game in currentGames" :key="game.title" :game="game"></current-game>
            
            <button class="add-button" v-on:click="addSelected = !addSelected"><i class="fa fa-plus-square-o"></i>Add new</button>                
            <input type="text" class="new-input" placeholder="Search for game..." v-show="addSelected">            
        </div>
    </div>
</template>

<script>
import CurrentGame from './CurrentGame.vue';
// import { getCurves } from 'crypto';

export default {
    computed: {
        getCurrent() {
            return this.$store.state.currentGames;
        }
    },
    data () {
        return {
            addSelected: false,
            currentGames: this.$store.state.currentGames,
        };
    },
    components: {
        currentGame: CurrentGame
    },
    // methods: {
    //     currentGames () {
    //         this.array = getCurrent();
    //     },
    // }
}
</script>

<style>
    /* .new-container {
        width: 100%;
        display: flex;
        justify-content: center;
    } */

    .add-button {
        box-shadow: none;
        border: none;
        background-color: #F1F1F1;
        border-radius: 100px;
        color: #818181;
        font-size: 16px;
        padding: 10px 16px;
        margin-top: 10px;
        cursor: pointer;
        text-align: center;
        display: block;
        margin: auto;
        margin-top: 20px;
    }

    .add-button:hover {
        background-color: #EBEBEB;
        color: #636363;
    }

    .add-button:focus {
        outline: none;
    }

    .add-button i {
        margin-right: 10px;
    }

    .new-input {
        width: 90%;
        display: block;
        border-radius: 4px;
        border: none;
        background-color: #F1F1F1;
        height:36px;
        font-size: 16px;
        padding: 16px;
        margin: auto;
        margin-top: 20px;
    }

    .new-input::placeholder {
        color: #B5B5B5;
    }

    .new-input:focus {
        outline: none;
    }

</style>
