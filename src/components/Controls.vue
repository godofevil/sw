<template lang="html">
    <form class="controls" @submit.prevent="getCity">
        <input placeholder="Enter city..." type="search" autofocus="autofocus" v-model="city">
        <button type="submit">Search</button>
        <div v-if="error" class="error">ttt</div>
    </form>
</template>

<script>
    export default {
        props: {
            error: false
        },
        data() {
            return {
                city: ''
            }
        },
        methods: {
            getCity() {
                if (this.city.trim()) {
                    this.$emit('getCity', this.city);
                    this.city = '';
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    .controls
        display: grid
        grid:
            template-columns: auto 70px
            column-gap: 20px
        height: 30px
        padding-top: 15px
        input
            outline: 0
            font-size: 18px
            border-radius: 4px
            margin: 2px
            border: 1px solid #bbb2b2
            overflow: auto
            padding: 5px
        button
            outline: 0
            font-size: 18px
            border-radius: 4px
            margin: 2px
            cursor: pointer
            color: #fff
            box-sizing: border-box
            border: 0
            background: #5997cc
            transition: background .3s
            &:hover
                background: #1a4b75
        @media (max-width: 640px)
            padding-top: 50px
</style>
