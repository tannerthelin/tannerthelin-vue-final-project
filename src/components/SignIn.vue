<template>
    <div class="home-container">
        <img class="main-image" src="../assets/images/signin-image.png" width="254px" height="461px">
        <div class="sign-in-container">
            <h3>Sign up for the beta</h3>
            <div class="form-container">
                <form action="">
                    <input class="text-input" type="text" placeholder="Name" name="name">
                    <input class="text-input" type="text" placeholder="Email" name="email">
                    <h3>Primary System</h3>
                    <div class="primary-system">
                        <!-- <label class="container">
                            Xbox
                            <input type="radio" checked="checked" name="radio" id="xbox">
                            <span class="checkmark"></span>
                        </label>
                        <label class="container">
                            <label for="playstation" class="radio-label">Playstation 4</label>
                            <input type="radio" name="radio" id="playstation">
                            <span class="checkmark"></span>
                        </label>
                        <label class="container">
                            <label for="pc" class="radio-label">PC</label>
                            <input type="radio" name="radio" id="pc">
                            <span class="checkmark"></span>
                        </label>
                        <label class="container">
                            <label for="switch" class="radio-label">Nintendo Switch</label>
                            <input type="radio" name="radio" id="switch">
                            <span class="checkmark"></span>
                        </label>
                        <label class="container">
                            <label for="iOS" class="radio-label">iOS / Android</label>
                            <input type="radio" name="radio" id="iOS">
                            <span class="checkmark"></span>
                        </label> -->

                        <div class="container">
                            <input type="radio" id="xbox" name="primary-system"> 
                            <label for="xbox">Xbox One</label> 
                            <span class="checkmark"></span>
                        </div>

                        <div class="container">
                            <input type="radio" id="playstation" name="primary-system"> 
                            <label for="playstation">Playstation 4</label> 
                            <span class="checkmark"></span>
                        </div>

                        <div class="container">
                            <input type="radio" id="pc" name="primary-system"> 
                            <label for="pc">PC</label> 
                            <span class="checkmark"></span>
                        </div>

                        <div class="container">
                            <input type="radio" id="switch" name="primary-system"> 
                            <label for="switch">Nintendo Switch</label> 
                            <span class="checkmark"></span>
                        </div>

                        <div class="container">
                            <input type="radio" id="iOS" name="primary-system"> 
                            <label for="iOS">iOS / Android</label> 
                            <span class="checkmark"></span>
                        </div>

                    </div>
                    <button type="submit" class="button button-primary">Join the Waitlist</button>
                </form>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .home-container {
        padding-top: 50px;
        padding-bottom: 120px;
        display: flex;
        justify-content: center;
        align-content: center;
        z-index: 1;
        /* position: relative; */
    }

    .main-image {
        margin-right: 50px;
        margin-top: 80px;
        z-index: 1;
    }

    .sign-in-container {
        width: 400px;
    }

    .placeholder-select {
        color: #B4B4B6;
    }

    .form-container {
        border: 1px solid rgba(10,10,10,0.1);
        padding: 35px 35px;
        border-radius: 8px;
        background-color: #F9F9FA;
        z-index: 2;
    }

    .text-input {
        font-size: 19px;
        border: none;
        background-color: transparent;
        border-bottom: 1px solid rgba(10,10,10,0.1);
        outline: none;
        display: block;
        width: 100%;
        margin-bottom: 40px;
        padding-bottom: 10px;
    }

    input::placeholder {
        color: #B4B4B6;
    }

    /* Change the white to any color ;) */
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active  {
        -webkit-box-shadow: 0 0 0 30px #F9F9FA inset !important;
    }

    select {
        display: block;
        width: 100%;
        margin-bottom: 40px;
        font-size: 19px;
        border: 1px solid #EBEBEB;
        background-color: white;
        height: 50px;
        outline: none;
    }

    .primary-system {
        display: flex;
        flex-direction: column;
        padding: 10px 0px;
        margin-bottom: 20px;
    }

    .radio-input {
        margin-bottom: 20px;
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
        padding: 15px 24px;
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

    @media (max-width: 800px) {
        .main-image {
            position: absolute;
            top: 50px;
            right: -60px;
            z-index: 3;
        }

        .sign-in-container{
            z-index: 2;
        }

        .home-container {
            flex-direction: column;
            justify-content: center;
            align-content: center;
        }
    }

    @media (max-width: 550px) {
        .main-image {
            display: none;
        }
    }

/* STYLING FOR THE RADIO BUTTONS */
    .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 22px;
    cursor: pointer;
    font-size: 17px;
    color: #818181;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    }

    /* Hide the browser's default radio button */
    .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    }

    /* Create a custom radio button */
    .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: transparent;
    border: 1px solid rgba(10,10,10,0.1);
    border-radius: 50%;
    }

    label {
        position: relative;
        top: 3px;
    }

    /* On mouse-over, darken the circle's border */
    .container:hover input ~ .checkmark {
        border: 1px solid #BABABA;
    }

    .container:hover {
        color: black;
    }

    /* Create the indicator (the dot/circle - hidden when not checked) */
    .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    }

    /* Show the indicator (dot/circle) when checked */
    .container input:checked ~ .checkmark:after {
    display: block;
    }    

    /* Style the indicator (dot/circle) */
    .container .checkmark:after {
        top: 7px;
        left: 7px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background: black;
    }

    input[type=radio] + label {
        color: #818181;
    }

    input[type=radio]:checked + label {
        color: black;
    } 

    input[type=radio]:hover + label {
        color: black;
    }

</style>
