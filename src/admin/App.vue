<template lang="pug">
  #root
    .header
      app-header
    .tabs
      tabs
    .content
      skills(
        :skills="skills"
      )
</template>

<script>
import header from "./components/header";
import tabs from "./components/tabs";
import skills from "./components/skills";
import {mapActions} from "vuex";

const data = [
  {id: 1, title: "Html", percent: 20, category: 0 },
  {id: 2, title: "Css", percent: 20, category: 0 },
  {id: 3, title: "JS $ jquey", percent: 20, category: 0 },
  {id: 4, title: "Vue", percent: 20, category: 0 },
  {id: 5, title: "PHP", percent: 20, category: 1 },
  {id: 6, title: "Mysql", percent: 20, category: 1 },
  {id: 7, title: "NodeJS $ npm", percent: 20, category: 1 },
  {id: 8, title: "MongoDB", percent: 20, category: 1 },
  {id: 9, title: "GIT", percent: 20, category: 2 },
  {id: 10, title: "Gulp", percent: 20, category: 2 },
  {id: 11, title: "Webpack", percent: 20, category: 2 },
];
export default {
  components: {
    appHeader: header,
    tabs,
    skills
  },
  data(){
    return{
      skills: data
    }
  },
  created() {
    this.fetchSkills();
  },
  methods: {
    ...mapActions({
      fetchSkills: "skills/fetch"
    })

  }
};
</script>
<style lang="scss">
body,
html {
  margin: 0;
  height: 100%;
}
body {
  font-size: 16px;
  line-height: 1.42;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wrapper {
  height: 100%;
}
#root {
  height: 100%;
  display: flex;
  flex-flow: column;
}
.header {
  height: 80px;
}
ul {
  padding: 0;
  margin: 0;
  li {
    list-style: none;
  }
}
* {
  box-sizing: border-box;
}
.tabs {
  height: 60px;
}
.content {
  flex: 1;
  padding: 20px;
}
</style>
