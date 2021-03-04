<template>
<div class="image" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
    <div class="details">
      <h1 id="city">{{weatherdetail.name}}</h1>
      <h2 id="content">{{weatherdetail.weather[0].description}}</h2>
      <h2>{{weatherdetail.main.temp}}°C</h2>
      <div class="weatherinfo">
        <div>
          Min-temp: {{weatherdetail.main.temp_min}}°C <br>
          Max-temp: {{weatherdetail.main.temp_max}}°C<br>
          Feels like: {{weatherdetail.main.feels_like}}°C
        </div>
        <div>
          <img :src="weathericon" alt="weather icon">
        </div>
      </div>
      <button class="favoritebutton" v-if="!getfavoritelist.has(weatherdetail.name)" @click="addfavorite">Add to favorites</button>
    </div>
</div>
</template>

<script>
import axios from "axios";
import {mapActions, mapGetters} from "vuex";
export default {
name: "WeatherDetails",
  data : () =>{
  return {
    city:"ranchi",
    weatherdetail:{},
    imagemap:{
      "clear":"https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "clouds":"https://www.lefthudson.com/wp-content/uploads/2019/11/clouds-wallpaper-hd-best-of-sun-and-clouds-wallpaper-ideas-of-clouds-wallpaper-hd.jpg",
      "thunderstorm":"https://wallpapercave.com/wp/wp6516027.jpg",
      "rain":"https://hhsmedia.com/wp-content/uploads/2019/06/rain-3964186_960_720-900x600.jpg",
      "snow":"https://wallup.net/wp-content/uploads/2016/03/10/331709-landscape-winter-snow.jpg",
      "smoke":"https://www.gannett-cdn.com/presto/2020/09/10/NREG/e63b9450-a206-4055-a427-06ad298414d7-EUG_091120_Air_quality_remains_hazardous_2.JPG?width=1320&height=882&fit=crop&format=pjpg&auto=webp",
      "haze":"https://s3-ap-southeast-2.amazonaws.com/solaranalytics-blog-images/decdf5b971faf41bfd1804c23da9ceb2.jpg",
      "default": "https://wallpapercave.com/wp/wp6516027.jpg"
    }
  }
},
  computed:{
  ...mapGetters(["getfavoritelist"]),
  image: function (){
    if(!this.weatherdetail) return this.imagemap['default']
    if(!this.weatherdetail.weather) return this.imagemap['default']
    return this.imagemap[this.weatherdetail.weather[0].main.toLowerCase()]
  },
  weathericon: function (){
    return "http://openweathermap.org/img/wn/"+this.weatherdetail.weather[0].icon+"@2x.png"
  }
  },
  methods:{
  ...mapActions(['addfavoritelist',"iscityfavorite"]),
  addfavorite: function (){
    this.addfavoritelist(this.weatherdetail.name)
  }
  },
  created(){
  this.city=this.$route.params.cityname
    let opts = {
      "method": "GET",
      "url": "http://api.openweathermap.org/data/2.5/weather",
      "params": {
        "q": this.city,
        "appid": "1ff9eaeab7155f72d0fbb58984ace747",
        "units": "metric"
      }
    }
    axios.request(opts)
    .then(response => {
      this.weatherdetail = response.data;
    })
  }
}
</script>

<style scoped>

.image{
  display: flex;
  flex-direction: column;
  background-size: cover;
  height: 700px;
  justify-content: flex-start;
  align-items: center;
}

.details{

  margin-top: 50px;
  width: auto;
  padding-left: 50px;
  padding-right: 50px;
  height: auto;
  background-color: beige;
  border: 2px snow solid;
  border-radius: 20%;
  box-shadow: 0 3px 3px rgba(0,0,0,0.4);
}
.favoritebutton{
  background-color: lightslategrey;
  height: auto;
  width: auto;
  border-radius: 20px;
  margin-bottom: 10px;
  color: whitesmoke;
  padding: 6px;
  box-shadow: 0 3px 3px rgba(0,0,0,0.4);
}
.weatherinfo{
  display: flex;
  align-items: center;
}

</style>