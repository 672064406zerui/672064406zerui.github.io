module.exports = {
  title: "vuepress demo", // 设置网站标题
  description: "demo",
  base: "/api",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "VuePress", link: "https://vuepress.vuejs.org/" }
    ],
    sidebar: [
      "/",
      "/about/",
      {
        title: "Group 1",
        collapsable: false,
        children: ["/guide/"]
      }
    ],
    sidebarDepth: 2
  }
};
