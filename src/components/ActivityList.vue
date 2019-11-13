<template>
    <div class="flex-grow">
        <h3>Activity</h3>
        <div class="list-container">
            <p class="activity-log" v-for="log in loggedActivity" :log="log" :key="log.id">{{log}}</p>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        loggedActivity() {
            return this.$store.getters.loggedActivity;
        }
    },
    data() {
        return {
            // activityLog: ["Deleted 'Breath of the Wild' from your Currently Playing", "Added 'Untitled Goose Game' to your Currently Playing"]
        }
    }
}
</script>

<style>
    .activity-log {
        color: #818181;
        background-color: #F1F1F1;
        padding: 12px;
        margin: 0px;
        margin-bottom: 12px;
    }
</style>
