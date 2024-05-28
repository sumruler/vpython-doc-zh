import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "VPython 中文文档",
  description: "A guide for Vpython",
  themeConfig: {
    logo: '/logo.svg',
       // 设置搜索框的样式
    search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
      },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '快速开始', link: '/guide/what-is-vpython' },
      { text: '文档教程', link: '/contents/3DObjects/arrow' },
      { text: '案例', link: '/reference' },
      { text: '关于', link: '/about/' }
    ],

    sidebar: {
      '/guide/':[
        {
          text: '快速开始',
          items: [
            { text: '什么是Vpython', link: '/guide/what-is-vpython' },
            { text: '快速开始', link: '/guide/getting-started' },
          ]
        }
      ],
      '/contents/':[
        {
        text: '3D 对象',
        collapsed: false,
        items: [
          { text: '箭头', link: '/contents/3DObjects/arrow' },
          { text: '立方体', link: '/contents/3DObjects/box' },
          { text: '锥体', link: '/contents/3DObjects/cone' },
          { text: '曲线', link: '/contents/3DObjects/curve' },
          { text: '圆柱体', link: '/contents/3DObjects/cylinder' },
          { text: '椭球体', link: '/contents/3DObjects/ellipsoid' },
          { text: '螺旋线', link: '/contents/3DObjects/helix' },
          { text: '标签', link: '/contents/3DObjects/label' },
          { text: '点', link: '/contents/3DObjects/points' },
          { text: '金字塔', link: '/contents/3DObjects/pyramid' },
          { text: '环', link: '/contents/3DObjects/ring' },
          { text: '球体', link: '/contents/3DObjects/sphere' },
 
        ]
      },
      {
        text: '动画',
        collapsed: true,
        items: [
          {text: '概述', link: '/contents/Animations'}
        ]
      },
      {
        text: '画布',
        collapsed: true,
        items: [
          {text: '概述', link: '/contents/Canvases'}
        ]
  
      },
      {
        text: '相机和灯光',
        collapsed: true,
        items: [
          { text: '相机', link: '/contents/CameraAndLighting/Camera' },
          { text: '灯光', link: '/contents/CameraAndLighting/Lighting' },
        ]
      },
      {
        text: '颜色、透明度、发光',
        collapsed: true,
        items: [
          { text: '颜色', link: '/contents/ColorOpacityGlow/color' },
          { text: '透明度', link: '/contents/ColorOpacityGlow/Opacity' },
          { text: '发光', link: '/contents/ColorOpacityGlow/Emissive' },
        ]
      },
      {
        text: '自定义3D对象',
        collapsed: true,
        items: [
          { text: '概述', link: '/contents/DesignNewObjects/' },
          { text: '组合体', link: '/contents/DesignNewObjects/Compound' },
          { text: '组', link: '/contents/DesignNewObjects/Group' },
          { text: '三角面', link: '/contents/DesignNewObjects/Triangles' },
          { text: '挤压型状', link: '/contents/DesignNewObjects/Extrusions' },
          { text: '形状和路径', link: '/contents/DesignNewObjects/ShapesandPaths' },
          { text: '克隆', link: '/contents/DesignNewObjects/clone' },
        ]
      },
      {
        text: '文件和库',
        collapsed: true,
        items: [
          {text: '概述', link: '/contents/Files-and-Libraries'}
        ]
        
      },
      {
        text: '图表',
        collapsed: true,
        items: [
          {text: '概述', link: '/contents/Graphs'}
        ]
    
      },
      {
        text: '数学函数和向量操作',
        collapsed: true,
        items: [
          { text: '数学函数', link: '/contents/MathFuntions/MathFunctions' },
          { text: '向量操作', link: '/contents/MathFuntions/VectorOperations' },
        ]
      },
      {
        text: '对象操作',
        collapsed: true,
        items: [
          { text: '留下轨迹', link: '/contents/ObjectAttachments/Leaving-a-Trail' },
          { text: '添加箭头', link: '/contents/ObjectAttachments/attach_arrow' },
          { text: '添加光源', link: '/contents/ObjectAttachments/attach_light' },
        ]
      },
      {
        text: '旋转对象',
        collapsed: true,
        items: [
          { text: '概述', link: '/contents/Rotation/' },
    
        ]
      },
      {
        text: '文字输出',
        collapsed: true,
        items: [
          { text: 'Print', link: '/contents/TextOutput/print' },
          { text: 'Wtext', link: '/contents/TextOutput/wtext' },
          { text: 'Webvpython特有', link: '/contents/TextOutput/WebVPython-only' },
          { text: 'LaTeX 数学显示', link: '/contents/TextOutput/LaTeXMathDisplay' },
        ]
      },
      {
        text: '材质纹理',
        collapsed: true,
        items: [
         { text: '概述', link: '/contents/TexturesandBumpmaps' },
        ]
      },
      {
        text: '用户输入',
        collapsed: true,
        items: [
         { text: '按钮', link: '/contents/UserInput/Buttons' },
         { text: '复选框', link: '/contents/UserInput/Checkboxes' },
         { text: '按键输入', link: '/contents/UserInput/KeyInput' },
         { text: '下拉菜单', link: '/contents/UserInput/Menus' },
         { text: '鼠标输入', link: '/contents/UserInput/MouseInput' },
         { text: '单选按钮', link: '/contents/UserInput/RadioButtons ' },
         { text: '文本输入', link: '/contents/UserInput/TextInput' },
         { text: '滑块', link: '/contents/UserInput/Sliders' },
         { text: '小部件定位', link: '/contents/UserInput/WidgetPosition' },
         { text: '处理事件', link: '/contents/UserInput/ProcessingEvents' },

        ]
      },
    ]
  },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
  locales:{
    root:{
      label:'简体中文',
      lang:'zh'
    }
  }
})
