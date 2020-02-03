<template lang="html">
    <div class="weather">
        <div class="city">{{ weather.city_name }}, {{ weather.country_code }}</div>
        <div class="degree">{{ weather.data[0].temp.toFixed(0) }}&deg;</div>
        <div class="params">{{ weather.data[0].weather.description }}</div>
        <i :class="weather.data[0].weather.code"></i>
        <div class="params">
            <div><i class="wi--sm wi wi-humidity"></i> {{ weather.data[0].rh }}%</div>
            <div><i class="wi--sm wi wi-cloudy"></i> {{ weather.data[0].clouds }}%</div>
            <div><i class="wi--sm wi wi-strong-wind"></i> {{ weather.data[0].wind_cdir }} {{ weather.data[0].wind_spd.toFixed(2) }} м/с <br /></div>
            <div><i class="wi--sm wi wi-barometer"></i> {{ weather.data[0].pres }}</div>
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
        font-size: 2em
        display: flex
        flex-direction: column
        align-items: center
        margin: 50px 0
        div
            padding: 3px
            text-align: center
    .wi
        font-size: 3em
        margin: 20px 0
        &--sm
            font-size: 1.5em
            margin: 0
    .city
        font-weight: 600

    .params
        font-size: 0.6em

    .weather > i
        animation: icon-pulse 2s linear infinite both

    @keyframes icon-pulse
        0%
            transform: translate(0)
        20%
            transform: translate(-2px, 2px)
        40%
            transform: translate(-2px, -2px)
        60%
            transform: translate(2px, 2px)
        80%
            transform: translate(2px, -2px)
        100%
            transform: translate(0)

    @media (max-width: 640px)
        .weather
            margin: 30px 0
</style>
