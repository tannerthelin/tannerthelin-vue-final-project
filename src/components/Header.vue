<template>
    <div class="header-container">
        <div class="logo-container">
            <img alt="Computer Logo" src="../assets/images/logo.png" style="width: 62px">
        </div>
        <div class="menu-dots" v-on:click="isHidden = !isHidden"></div>
        <div class="main-nav" v-if= "!isHidden">
            <div class="main-nav-content">
                <a href="#">About</a>
                <a href="#">Join</a>
                <a href="#">Sign In</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isHidden: true
        }        
    }
}
</script>

<style scoped>

    .header-container {
        display: flex;
        justify-content: space-between;
        padding: 30px;
        user-select: none;
    }

    .main-nav {
        position: absolute;
        right: 46px;
        top: 76px;
        display: block;
        min-width: 160px;
        z-index: 3;
    }

    .main-nav-content{
        text-align: left;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0px 1px 12px 0px rgba(0,0,0,0.05);
        z-index: 1;
        border: 1px solid #E7E7E8;
        padding: 16px;
    }

    .main-nav-content a{
        display: block;
        color: #66666a;
        padding: 8px 0 8px 12px;
        text-decoration: none;
        border-radius: 4px;
    }

    .main-nav-content a:hover {
        color: #11111a;
        background-color: #FAFBFC;
    }

</style>
