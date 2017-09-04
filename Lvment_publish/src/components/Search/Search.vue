<template>
  <div class="lv-search">
      <input class="lvzu-search-input"
      type="text"
      v-bind:style="input_style"
      v-model="currentValue"
      >

      <button class="lvzu-search-button"
      v-bind:style="button_style"
      @click="onClick(currentValue)"
      >

      <i v-bind:style="i_style"></i>

      </button>
  </div>
</template>

<script>
export default {
  name:'lv-search',
  props: ['width','height','onClick'],
  data () {
    return {
      currentValue:'',
      i_style:{
        lineHeight:(this.height || '32') + 'px',
      },
      input_style:{
        width:(this.width || '312') + 'px',
        height:(this.height || '32') + 'px'
      },
      button_style:{
        height:(this.height || '32') + 'px',
      }
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

.lv-search{
  font-size:0px;
}

.lvzu-search-input{
    border: 1px solid #e5e5e5;
    border-right: none;
    padding: 8px 10px;
    height: 32px;
    line-height: 14px;
    border-radius: 3px 0 0 3px;
    width: 316px;
    vertical-align: top;
    color: #999;
    box-sizing: border-box;
    outline: none;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em;
    font: 13.3333px Arial;
}
/*
button:before{
    content:"";
    display:inline-block;
    height:100%;
    vetical-align:middle;
}

button:after{
    content:"";
    display:inline-block;
    height:100%;
    vetical-align:middle;
}*/

.lvzu-search-button{
    width: 46px;
    margin: 0 auto;
    border: none;
    align-items:center;
    text-align: center;
    position: relative;
    font-size: 14px;
    background: #fd4c5d;
    border-radius: 0 3px 3px 0;
    cursor: pointer;
    outline:none;
}

.lvzu-search-button:hover{
  background:#f53749;
}

i{
  width: 25px;
  height: 25px;
   vertical-align: middle;
  background-size:25px 25px;
  display:inline-block;
  background-image:url('http://ovl1likr5.bkt.clouddn.com/%E6%90%9C%E7%B4%A2.svg');
}

</style>
