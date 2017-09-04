<template lang="html">

    <div class="pagination">
      <div class="square-item" v-for="i in amount"
        v-show="move_isShow(i)"
        @mouseenter="change_condition(i)"
        @mouseleave="change_condition(i)"
        @click="item_onClick(i);onClick(selected)"
        :class="{
        'isSelected-class':isSelected(i),
         'canNotClick-class':canNotClick(i),
         'left-arrow':isLeftArrow(i),
         'right-arrow':isRightArrow(i),}">
        {{showWhich(i)}}</div>
    </div>

</template>

<script>
//此组件为分页组件,需要接收两个外来值
export default {
  name: 'lv-pagination',
  //selectedNum表示当前选中的分页格 totalAmount表示总页数
  props: ['selectedNum', 'totalAmount', 'page_size','onClick'],
  data() {
    return {
      selected: 1, //当前选中分页的数字,在mounted中赋值为selectedNum
      total: 0, //总共的分页数量 在mounted中赋值为totalAmount
      amount: 9, //表示分页组件总共的格子数,包括省略号格,左右移动格和数字格
      move: 0, //表示分页组件已经移动的格数
      _seven: false, //表示总页数是否小于7
      leftpoint_condition: false, //表示左边...的hover状态
      rightpoint_condition: false, //表示右边...的hover状态
    }
  },
  components: {

  },

  //将从props接收到的数据赋值至data
  mounted: function() {
    this.selected = this.selectedNum||1;
    this.total = Math.ceil(this.totalAmount / (this.page_size||15));
    if (this.total < 7) {
      this._seven = true;
      this.amount = this.total + 2;
      return;
    }
    this._seven = false;
  },

  methods: {

    //showWhich函数用于处理每个格子显示什么内容
    showWhich: function(x) {
      let _amount = this.amount;
      let _total = this.total;
      let _selected = this.selected;
      if (!this._seven) {
        if (x == 1) return "";
        if (x == 2) return "1";
        if (x == 3) {
          if (this.leftpoint_condition) {
            return "<<";
          }
          return "...";
        }
        if (x == _amount - 1) return _total;
        if (x == _amount) return "";

        if (_selected < 5) {
          if (x == _amount - 2) {
            if (this.rightpoint_condition) {
              return ">>";
            }
            return "...";
          }
          return x - 2;
        } else if (_selected >= _total - 4) {
          return _total + 1 + x - _amount;
        } else {
          if (x == _amount - 2) {
            if (this.rightpoint_condition) {
              return ">>";
            }
            return "...";
          } else {
            return _selected + x - 5;
          }
        }
      }
      //如果总页数小于7
      else {
        if (x == 1) return "";
        if (x == 2) return "1";
        if (x == _amount) return ""
        return (x - 1).toString();
      }

    },

    //点击分页组件格子逻辑
    item_onClick: function(x) {
      let _selected = this.selected;
      let _total = this.total;
      let _amount = this.amount;
      if (this._seven) {
        if (x != 1 && x != _amount) {
          this.selected = x - 1;
          return;
        }
        if (x == 1) {
          if (_selected != 1) {
            this.selected--;
            return;
          }
        }
        if (x == _amount) {
          if (_selected != _total) {
            this.selected++;
            return;
          }
        }
      } else {
        if (_selected <= 4) {
          if (x == _amount) {
            this.selected++;
            return;
          }
          if (x == _amount - 2) {
            this.selected += 3;
            return;
          }
          if (x == 1) {
            if (_selected == 1) return;
            this.selected--;
            return;
          }
          if (x >= 4 && x <= 6) {
            this.selected = x - 2;
            return;
          }
          if (x == _amount - 1) {
            this.selected = _total;
            return;
          }
          if (x == 2) {
            this.selected = 1;
            return;
          }
        } else if (_selected >= _total - 4) {
          if (x == 1) {
            this.selected--;
            return;
          }
          if (x == 3) {
            this.selected -= 3;
            return;
          }
          if (x == _amount) {
            if (_selected == _total) {
              return;
            }
            this.selected++;
            return;
          }
          if (x >= 4 && x <= _amount - 1) {
            this.selected = _total - 8 + x;
            return;
          }
          if (x == 2) {
            this.selected = 1;
            return;
          }
        } else {
          if (x == 1) {
            this.selected--;
            return;
          }
          if (x == 2) {
            this.selected = 1;
            return;
          }
          if (x == 3) {
            this.selected -= 3;
            return;
          }
          if (x == _amount) {
            this.selected++;
            return;
          }
          if (x == _amount - 1) {
            this.selected = _total;
            return;
          }
          if (x == _amount - 2) {
            this.selected += 3;
            return;
          }

          if (x == 4 || x == 6) {
            if (x == 4) {
              this.selected--;
              return;
            }
            if (x == 6) {
              this.selected++;
              return;
            }
          }
        }
      }
    },

    //v-for中调用,循环查找被选中的格子,并且返回一个bool用于v-bind设置红色背景样式
    isSelected: function(x) {
      let _selected = this.selected;
      let _total = this.total;
      let _amount = this.amount;
      if (!this._seven) {
        if (_selected <= 4) {
          if (x == 2 && _selected == 1) {
            return true;
          }
          if (x >= 4 && x <= 6) {
            if (x == _selected + 2) {
              return true;
            }
          }
        } else if (_selected >= _total - 4) {
          if (_total - _selected == _amount - x - 1) {
            return true;
          }
        } else {
          if (x == 5) {
            return true;
          }
        }
      } else {
        if (x == 1 || x == _amount) {
          return false;
        } else {
          if (x == _selected + 1) {
            return true;
          }
        }
      }
    },

    //设置前一个省略号的显示与否
    move_isShow: function(x) {
      if (this._seven) {
        return true;
      }
      if (x == 3) {
        if (this.selected < 5) {
          return false;
        }
      }
      return true;
    },

    //设置左右移动按钮不可点击样式
    canNotClick: function(x) {
      if (x == 1) {
        if (this.selected == 1) {
          return true;
        }
        return false;
      }
      if (x == this.amount) {
        if (this.selected == this.total) {
          return true;
        }
        return false;
      }
    },
    point_hover: function(x) {
      if (x == 2 && this.selected > 4) {

      }
    },
    change_condition: function(x) {
      if (this.leftpoint_condition || this.rightpoint_condition) {
        this.leftpoint_condition = false;
        this.rightpoint_condition = false;
        return;
      }
      if (x != x && x != this.amount - 2) {
        return;
      }
      if (x == 3 && this.selected > 4) {
        this.leftpoint_condition = true;
        return;
      }
      if (x == this.amount - 2 && this.selected < this.total - 4) {
        this.rightpoint_condition = true;
        return;
      }
    },
    isLeftArrow: function(x) {
      if (x == 1) {
        return true;
      }
      return false;
    },
    isRightArrow: function(x) {
      if (x == this.amount) {
        return true;
      }
      return false;
    },


  },
}
</script>

<style lang="css" scoped>
 /*@font-family根据设计要求设置为PingFangSC-Light,非mac一般无此字体,可另做处理
分页组件样式*/
.pagination {
    width: 600px;
    height: 80px;
    border-radius: 2px;
}

/*单个分页格样式*/
.square-item {
    margin-right: 19.2px;
    opacity: 0.9;
    text-align: center;
    background-color: #ffffff;
    font-family: PingFangSC-Light;
    width: 40px;
    height: 40px;
    float: left;
    line-height: 40px;
    border: 1px solid rgba(0,0,0,0.17);
    transition: all 0.2s ease-in 0s;
}
.square-item:after {
    content: '';
    clear: both;
    display: block;
}

/*格子鼠标悬停样式*/
.square-item:hover {
    cursor: pointer;
    opacity: 1;
    // box-shadow: 0 20px 50px 0 rgba(0,0,0,.2);
    // transform: translate3d(0,-0.3px,0);
    background-color: #fa525d;
    color: #ffffff;
}

/*格子被选中样式,设置为红色*/
.isSelected-class {
    background-color: #DC2832;
    color: #ffffff;
}

/*设置左右移动格子不可点击样式*/
.canNotClick-class {
    color: rgb(199, 199, 199);
}
.canNotClick-class:hover {
    color: rgb(199, 199, 199);
    background-color: #ffffff;
    cursor: not-allowed;
}

/*左右箭头样式*/
.left-arrow {
    background-image: url("./imgs/组件-左.png");
    background-size: 40px 40px;
}
.left-arrow:hover {
    background-image: url("./imgs/组件-左hover.png");
    background-size: 40px 40px;
}
.right-arrow {
    background-image: url("./imgs/组件-右.png");
    background-size: 40px 40px;
}
.right-arrow:hover {
    background-image: url("./imgs/组件-右hover.png");
    background-size: 40px 40px;
}

</style>
