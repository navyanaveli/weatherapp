import {mapActions, mapGetters} from "vuex"

export default {
    name: "SearchCity",
    data: () => {
        return {
            city: ""
        }
    },
    computed: {
        ...mapGetters(["getfavoritelist"])
    },
    methods: {
        ...mapActions(['removefavoritelist']),
        weathersearch: function (name) {
            this.$router.push({name: 'WeatherDetails', params: {"cityname": name}});
        },
        removefromfavorite: function (cityname){
            this.removefavoritelist(cityname)
            alert(cityname+" was removed from your favorites")
        }
    }
}