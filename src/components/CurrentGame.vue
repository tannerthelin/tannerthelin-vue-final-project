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
            <div class="menu-dots small"></div>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    props: ['game']
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

    .current-container:hover .small{
        opacity: 1;
    }

    .current-content {
        display: flex;
        justify-content: space-between;
        align-content: center !important;
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

</style>
