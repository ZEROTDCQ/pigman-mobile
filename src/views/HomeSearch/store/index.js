import Vuex from 'vuex'

const state = {
  proList: [],
  selectorData: {},
  filterData: [],
  type: [],
  price: ''
}

const getters = {
  getFilterData(state) {
    return state.filterData;
  },
  getSelector(state) {
    return state.selectorData;
  },
  getPriceArea(state) {
    return state.price
  }
}

const mutations = {
  setSelector(state, { column, id, type }) {
    console.log('选择了筛选条件')
    var index = state.selectorData[column] && state.selectorData[column].indexOf(id);
    if (index === undefined) {
      Vue.set(state.selectorData, column, [id]);
      state.type.indexOf(type) == -1 ? state.type.push(type) : false;
    } else if (index == -1) {
      state.selectorData[column].push(id)
      state.type.indexOf(type) == -1 ? state.type.push(type) : false;
    } else {
      // 已存在
      state.selectorData[column].splice(index, 1);
      if (state.selectorData[column].length == 0) {
        state.type.splice(state.type.indexOf(type), 1);
      }
    }
    if (state.selectorData['price'].length > 0) {
      state.price = '';
    }

    console.log(state.selectorData);
    console.log(state.type)
  },
  recoverSelector(state, data) {
    state.selectorData = data;
  },
  setFilterData(state, data) {
    console.log('设置筛选条件')
    console.log(data)
    state.filterData = data;

    // 设置selectorData基础key
    for (var i in data) {
      Vue.set(state.selectorData, data[i].column, []);
    }
    console.log(state.selectorData)
  },
  diyPriceArea(state, { min, max }) {
    // 自定义价格区间，则取消所有筛选的价格
    if (max && max > min) {
      state.price = [min, max].join('-');
    } else {
      state.price = min;
    }
    state.selectorData.price = [];
    console.log(state.selectorData);
  }
}


export default new Vuex.Store({
  state,
  getters,
  mutations
});