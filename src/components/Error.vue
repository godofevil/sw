<template>
    <div class="error">
        {{ errorMessage }}
    </div>
</template>

<script>
export default {
    props: {
        errorMessage: ''
    }
}
</script>

<style lang="sass" scoped>
    .error
        position: absolute
        left: 50%
        transform: translateX(-50%)
        color: #ff0505
        width: 100%
        text-align: center
        @media (max-width: 640px)
            top: 1%
</style>
