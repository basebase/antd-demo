/**
 * Created by Joker on 17/6/21.
 */
const menus = [

    {
        key: 'operating',
        name: '运营数据概览',
        icon: 'rocket',
    },
    {
        key: 'product',
        name: '产品数据概览',
        icon: 'notification',
    },
    {
        key: 'marketing',
        name: '营销数据概览',
        icon: 'bank',
    },
    {
        key: 'overview',
        name: '数据概览',
        icon: 'pie-chart',
        child: [
            {
                key: 'boss',
                name: '老板看板'
            },

            {
                key: 'pm',
                name: '产品数据概览'
            },

            {
                key: 'marketing',
                name: '营销数据概览'
            },
        ]
    },

    {
        key: 'user_action',
        name: '用户行为分析',
        icon: 'line-chart',
        child: [
            {
                key: 'event',
                name: '事件分析'
            },

            {
                key: 'funnel',
                name: '漏斗分析'
            },

            {
                key: 'retained',
                name: '留存分析'
            },

            {
                key: 'distribution',
                name: '分布分析'
            },

            {
                key: 'user_path',
                name: '用户路径'
            },

            {
                key: 'click',
                name: '点击分析'
            }
        ]
    },

    {
        key: 'user',
        name: '关于鱼策',
        icon: 'user',
    },

];

export default menus;