<template>
    <div class="flex-grow">
        <h3>Activity</h3>
        <div class="list-container">
            <p class="activity-log" v-for="log in activityLog" :log="log" :key="log.id">{{log}}</p>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        getActivity() {
            return this.$store.state.activity;
        }
    },
    data() {
        return {
            activityLog: this.$store.state.activity
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
