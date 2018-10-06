import Vue from 'vue';

const skill = {
  template: "#skill",
  props: {
    title: String,
    percentage: Number
  },
  mounted() {
    const circle = this.$refs.circle;
    const currentPercentage = parseInt(getComputedStyle(circle).getPropertyValue("stroke-dashoffset"));
    const requireDashoffset = (currentPercentage / 100) * (100 - this.percentage);
    circle.style.strokeDashoffset = requireDashoffset;
    const requireOpacity = (this.percentage / 100);
    circle.style.opacity = requireOpacity;

  }
}
const skillsRow = {
  template: "#skills-item",
  props: {
    skills: Object
  },
  components: {
    skill
  }
}
new Vue({
  el: "#skills-component",
  components: {
    skillsRow
  },
  data() {
    return {
      skills: [],
    }
  },
  created() {
    const data = require('../../../data/skills.json');
    this.skills = data;

  },
  template: "#skills-list"
})