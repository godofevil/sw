<template lang="html">
    <div>
        <div>{{ formatDate }}</div>
        <i :class="day.weather.code"></i>
        {{ day.weather.description }}
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

<style lang="sass" scoped>
    .wi
        font-size: 3em
        margin: 15px 0
</style>
