<template>
    <div id="app">
        <div class="container">
            <div class="wrap">
                <Controls @getCity="getWeather"/>
                <Error :errorMessage="errorMessage"/>
                <Weather v-if="isWeather" :weather="currentWeather"/>
                <div class="forecast">
                    <Forecast
                        v-for="day in currentWeather.data" :key="day.id"
                        :day="day"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Controls from '@/components/Controls';
    import Error from '@/components/Error';
    import Weather from '@/components/Weather';
    import Forecast from '@/components/Forecast';

    export default {
        name: 'app',
        data() {
            return {
                currentWeather: {},
                isWeather: false,
                errorMessage: ''
            }
        },
        components: {
            Controls,
            Error,
            Weather,
            Forecast
        },
        methods: {
            async getWeather(city) {
                fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lang=ru&days=6&key=c5b6f46667fc42f487d9a1652a63664a&city=${city}`)
                    .then(response => response.json())
                    .then(response => {
                        this.isWeather = true;
                        this.currentWeather = response;
                        this.currentWeather.data.shift();
                        this.getIcon;
                        this.errorMessage = '';
                    })
                    .catch(e => this.errorMessage = 'Wrong city, please try again');
            },
        },
        computed: {
            getIcon() {
                this.currentWeather.data.forEach(item => {
                    let icon = item.weather.code;
                    switch(true){
                        case icon == 200 || icon == 201 :
                            icon = 'wi-storm-showers';
                            break;
                        case icon == 202 :
                            icon = 'wi-thunderstorm';
                            break;
                        case icon >= 230 && icon <= 233 :
                            icon = 'wi-lightning';
                            break;
                        case icon >= 300 && icon <= 302 :
                            icon = 'wi-hail';
                            break;
                        case icon == 502 :
                            icon = 'wi-rain-wind';
                            break;
                        case icon >= 511 && icon <= 520 :
                            icon = 'wi-rain';
                            break;
                        case icon >= 521 && icon <= 522 :
                            icon = 'wi-showers';
                            break;
                        case icon >= 600 && icon <= 609 :
                            icon = 'wi-snow';
                            break;
                        case icon == 610 :
                            icon = 'wi-rain-mix';
                            break;
                        case icon >= 611 && icon <= 612 :
                            icon = 'wi-sleet';
                            break;
                        case icon == 623 :
                            icon = 'wi-snowflake-cold';
                            break;
                        case icon == 700 :
                            icon = 'wi-smoke';
                            break;
                        case icon == 721 :
                            icon = 'wi-day-haze';
                            break;
                        case icon == 731 :
                            icon = 'wi-dust';
                            break;
                        case icon >= 741 && icon <= 751 :
                            icon = 'wi-fog';
                            break;
                        case icon == 800 :
                            icon = 'wi-day-sunny';
                            break;
                        case icon == 801 :
                            icon = 'wi-day-sunny-overcast';
                            break;
                        case icon == 802 :
                            icon = 'wi-cloud';
                            break;
                        case icon == 803 :
                            icon = 'wi-day-cloudy';
                            break;
                        case icon == 804 :
                            icon = 'wi-cloudy';
                            break;
                        case icon == 900 :
                            icon = 'wi-na';
                            break;
                        default:
                            break;
                    }                    
                    item.weather.code = `wi ${icon}`;
                });
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
        color: #5997cc
        overflow-wrap: break-word

    .container
        max-width: 100%
        min-width: 320px

    .wrap
        max-width: 1400px
        min-width: 290px
        padding: 0 15px
        margin: 0 auto
        position: relative

    .degree
        color: #ff0505
        font-weight: 600
</style>

<style lang="sass" scoped>
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

    @media (max-width: 1200px)
        .forecast
            grid:
                template-columns: repeat(2, 1fr)
                row-gap: 50px
            > div:last-child
                grid-column: 3 / 1

    @media (max-width: 640px)
        .forecast
            grid:
                template-columns: 1fr
                row-gap: 25px
            & > div:last-child
                grid-column: 1 / 1
</style>
