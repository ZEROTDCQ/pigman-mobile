import Vuex from 'vuex'

const state = {
  // ---------简历附件---------
  resume: [],
  // ---------个人信息---------
  name: '',
  phone: '',
  email: '',
  sex: '',
  age: '',
  experience: '',
  top_education: '',
  address: '',
  recen_company: '',
  idcard: '',
  // ---------求职意向---------
  current_salary: '',
  salary_expectation: '',
  city: '',
  // ---------教育背景---------
  education_time: '',
  school: '',
  professional: '',
  education: '',
  // ---------实习经历---------
  internship_time: '',
  internship_company: '',
  internship_name: '',
  internship_duty: '',
  // ---------工作经历---------
  work_time: '',
  work_company: '',
  work_name: '',
  work_duty: '',
  // ---------项目经验---------
  project_time: '',
  project_name: '',
  project_post: '',
  project_describe: '',
  project_duty: '',
  // ---------语言能力---------
  language_type: '',
  language_degree: '',
  hear: '',
  read_write: '',
  // ---------获奖经历---------
  winning_time: '',
  winning_name: ''
}

const getters = {
  personInfoStatus(state) {
    // 个人信息状态
    return state.name ? '编辑' : '点击填写'
  },
  personName(state) {
    return state.name
  }
}

const mutations = {
  setFormState(state, options) {
    console.log('设置state', options);
    for (let [key, val] of Object.entries(options)) {
      state[key] = val;
    }
  }
}


export default new Vuex.Store({
  state,
  getters,
  mutations
});