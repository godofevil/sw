<template lang="html">
    <div class="weather">
        <div class="city">{{ weather.city_name }}, {{ weather.country_code }}</div>
        <div class="degree">{{ weather.data[0].temp.toFixed(0) }}&deg;</div>
        <div class="icon"><img v-bind:src="`https://www.weatherbit.io/static/img/icons/${weather.data[0].weather.icon}.png`" /></div>
        <div class="params">
            <div>Влажность: {{ weather.data[0].rh }}%</div>
            <div>Облачность: {{ weather.data[0].clouds}}% <br />
            (Hi {{ weather.data[0].clouds_hi }}%,
            Mid {{weather.data[0].clouds_mid }}%,
            Low {{weather.data[0].clouds_low }}%) <br /></div>
            <div>Ветер: {{ weather.data[0].wind_cdir }} {{ weather.data[0].wind_spd.toFixed(2) }} м/с <br /></div>
            <div>Давление: {{ weather.data[0].pres }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            weather: {}
        }
    };
</script>

<style lang="sass" scoped>
    .weather
        font-size: 1.6em
        display: flex
        flex-direction: column
        align-items: center
        margin: 50px 0
        div
            padding: 5px
            text-align: center
    .city
        font-weight: 600

    .params
        font-size: 0.8em
</style>
