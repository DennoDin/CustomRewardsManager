<template>
    <v-card 
        :href="`https://twitch.tv/${handle}`" 
        :height="dimensions.height" 
        :min-width="dimensions.minWidth"
    >
        <v-card-title>{{displayName}}</v-card-title>
        <v-card-subtitle v-if="isPerfectMatch">
            {{isLive ? `Live! ${gameName} : ${streamTitle}` : "Offline"}}
        </v-card-subtitle>
        <v-img :src="img" :max-width="dimensions.maxWidth"></v-img>
    </v-card>
</template>

<script>

export default ({
    props: {
        displayName: String,
        handle: String,
        isPerfectMatch: Boolean,
        isLive: Boolean,
        gameName: String,
        streamTitle: String,
        img: String,
        dimensions: Object
    }
})
</script>
