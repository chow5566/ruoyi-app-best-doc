// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css' // 引入自定义样式

export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        // 自定义应用增强可以在这里进行
    }
}
