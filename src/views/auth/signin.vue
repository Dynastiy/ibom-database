<template>
    <div class="signin__page">
        <div>
            <div class="logo text-center mb-4">
                <img src="@/assets/logo.png" width="70" alt="">
            </div>
            <div class="login__box">
                <h4 class="login__header font-weight-bold">Sign In</h4>
                <p class="login__description small">Get Access to Ibom Database Systems</p>
                <div class="mt-4">
                    <label for="">Email</label> <br>
                    <input type="email" name="" id="">
                </div>
                <div>
                    <label for="">Password</label> <br>
                    <input type="passsword" name="" id="">
                </div>
                <div class="text-right forgot-password mb-4">
                    <router-link to="/signin">Forgot Password?</router-link>
                </div>
                <div class="sign-in-button">
                    <router-link to="/"><button>Sign In</button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>