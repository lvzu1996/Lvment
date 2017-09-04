<template>
  <div v-bind:style="strip_style">

    <div id="lv-sort-strip">
      <a
        v-for="elem,index in priDir"
        :key="elem.key"
        :href="hrefs[index]"
        :class="{'selected':_selected(index)}"
        @click="_onClick(index);onChange(index)"
        @mouseenter="_showSec(index)"
        @mouseleave="_hideSec(index)"
        >{{elem}}
      </a>

    </div>




  </div>
</template>


<script>
export default {
  name: "lv-sort-strip",
  props: ['priDir','height','selectedNum','onChange','hrefs'],

  data(){
    return{
      selected:0,
      secFlags:[],
      strip_style:{
        height:(this.height || '47') + 'px'

      },
    }
  },

  mounted() {
    const t = this

    t.selected = t.selectedNum || 1

    t.secFlags=Array(t.priDir.length).fill(false)

  },

  methods: {
    _selected(i) {
      if(i+1 == this.selected){
        return true
      }
      return false
    },

    _onClick(i){
      this.selected = i+1
    },

    _showSec(i){
      this.secFlags[i] = true
    },

    _hideSec(i){
      this.secFlags[i] = false
    },

    _secIsShowed(i){
      if(this.secFlags[i]){
        return true
      }
      return false
    },

  },

}
</script>

<style lang="css" scoped>

  #lv-sort-strip{
    padding: 0 20%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
     align-items:center;
  }

  a {
      position: relative;
      display: block;
      padding:8px 12px;
      margin: 0 5px;
      text-decoration: none;
      color:#000;
      border-bottom: 3px solid #fff;
  }

  a:hover{
    color:#fd4c5d;
  }

  .selected{
    border-bottom: 3px solid #fd4c5d;
  }

</style>
