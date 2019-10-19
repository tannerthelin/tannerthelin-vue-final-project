<template>
    <div class="main-container">
        <div class="image-container"></div>
        <h2>{{game.title}}</h2>
        <h3>Jan 8, 2020</h3>
        <p>[rating here]</p>
    </div>
</template>

<script>
export default {
    props: ['game']
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
    }

    h2 {
        font-weight: 500;
    }

</style>
