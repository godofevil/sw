<template lang="html">
    <form class="controls" @submit.prevent="getCity">
        <input placeholder="Enter city..." type="search" autofocus="autofocus" v-model="city">
        <button type="submit">Get weather</button>
    </form>
</template>

<script>
    export default {
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
            },
        }
    }
</script>

<style lang="sass" scoped>
    .controls
        position: relative
        display: grid
        grid:
            template-columns: auto fit-content(100%)
            column-gap: 20px
        padding-top: 15px
        @media (max-width: 640px)
            grid-template-columns: auto
        & *
            height: 40px
            font-size: 1.3rem
            border-radius: 4px
            @media (max-width: 640px)
                height: 50px
                font-size: 1.5rem
        input
            outline: 0
            margin: 2px
            border: 1px solid #5997cc
            color: #5997cc
            overflow: auto
            padding: 5px
            transition: box-shadow .1s
            &:focus
                box-shadow: 0px 0px 4px -1px rgba(89,151,204,1)
            &::placeholder
                color: lighten(#5997cc, 20%)
        button
            outline: 0
            padding:
                left: 10px
                right: 10px
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
