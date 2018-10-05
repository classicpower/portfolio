import Vue from 'vue';

const skill = {
  template: "#skill",
}
const skillsRow = {
  template: "#skills-item",
  components: {
    skill
  }
}
new Vue({
  el: "#skills-component",
  components: {
    skillsRow
  },
  template: "#skills-list"
})