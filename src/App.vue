<template>
    <div id="app">
        <div class="container">
            <div class="wrap">
                <Controls @getCity="getWeather" v-bind:error="error"/>
                <Weather v-if="isWeather" v-bind:weather="currentWeather" />
                <div class="forecast">
                    <Forecast
                        v-for="day in currentWeather.data" :key="day.id"
                        v-bind:day="day"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Controls from '@/components/Controls';
    import Weather from '@/components/Weather';
    import Forecast from '@/components/Forecast';

    export default {
        name: 'app',
        data() {
            return {
                currentWeather: {},
                isWeather: false,
                error: false
            }
        },
        components: {
            Controls,
            Weather,
            Forecast
        },
        methods: {
            async getWeather(city) {
                await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lang=ru&days=6&key=c5b6f46667fc42f487d9a1652a63664a&city=${city}`)
                    .then(response => response.json())
                    .then(response => {
                        this.isWeather = true;
                        this.currentWeather = response;
                        this.currentWeather.data.shift();                        
                    })
                    .catch(this.error = true)
            }
        }
    }
</script>

<style lang="sass">
    @import url('https://fonts.googleapis.com/css?family=Varela+Round&display=swap')
    *
        margin: 0
        padding: 0

    body
        font: 100% 'Varela Round', sans-serif
        color: #0e2686
        overflow-wrap: break-word

    .container
        max-width: 100%
        min-width: 320px

    .wrap
        max-width: 1400px
        min-width: 290px
        padding: 0 15px
        margin: 0 auto
</style>
