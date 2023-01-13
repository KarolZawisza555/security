<template lang="">
<p class="text-h4 text-center mt-2" >{{ title }}</p>
</template>
<script>
// OPTIONS API
export default {
    name: "TitleBox",
    props: {
        title: {
            type: String,
            required: false,
            default: "Title default"
        },
    }
}
</script>
<style>

</style>