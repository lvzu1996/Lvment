# Lvment

>@author:lvzu  
>@Updated date:2017/09/04
>@say something : hope to become a full-stack programer!  

## Build Setup

1.npm install lvment
``` javascript

<template>
  <div id="app">
      <!-- <lv-search v-bind:width="width" :onClick="_onClick"></lv-search> -->

      <lv-pagination
      :selectedNum="selectedNum"
      :totalAmount="totalAmount"
      :page_size="page_size"
      :onClick="_onClick"
      ></lv-pagination>

      <!-- <lv-sort-strip
      :priDir="priDir"
      :hrefs="hrefs"
      :onChange="_onChange">
      </lv-sort-strip> -->

  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      //lv-search
      width:350,
      height:32,

      //lv-pagination
      selectedNum:1,
      totalAmount:61,
      page_size:10,

      //lv-sort-strip
      priDir:['首页','ac正义','番剧','动画','新番连载'],
      hrefs:['/#/shouye','/#/aczhengyi','/#/fanju','/#/google','/#/github']
    }
  },

  methods: {
    _onChange(i) {
      console.log(i);
    },

    _onClick(i){
      console.log(i);
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```


>wechat:lvzu_lvzu  
qq:385162733
