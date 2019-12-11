import Vuex from 'vuex'

const state = {
  // ---------简历附件---------
  // resume: [],
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
  // current_salary: '',
  // salary_expectation: '',
  // city: '',
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
  // language_type: '',
  // language_degree: '',
  // hear: '',
  // read_write: '',
  // ---------获奖经历---------
  // winning_time: '',
  // winning_name: ''
}

const getters = {
  personInfoStatus(state) {
    // 个人信息状态
    return state.name ? true : false
  },
  personInfo(state) {
    // 个人信息
    return {
      name: state.name,
      phone: state.phone,
      email: state.email,
      sex: state.sex,
      age: state.age,
      experience: state.experience,
      top_education: state.top_education,
      address: state.address,
      recen_company: state.recen_company,
      idcard: state.idcard
    }
  },
  jiaoyuInfo(state) {
    // 教育信息
    return {
      education_time: state.education_time,
      school: state.school,
      professional: state.professional,
      education: state.education
    }
  },
  shixiInfo(state) {
    // 实习信息
    return {
      internship_time: state.internship_time,
      internship_company: state.internship_company,
      internship_name: state.internship_name,
      internship_duty: state.internship_duty
    }
  },
  gongzuoInfo(state) {
    return {
      work_time: state.work_time,
      work_company: state.work_company,
      work_name: state.work_name,
      work_duty: state.work_duty
    }
  },
  xiangmuInfo() {
    return {
      project_time: state.project_time,
      project_name: state.project_name,
      project_post: state.project_post,
      project_describe: state.project_describe,
      project_duty: state.project_duty
    }
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