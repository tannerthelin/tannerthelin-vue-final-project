<template>
    <div class="current-container">
        <div class="current-content">
            <div class="left-content">
                <div class="image-container"></div>
                <div class="text-container">
                    <h2>{{ game.title }}</h2>
                    <h3>Been playing for {{ game.numberOfDays }} days</h3>
                </div>
            </div>
            <div class="current-actions">
                <div class="complete-button" @click="completeGame(game)"></div>
                <div class="trash-button" @click="deleteGame(game)"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        props: ['game'],
        methods: {
            deleteGame(game) {
                this.$store.dispatch("deleteGame", game);
            },
            completeGame(game) {
                this.$store.dispatch("completeGame", game);
            },
            completeGame: function() {
                let completed = this.game;
                let index = this.$store.state.currentGames.indexOf(completed);

                // Remove game from the "Current" list
                this.$store.state.currentGames.splice(index, 1);
                
                // Get current date
                var date = new Date();

                // Convert date to simpler format
                var month = date.toLocaleString("en-US", { month: 'short' });
                var currentDate = date.getDate() + ' ' + month + ' ' + date.getFullYear();

                // Set date
                completed.finished = currentDate;

                // Add game to the logbook
                this.$store.state.loggedGames.unshift(completed);

                // Push the event to the Activity log
                this.$store.state.activity.push("You marked " + completed.title + " as completed.");

            }
        }
    }
</script>

<style scoped>

    .small {
        opacity: 0;
        transition: .14s ease;
    }

    .current-container {
        background-color: white;
        border-radius: 4px;
        box-shadow: 0px 3px 12px 0px rgba(0,0,0,0.05);
        margin-bottom: 12px;

    }

    .current-container:hover .current-actions{
        opacity: 1;
    }

    .current-content {
        display: flex;
        justify-content: space-between;
        align-content: stretch;
        padding: 16px;
    }

    .image-container {
        width: 42px;
        height: 42px;
        background-image: url('../assets/images/placeholder-small.png');
        display: inline-block;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .left-content {
        display: flex;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 16px;
    }

    h3 {
        font-size: 13px;
        margin: 0px;
        margin-top: 3px;
    }

    .current-actions {
        height: 40px;
        display: flex;
        justify-content: stretch;
        align-content: stretch;
        opacity: 0;
        transition: 0.15s ease;
    }

    .complete-button {
        width: 33px;
        background-position: center;
        background-image: url('../assets/images/icon-complete.png');
        background-size: contain;
        display: block;
        background-repeat: no-repeat;
        cursor: pointer;
    }

    .complete-button:hover {
        background-image: url('../assets/images/icon-complete-hover.png');
    }

    .trash-button {
        width: 33px;
        background-position: center;
        background-image: url('../assets/images/icon-trash.png');
        background-size: contain;
        display: block;
        background-repeat: no-repeat;
        cursor: pointer;
    }

    .trash-button:hover {
        background-image: url('../assets/images/icon-trash-hover.png');
    }

    

</style>
