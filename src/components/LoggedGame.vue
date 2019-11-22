<template>
    <div class="main-container">
        <div class="image-container"></div>
        <h2>{{game.title}}</h2>
        <h3 placeholder= "Date here">{{game.finished}}</h3>
        <heart-rating 
            v-model="rating"
            :item-size="10"
            inactive-color="#D8D8D9"
            active-color="#F56A72"
            :increment="1"
            border-color="transparent"
            :show-rating="false"
        ></heart-rating>
    </div>
</template>

<script>
import {HeartRating} from 'vue-rate-it';

export default {
    components: {
        HeartRating
    },
    data() {
        return {
            rating: this.game.rating
        };
    },
    props: ['game'],
}
</script>

<style scoped>
    
    .main-container {
        width: 132px;
        margin: 0 13px;
        margin-bottom: 64px;
    }

    .image-container {
        background-image: url('../assets/images/placeholder-large.png');
        width: 100%;
        height: 170px;
        background-size: contain;
        border-radius: 4px;
        box-shadow: 0px 11px 14px 0px rgba(0,0,0,0.05);
        margin-bottom: 12px
    }

    h3 {
        margin: 0px;
        margin-top: 5px;
        margin-bottom: 10px;
    }

    h2 {
        font-weight: 500;
    }
</style>
