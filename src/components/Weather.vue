<template lang="html">
    <div class="weather">
        <div class="city">{{ weather.city_name }}, {{ weather.country_code }}</div>
        <div class="degree">{{ weather.data[0].temp.toFixed(0) }}&deg;</div>
        <div class="params">{{ weather.data[0].weather.description }}</div>
        <i :class="weather.data[0].weather.code"></i>
        <div class="params">
            <div>Влажность: {{ weather.data[0].rh }}%</div>
            <div>Облачность: {{ weather.data[0].clouds}}% <br />
            (Hi {{ weather.data[0].clouds_hi }}%,
            Mid {{ weather.data[0].clouds_mid }}%,
            Low {{ weather.data[0].clouds_low }}%) <br /></div>
            <div>Ветер: {{ weather.data[0].wind_cdir }} {{ weather.data[0].wind_spd.toFixed(2) }} м/с <br /></div>
            <div>Давление: {{ weather.data[0].pres }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            weather: {},
            icon: ''
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
        font-size: 2em
        margin: 20px 0
    .city
        font-weight: 600

    .params
        font-size: 0.6em

    @media (max-width: 640px)
        .weather
            margin: 30px 0
</style>
