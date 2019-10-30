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
                <div class="complete-button" v-tooltip="'Mark as Complete'"></div>
                <div class="trash-button" v-tooltip="'Remove'"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import { VTooltip, VPopover, VClosePopover } from 'v-tooltip'

    // Vue.directive('tooltip', VTooltip)
    // Vue.directive('close-popover', VClosePopover)
    // Vue.component('v-popover', VPopover)

    export default {
        props: ['game'],
        directives: {
            'tooltip': VTooltip,
            'close-popover': VClosePopover,
            'v-popover': VPopover
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
