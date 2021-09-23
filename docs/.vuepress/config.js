module.exports = {
  title: '汉语言艺术',
  description: '人人都是艺术家，对文艺的爱好是人的本能',
  head: [["link", { rel: "icon", href: `/favicon.ico` }]],
  base: "/langart/",
  dest: "./dist",
  lastUpdated: 'Last Updated',
  themeConfig: {
    nav: [
      { text: "成语俗话", link: "/成语俗话/中华名言.html" },
      { text: "文摘语录", link: "/文摘语录/楹联巧对.html" },
      { text: "诗词歌赋", link: "/诗词歌赋/企业家宣言.html" },
      { text: "兴趣作品", link: "/兴趣作品/论学习.html" },
      { text: "GitHub", link: "https://github.com/CN-Tower/langart" }
    ],
    sidebar: {
      '/成语俗话/': getSideMenu('成语俗话', [
        '中华名言',
        '经典谚语',
        '经典熟语',
        '分字俗语',
        '常用成语',
      ]),
      '/文摘语录/': getSideMenu('文摘语录', [
        '楹联巧对',
        '关于奋斗',
        '哲人语录',
        '主席语录',
        '网络语摘',
        '随记语录',
      ]),
      '/诗词歌赋/': getSideMenu('诗词歌赋', [
        '企业家宣言',
        '青春',
        '当你老了',
        '诗八首',
        '相信未来',
        '蜀道难',
        '诗词精典-小学',
        '诗词精典-初中',
        '诗词精典-高中',
        '诗词精典-大学',
      ]),
      '/兴趣作品/': getSideMenu('兴趣作品', [
        '论学习',
        '论工作',
        '宇宙观',
        '西厢记',
        '白蛇传',
        '花木兰',
        '杜十娘',
        '毕业晚宴',
      ]),
    },
    lastUpdated: 'Last Updated'
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
  }
}

function getSideMenu(title, children) {
  const menuList = [
    ['/成语俗话/中华名言.html', '成语俗话'],
    ['/文摘语录/楹联巧对.html', '文摘语录'],
    ['/诗词歌赋/企业家宣言.html', '诗词歌赋'],
    ['/兴趣作品/论学习.html', '兴趣作品'],
  ];
  menuList.find((item , i) => {
    if (item[1] === title) {
      menuList[i] = {
        title,
        children,
        collapsable: false,
        path: item[0],
      };
    }
  });
  return menuList;
}
