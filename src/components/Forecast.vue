<template lang="html">
    <div>
        <div>{{ formatDate }}</div>
        <img v-bind:src="`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`" /> <br />
        {{ day.weather.description }} <br />
        <div class="degree">{{ day.low_temp.toFixed(0) }}&deg;  {{ day.high_temp.toFixed(0) }}&deg;</div>
    </div>
</template>

<script>
    export default {
        props: {
            day: {}
        },
        computed: {
            formatDate: function () {
                const date = new Date(this.day.datetime);
                return date.toLocaleString('ru', {
                                         month: 'long',
                                         day: 'numeric',
                                         weekday: 'long'
                                     });
            }
        }
    };
</script>

<style lang="sass">
    .forecast
        display: grid
        grid:
            template-columns: repeat(5, 1fr)
            column-gap: 20px
        div
            display: flex
            flex-direction: column
            text-align: center
            align-items: center
            font-size: 1em
            margin: 5px
            div:last-of-type
                color: red
        img
            width: 15vmin

    .degree
        color: #ff0505
        font-weight: 600

    @media (max-width: 1200px)
        .forecast
            grid:
                template-columns: repeat(2, 1fr)
                row-gap: 50px
            div:last-of-type
                grid-column: 3 / 1

    @media (max-width: 640px)
        .forecast
            grid-template-columns: 1fr
        div:last-of-type
            grid-column: 1 / 1
</style>
