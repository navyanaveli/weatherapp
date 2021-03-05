<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <input class="searchcity" v-model="city" placeholder="Type your choice of city">
    <button class="searchbutton" @click="weathersearch(city)"><i class="fa fa-search"></i></button>

    <div >
      <h2 class="headinglist">Favorite City List: </h2>
      <ul class="listflex">
        <div class="favoritelist" v-for="cityname in getfavoritelist" :key="cityname" @click="weathersearch(cityname)">{{ cityname }}<br><br><button class="btn" @click="removefromfavorite(cityname)"><i class="fa fa-trash"></i></button></div>
      </ul>
    </div>
  </div>
</template>

<script src="../views/javascriptfile/searchcity.js"/>


<style scoped>
.searchcity{
  height: 30px;
  width: 400px;
  font-size: 20px;
  text-align: center;
  border-radius: 20px;
  margin-top: 40px;
}
.searchbutton{
  background-color: #42b983;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
}
.searchbutton:hover{
  background-color: #42b900;
}
.favoritelist{
  margin: 20px;
  padding: 10px;
  width: 150px;
  background-color: gray;
  border: 2px solid darkgray;
  border-collapse: separate;
  color: snow;
  font-weight: bold;
  border-radius: 20px;
  text-shadow: 2px 2px black;
  cursor: pointer;
}
.listflex{
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
}
.headinglist{

  font-family: "Al Nile";
  font-style: oblique;
  color: darkolivegreen;
  margin-top: 50px;
  margin-left: 60px;
  text-align: start;
  text-shadow: 2px 2px gray;
}
.favoritelist:hover{
  background-color: lightslategray;
}
</style>