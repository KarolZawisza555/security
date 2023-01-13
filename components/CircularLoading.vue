<template lang="">
        <div class="d-flex justify-center my-6">
            <v-progress-circular :rotate="360" :size="100" :width="15" :model-value="percent"
                :color="color">
                <p class="font-weight-bold">
                    {{ percent }}
                </p>
            </v-progress-circular>
        </div>
</template>
<script>
// OPTIONS API
export default {
    name: "CircularLoading",
    props: { color: String, percent: Number }
}
</script>
<style>

</style>