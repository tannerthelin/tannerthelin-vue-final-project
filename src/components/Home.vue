<template>
    <div class="home-container">
        <div class="home-content">
            <h1>Track, log, &amp; rate <br>the games you play.</h1>
            <h2>Sign up for the beta today!</h2>
            <div class="button-container">
                <router-link :to="{ name: 'sign-in'}">
                    <button class="button button-primary">Join</button>
                </router-link>
                <router-link :to="{ name: 'dashboard'}">
                    <button class="button button-secondary">My Games</button>
                </router-link>
            </div>
        </div>        
            <img class="home-image" src="../assets/images/home-illustration.png" width="550px">
    </div>
</template>


<style scoped>
    .home-container {
        padding-top: 100px;
        padding-bottom: 120px;
        display: flex;
        justify-content: space-between;
        align-content: center;
        position: relative;
    }

    .home-image {
        position: relative;
        right: -70px;
    }
    
    .home-content {
        position: relative;
        left: -30px;
    }

    h1 {
        font-size: 37px;
    }

    h2 {
        margin: 25px 0px 25px 0px;
        font-size: 20px;
    }

    .button {
        border-radius: 4px;
        padding: 16px 20px;
        background-color: #eeeeee;
        margin-right: 12px;
        font-size: 16px;
        box-shadow: none;
        border: none;
        cursor: pointer;
        outline: none;
    }

    .button-primary {
        color: #F9F9FA;
        background-color: #000000;
    }

    .button-primary:hover {
        background-color: #2C2C2C;
    }

    .button-secondary {
        background-color: transparent;
        border: 1px solid #E0E0E0;
    }

    .button-secondary:hover {
        background-color: #F3F3F3;
        border: 1px solid #D6D6D6;
    }

    @media (max-width: 1090px) {
        .home-content {
            left: 0px;
        }

        .home-image {
            right: 0px;
        }
        
        .home-container {
            flex-direction: column;
            padding-top: 50px;
        }
    }

</style>
