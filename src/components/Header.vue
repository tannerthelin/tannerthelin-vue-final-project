<template>
    <div class="header-container">
        <div class="logo-container">
            <img alt="Computer Logo" src="../assets/logo.png" style="width: 62px">
        </div>
        <div class="menu-dots"></div>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

    .header-container {
        display: flex;
        align-content: center;
        justify-content: space-between;
        padding: 30px;
    }

    .menu-dots {
        background-image: url("../assets/menu-dots.svg");
        background-position: center;
        width: 32px;
        height: 32px;
        background-repeat: no-repeat;
        display: inline-block;
        cursor: pointer;
    }

    .menu-dots:hover {
        background-image: url("../assets/menu-dots-black.svg");
    }
</style>
