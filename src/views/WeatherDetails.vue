<template>
<div class="image" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
    <div class="details">
      <h1 id="city">{{weatherdetail.name}}</h1>
      <h2 id="content">{{weatherdetail.weather[0].description}}</h2>
      <h2>{{weatherdetail.main.temp}}°C</h2>
      <div class="weatherinfo">
        <div>
          Min-temp: {{ (weatherdetail.main.temp_min).toFixed(0)}}°C <br>
          Max-temp: {{ (weatherdetail.main.temp_max).toFixed(0)}}°C<br>
          Feels like: {{ (weatherdetail.main.feels_like).toFixed(0)}}°C
        </div>
        <div>
          <img :src="weathericon" alt="weather icon">
        </div>
      </div>
      <button class="favoritebutton" v-if="!getfavoritelist.has(weatherdetail.name)" @click="addfavorite">Add to favorites</button>
    </div>
</div>
</template>

<script src="@/views/javascriptfile/weatherdetails.js"/>

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