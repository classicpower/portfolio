<template lang="pug">
  #tabs
    ul.tabs__list
      li.tabs__item(v-for="tab in tabs")
        router-link(
          tag="button"
          :to="tab.href"
        ).tabs__btn {{tab.title}}
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Работы", href: "/works" },
        { title: "Блог", href: "/blog" }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
#tabs {
  background: #f0efe9;
  height: 100%;
}
.tabs__item {
  border-right: 2px solid #fff;
}
.tabs__btn {
  width: 180px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  height: 100%;
  display: flex;
  cursor: pointer;
}
.tabs__list {
  display: flex;
  height: 100%;
}
</style>