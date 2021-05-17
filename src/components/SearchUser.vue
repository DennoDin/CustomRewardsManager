<template>
    <div>
        <v-card>
            <v-card-title>Search for Twitch ID</v-card-title>
            <v-text-field v-bind=username input label="Enter User ID"/>
            <v-btn>Search</v-btn>
        </v-card>
    </div>
</template>
<script>
export default {
    name: "SearchUser",
    data: () => ({
        username: ""
    }),
}
</script>
