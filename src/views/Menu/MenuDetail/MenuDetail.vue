<template>
  <div id="menuDetail" class="menu-detail">
    <div class="menu-feature">
      <img
        :src="baseUrl + '/uploads/admin/images/20191129/0fed92b191015abcc40a1981657da4bd.jpg'"
        alt
      />
    </div>
    <div class="intro">
      <h3 class="menu-tit">清蒸花蛤西葫芦</h3>
      <p class="from count">
        <span>猪先生美食</span>
        <span>21万人浏览</span>
      </p>
      <p
        class="menu-desc"
      >清蒸花蛤西葫芦是我最喜欢的一道海鲜菜，其味道鲜美，营养也相当丰富。说起蛤俐的吃法很多人第一反应都是烤哈蜊，虽说烤的味道不错但分流失了很多。花蛤在清洗的过程中一定要仔细，因为他会携带很多沙子。在侵泡的过程中也时不时搅拌一下，这也是一个洗沙的过程。花蛤在清洗的过程中一定要仔细，因为他会携带很多沙子。在侵泡的过程中也时不时搅拌一下，这也是一个洗沙的过程。</p>
    </div>
    <div class="menu-area">
      <div class="ma-head">
        <div class="mh-title">食材清单</div>
      </div>
      <div class="ma-body">
        <ul class="food-list">
          <li>
            <span class="fl-name">花蛤蜊</span>
            <span class="fl-count">200克</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="menu-area">
      <div class="ma-head">
        <div class="mh-title">做法步骤</div>
      </div>
      <div class="ma-body">
        <div class="buzhou">
          <div v-for="(item, index) in step" :key="index" :class="['step','step' + (index + 1)]">
            <div class="step-icon">{{index + 1}}</div>
            <p class="step-txt">{{item}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="menu-area">
      <div class="ma-head">
        <div class="mh-title">营养密语</div>
      </div>
      <div class="ma-body">
        <div
          class="miyu"
        >鸭肉，一直都是烹饪中的一个难题，因为其肥腻的脂肪和独特的膻味而让很多人敬而远之。烤鸭是中国人最具智慧的对鸭子的料理方式，皮酥肉香的烤鸭，蘸着酸甜爽口的酱料，每一口都是享受。</div>
      </div>
    </div>
    <div class="menu-area">
      <div class="ma-head">
        <div class="mh-title">为你推荐</div>
        <a href="javascript:;" class="mh-link">
          换一换
          <i class="iconfont icon-change loading">&#xe635;</i>
        </a>
      </div>
      <div class="ma-body">
        <div class="tuijian">
          <MenuItem />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from "./components/MenuItem";
export default {
  components: {
    MenuItem
  },
  data() {
    return {
      step: [
        "首先准备好所有的食材，取碗倒入清水，并依次加入少量的盐与食用油，并取清洗干净的花蛤蜊倒入碗",
        "西葫芦清洗干净并将其切片，将其摆放在盘子底部，并将侵泡好的哈蜊倒在西葫芦片上。",
        "首先准备好所有的食材，取碗倒入清水，并依次加入少量的盐与食用油，并取清洗干净的花蛤蜊倒入碗。"
      ]
    };
  }
};
</script>

<style>
body {
  background: #f5f5f5;
}
</style>
<style lang="scss" scoped>
.menu-detail {
  color: #333;
}
.menu-feature {
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
.intro {
  padding: 10px;
  line-height: 20px;
  background: #fff;
  overflow: hidden;
  .menu-tit {
    margin-bottom: 5px;
    font-size: 16px;
  }
  .from.count {
    margin-bottom: 10px;
    font-size: 12px;
    color: #999;
    overflow: hidden;
    span {
      float: left;
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .menu-desc {
    font-size: 14px;
    white-space: pre-wrap;
    word-break: break-all;
  }
}
.menu-area {
  margin-top: 6px;
  background: #fff;
  .ma-head {
    position: relative;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: #ccc;
      transform: scaleY(0.5);
    }
    .mh-title {
      float: left;
      font-size: 16px;
    }
    .mh-link {
      float: right;
      font-size: 12px;
      color: #999;
      .icon-change{
        display: inline-block;
      }
    }
    .icon-change.loading {
      animation: changeRotate 1s infinite linear;
    }
  }
}
@keyframes changeRotate {
  100% {
    transform: rotate(360deg);
  }
}
.food-list {
  li {
    position: relative;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    display: flex;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: #ccc;
      transform: scaleY(0.5);
    }
    span {
      flex: 1;
    }
    .fl-name {
      color: $primarycolor;
    }
    .fl-count {
      color: #666;
    }
  }
}

.buzhou {
  padding-bottom: 10px;
  .step {
    margin-top: 10px;
    padding: 0 10px;
    .step-icon {
      margin-bottom: 4px;
      width: 16px;
      height: 16px;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: $primarycolor;
    }
    .step-txt {
      font-size: 14px;
      line-height: 20px;
      text-align: justify;
    }
  }
  .step-icon {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 200%;
      height: 200%;
      border: 1px solid $primarycolor;
      border-radius: 50%;
      box-sizing: border-box;
      transform-origin: left top;
      transform: scale(0.5);
    }
  }
}

.miyu {
  padding: 10px;
  font-size: 14px;
  line-height: 20px;
  text-align: justify;
  white-space: pre-wrap;
}

/deep/.tuijian {
  .menu-item {
    margin-bottom: 6px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>