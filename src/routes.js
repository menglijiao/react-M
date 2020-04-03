/**
 * 路由配置对象化
 * @return {array}
 */
import Loadable from 'react-loadable';
import Loading from './Components/Public/Loading/index';
const routes = [
    {
        path: '/login', //登录
        component: Loadable({ loader: () => import('./Components/Login/index'), loading: Loading })
    },
    {
        path: '/', //主页
        component: Loadable({ loader: () => import('./Components/Main/index'), loading: Loading }),
        routes: [
            {
                exact: true,
                path: '/LearnJs',
                component: Loadable({ loader: () => import('./Components/LearnJs/index'), loading: Loading })
            },
            {
                exact: true,
                path: '/Svg',
                component: Loadable({ loader: () => import('./Components/Svg/index'), loading: Loading })
            },
            {
                exact: true,
                path: '/ImgShow',
                component: Loadable({ loader: () => import('./Components/ImgShow/index'), loading: Loading })
            },
            {
                exact: true,
                path: '/Tab',
                component: Loadable({ loader: () => import('./Components/Tab/index'), loading: Loading })
            },
            {
                exact: true,
                path: '/Transfer',
                component: Loadable({ loader: () => import('./Components/Transfer_M/index'), loading: Loading })
            },
            {
                exact: true,
                path: '/Box/a',
                component: Loadable({ loader: () => import('./Components/Box/index'), loading: Loading })
            },
            {
                exact: true,
                path: '/Box/b',
                component: Loadable({ loader: () => import('./Components/Box/index'), loading: Loading })
            },
            {
                exact: true,
                path: '/Upload',
                component: Loadable({ loader: () => import('./Components/Upload/index'), loading: Loading })
            },
            {
                exact: true,
                path: '/BizCharts',
                component: Loadable({ loader: () => import('./Components/BizCharts/index'), loading: Loading })
            },
            {
                exact: true,
                path: '/redux',
                component: Loadable({ loader: () => import('./Components/TodoList/index'), loading: Loading })
            },
            {
                exact: true,
                path: '/hooks',
                component: Loadable({ loader: () => import('./Components/Hooks/index'), loading: Loading })
            },
        ]
    }
];
export default routes;