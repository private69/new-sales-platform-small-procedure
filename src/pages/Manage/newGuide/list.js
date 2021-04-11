export default {
    list: [
        {
            index: 0,
        }
    ],
    driver: [
        {
            // 顶部导航 
            element: '.pages-wrapper',
            popover: {
              title: 'Breadcrumb',
              description: 'current page location (嗯方向键下一步)',
              position: 'left'
            },
            onNext: ele => {
                console.log(ele);
            }
        },
        { 
            element: '#el-index__iframe',
            popover: {
              title: '这是标题',
              description: `<i>这是描述的内容  (嗯方向键下一步)</i>`,
              position: 'right'
            },
            onNext: ele => {
                console.log(ele);
            }
        },
        {
            // 侧边栏 
            element: '.menu-wrapper',
            popover: {
              title: 'Breadcrumb',
              description: 'current page location  (嗯方向键下一步)',
              position: 'right'
            },
            onNext: ele => {
                console.log(ele);
            }
        },
        {
            // 侧边第一项
            element: '#manage-project',
            popover: {
                title: 'Breadcrumb',
                description: 'current page location  (嗯方向键下一步)',
                position: 'right'
            },
            onNext: ele => {
                console.log(ele);
            }
        },
        {
            // 侧边第二项
            element: '#manage-font',
            popover: {
                title: 'Breadcrumb',
                description: 'current page location  (嗯方向键下一步)',
                position: 'right'
            },
            onNext: ele => {
                console.log(ele);
            }
        },
        {
            // 侧边第三项
            element: '#manage-music',
            popover: {
                title: 'Breadcrumb',
                description: 'current page location  (嗯方向键下一步)',
                position: 'right'
            },
            onNext: ele => {
                console.log(ele);
            }
        },
        {
            // 侧边第四项
            element: '#manage-newGuide',
            popover: {
                title: 'Breadcrumb',
                description: 'current page location  (嗯方向键下一步)',
                position: 'right'
            },
            onNext: ele => {
                console.log(ele);
            }
        },
        {
            // 侧边第五项
            element: '#manage-about',
            popover: {
                title: 'Breadcrumb',
                description: 'current page location  (嗯方向键下一步)',
                position: 'right'
            },
            onNext: ele => {
                console.log(ele);
            }
        },
        {
            element: '#chart',
            popover: {
              title: 'Breadcrumb',
              description: 'current page location  (嗯方向键下一步)',
              position: 'left'
            },
            onNext: ele => {
                console.log(ele);
            }
          },
    ],
    // 步骤说明
    steps: [
        {
            title: '步骤一',
            description: '登录进入项目首页'
        },
        {
            title: '步骤二',
            description: '登录进入项目首页'
        },
        {
            title: '步骤三',
            description: '登录进入项目首页'
        },
        {
            title: '步骤四',
            description: '登录进入项目首页'
        },
        {
            title: '步骤五',
            description: '登录进入项目首页'
        },
    ]
}