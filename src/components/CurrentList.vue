<template>
    <div class="flex-grow">
        <h3>Currently playing</h3>
        <div class="list-container">

            <current-game v-for="game in currentGames" :key="game.title" :game="game"></current-game>
            
            <button class="add-button" v-on:click="addSelected = !addSelected"><i class="fa fa-plus-square-o"></i>Add new</button>     
            <autocomplete
                class="autocomplete-input"
                source="https://api.rawg.io/api/games?search="
                results-property="results"
                input-class="autocomplete-input"
                results-display="name"
                placeholder="Search for game..."
                v-show= "addSelected"
                @selected= "submitSearch">
            </autocomplete>           
        </div>
    </div>
</template>

<script>
import CurrentGame from './CurrentGame.vue';
import Autocomplete from 'vuejs-auto-complete';

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
        }
    },
    components: {
        currentGame: CurrentGame,
        Autocomplete
    },
    methods: {
        submitSearch(input) {
            var searchObject = {
                id: 1,
                title: '',
                numberOfDays: 0,
                rating: 0,
                bgImage: ''
            }
            searchObject.title = input.display;
            searchObject.bgImage = input.selectedObject.background_image;
            searchObject.id = input.value;
            this.$store.state.currentGames.push(searchObject);
            this.addSelected = false;
            this.$store.state.activity.push('You added ' + searchObject.title + ' to your currently playing.');
            this.clear();
        }
    }
}
</script>

<style>

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

    .autocomplete {
        max-width: 400px !important;
        margin-top: 20px !important;
        border-radius: 4px !important;
    }

    .autocomplete__box {
        background-color: #F1F1F1 !important;
        border: none !important;
        padding-right: 16px !important;
    }

    .autocomplete-input {
        background-color: #F1F1F1 !important;
        padding: 12px 0px 12px 16px;
        font-size: 16px;
    }

</style>
