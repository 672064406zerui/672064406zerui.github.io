module.exports = {
  base:"./",
  title: "文档",
  description: "这是一个文档demo",
  serviceWorker: true,
  themeConfig: {
    // nav: [
    //   { text: "主页", link: "/" },
    //   { text: "我是foo", link: "/foo/" },
    //   { text: "我是bar", link: "/bar/" },
    //   { text: "差旅天下", link: "https://tg.tripg.com" },
    //   // 下拉列表的配置
    //   {
    //     text: "Languages",
    //     items: [
    //       { text: "Chinese", link: "/zh/chinese" },
    //       { text: "English", link: "/en/English" }
    //     ]
    //   }
    // ],
    // sidebar: [
    //   {
    //     title: 'Group 1',
    //     collapsable: false,
    //     children: [
    //       '/'
    //     ]
    //   },
    //   {
    //     title: 'Group 2',
    //     children: [ /* ... */ ]
    //   }
    // ],
    sidebar: {
      "/foo/": [
        "" /* /foo/ */,
        "one" /* /foo/one.html */,
        "two" /* /foo/two.html */
      ],

      "/bar/": [
        "" /* /bar/ */,
        "three" /* /bar/three.html */,
        "four" /* /bar/four.html */
      ],

      // fallback
      "/": [
        "" /* / */,
        "contact" /* /contact.html */,
        "about" /* /about.html */
      ]
    }
  }
};
