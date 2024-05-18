import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VPython 中文文档",
  description: "A guide for Vpython",
  themeConfig: {
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
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '3D 对象',
        collapsed: false,
        items: [
          { text: '箭头', link: '/3DObjects/arrow' },
          { text: '立方体', link: '/3DObjects/box' },
          { text: '锥体', link: '/3DObjects/cone' },
          { text: '曲线', link: '/3DObjects/curve' },
          { text: '圆柱体', link: '/3DObjects/cylinder' },
          { text: '椭球体', link: '/3DObjects/ellipsoid' },
          { text: '螺旋线', link: '/3DObjects/helix' },
          { text: '标签', link: '/3DObjects/label' },
          { text: '点', link: '/3DObjects/points' },
          { text: '金字塔', link: '/3DObjects/pyramid' },
          { text: '环', link: '/3DObjects/ring' },
          { text: '球体', link: '/3DObjects/sphere' },
 
        ]
      },
      {
        text: '动画',
        collapsed: true,
        items: [
          {text: '概述', link: '/Animations'}
        ]
      },
      {
        text: '画布',
        collapsed: true,
        items: [
          {text: '概述', link: '/Canvases'}
        ]
  
      },
      {
        text: '相机和灯光',
        collapsed: true,
        items: [
          { text: '相机', link: '/CameraAndLighting/Camera' },
          { text: '灯光', link: '/CameraAndLighting/Lighting' },
        ]
      },
      {
        text: '颜色、透明度、发光',
        collapsed: true,
        items: [
          { text: '颜色', link: '/ColorOpacityGlow/color' },
          { text: '透明度', link: '/ColorOpacityGlow/Opacity' },
          { text: '发光', link: '/ColorOpacityGlow/Emissive' },
        ]
      },
      {
        text: '自定义3D对象',
        collapsed: true,
        items: [
          { text: '概述', link: '/DesignNewObjects/' },
          { text: '组合体', link: '/DesignNewObjects/Compound' },
          { text: '组', link: '/DesignNewObjects/Group' },
          { text: '三角面', link: '/DesignNewObjects/Triangles' },
          { text: '挤压型状', link: '/DesignNewObjects/Extrusions' },
          { text: '形状和路径', link: '/DesignNewObjects/ShapesandPaths' },
          { text: '克隆', link: '/DesignNewObjects/clone' },
        ]
      },
      {
        text: '文件和库',
        collapsed: true,
        items: [
          {text: '概述', link: '/Files-and-Libraries'}
        ]
        
      },
      {
        text: '图表',
        collapsed: true,
        items: [
          {text: '概述', link: '/Graphs'}
        ]
    
      },
      {
        text: '数学函数和向量操作',
        collapsed: true,
        items: [
          { text: '数学函数', link: '/MathFuntions/MathFunctions' },
          { text: '向量操作', link: '/MathFuntions/VectorOperations' },
        ]
      },
      {
        text: '对象操作',
        collapsed: true,
        items: [
          { text: '留下轨迹', link: '/ObjectAttachments/Leaving-a-Trail' },
          { text: '添加箭头', link: '/ObjectAttachments/attach_arrow' },
          { text: '添加光源', link: '/ObjectAttachments/attach_light' },
        ]
      },
      {
        text: '旋转对象',
        collapsed: true,
        items: [
          { text: '概述', link: '/Rotation/' },
    
        ]
      },
      {
        text: '文字输出',
        collapsed: true,
        items: [
          { text: 'Print', link: '/TextOutput/print' },
          { text: 'Wtext', link: '/TextOutput/wtext' },
          { text: 'Webvpython特有', link: '/TextOutput/WebVPython-only' },
          { text: 'LaTeX 数学显示', link: '/TextOutput/LaTeXMathDisplay' },
        ]
      },
      {
        text: '材质纹理',
        collapsed: true,
        items: [
         { text: '概述', link: '/TexturesandBumpmaps' },
        ]
      },
      {
        text: '用户输入',
        collapsed: true,
        items: [
         { text: '按钮', link: '/UserInput/Button' },
         { text: '复选框', link: '/UserInput/Checkboxes' },
         { text: '按键输入', link: '/UserInput/KeyInput' },
         { text: '下拉菜单', link: '/UserInput/Menus' },
         { text: '鼠标输入', link: '/UserInput/MouseInput' },
         { text: '单选按钮', link: '/UserInput/RadioButtons ' },
         { text: '文本输入', link: '/UserInput/TextInput' },
         { text: '小部件定位', link: '/UserInput/WidgetPosition' },
         { text: '处理事件', link: '/UserInput/ProcessingEvents' },

        ]
      },

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
