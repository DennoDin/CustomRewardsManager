<template>
    <div class="redirect">
        You will be redirected momentarily
    </div>
</template>

<script>
    export default {
        name: "Redirect",

        data:() => ({
            twitchOAuthRegisterURL: "",
            fragmentResults: {}, 
        }),
        mounted: function() {
                const urlFragment = new URLSearchParams(window.location.hash.substring(1));
            for(let pair of urlFragment.entries()){
                this.fragmentResults[pair[0]] = pair[1];
            }
            if(this.fragmentResults.token_type && this.fragmentResults.token_type === 'bearer'){
                this.fragmentResults.token_type = 'Bearer'
            }
            if(Object.keys(this.fragmentResults).length){
                this.updateCredentials(this.fragmentResults)
            }
            this.$router.push('/')
        },
        methods:{
            updateCredentials(returnedCreds){
                this.$store.commit('saveCredentials', returnedCreds);
                this.$store.commit('toggleLogin');
            }
        },
    }
</script>
