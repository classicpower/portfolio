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
import form from "./components/form";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    appHeader: header,
    tabs,
    skills,
    appForm: form
  },
  computed:{
    ...mapState('skills',{
      skills: state => state.data
    })
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
