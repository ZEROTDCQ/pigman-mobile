<template>
  <!-- 商品筛选公用组件 -->
  <div class="booking_filter">
    <div class="filter-box">
      <ul class="filter-row">
        <li class="active" :data-id="0" @click="sort(0,$event)">全部分类</li>
        <template v-if="filter">
          <li
            v-for="(item,index) in filter"
            :key="index"
            :data-id="item.id"
            @click="sort(item.id,$event)"
          >{{item.title}}</li>
        </template>
      </ul>
    </div>
    <div class="arrow-down">
      <i class="iconfont">&#xe69a;</i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataId: String
  },
  data() {
    return {
      filter: []
    };
  },
  created() {
    this.$instance.post("api/api/YdTop", { id: this.dataId }).then(res => {
      let data = res.data.data;
      this.filter = data;
    });
  },
  updated() {
    this.liWidth();
  },
  methods: {
    sort(son, $event) {
      this.$emit("sortFather", son);

      let oli = $event.path[0];
      $(".filter-row li").removeClass("active");
      $(oli).addClass("active");
    },
    //---计算分类盒子的宽度
    liWidth() {
      let $ul = $(".filter-row");
      let $li = $ul.find("li");

      let liw = $li.innerWidth();
      let ulw = ($li.length + 1) * (liw + 10);
      $ul.width(ulw);
    }
  }
};
</script>

<style lang="scss">
.booking_filter {
  padding-left: 10px;
  height: 32px;
  background: #fafafa;
  display: flex;
  .filter-box {
    width: 330px;
    overflow: auto;
    .filter-row {
      // flex: 1;
      // display: flex;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      li {
        // flex: 1;
        float: left;
        margin-left: 10px;
        height: 100%;
        line-height: 32px;
        font-size: 14px;
        text-align: center;
        color: #333;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        &:first-child {
          margin-left: 0;
        }
        &.active {
          color: $primarycolor;
        }
      }
    }
  }
  .arrow-down {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    transform: rotate(-90deg);
  }
}
</style>