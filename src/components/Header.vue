<template>
    <div class="header-container">
        <router-link class="logo-container" :to="{ name: 'home'}">
            <img alt="Computer Logo" src="../assets/images/logo.png" style="width: 62px">
        </router-link>
        <div class="menu-dots" v-on:click="isHidden = !isHidden"></div>
        <div class="main-nav" v-if="isHidden === false">
            <div class="main-nav-content">
                <router-link @click.native="closeDropdown(isHidden)" :to="{ name: 'home'}">Home</router-link>
                <router-link @click.native="closeDropdown(isHidden)" :to="{ name: 'dashboard'}">View Demo</router-link>
                <router-link @click.native="closeDropdown(isHidden)" :to="{ name: 'sign-in'}">Sign Up</router-link>
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
    },
    methods: {
        closeDropdown(isHidden) {
            this.isHidden = true;
        }
    }
}
</script>

<style scoped>

    .menu-dots {
        background-image: url("../assets/images/menu-dots.svg");
        background-position: center;
        width: 32px;
        height: 32px;
        background-repeat: no-repeat;
        display: inline-block;
        cursor: pointer;
        z-index: 3;
    }

    .menu-dots:hover {
        background-image: url("../assets/images/menu-dots-black.svg");
    }

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
        cursor: pointer;
    }

    .main-nav-content a:hover {
        color: #11111a;
        background-color: #FAFBFC;
    }

</style>
