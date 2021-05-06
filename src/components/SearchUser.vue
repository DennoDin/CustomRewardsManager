<template>
    <div>
        <v-text-field v-bind=username input label="Check Status of a User"/>
        <v-btn>Search</v-btn>
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
