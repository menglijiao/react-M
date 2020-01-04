import React,{ Component } from 'react';
import {Layout, Menu, Breadcrumb, Icon,Button } from 'antd';
import { Route, Switch} from 'react-router-dom';
import 'antd/dist/antd.css';
import history from '../../history';
import menu from './menu';
import './css.less';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Components extends Component{
    constructor(){
        super();
        this.state = {
            collapsed: false,
            menuKey:[menu[0].path]
        };
    }
    componentWillMount(){
        this.getUserMenus();
    }
    //页面刷新时：先获取到路由地址，判断路由，若路由是首页的'/',则加默认路由、默认选中菜单，默认组件。只需要设置默认路由个默认菜单即可。
    // 若是其他的菜单，则选中该菜单即可。
    getUserMenus = () => {
        const {
            location: { pathname }
        } = this.props;
        let menuKey = '';
        if(pathname === '/'){
            menuKey = [menu[0].path];
            history.push(menu[0].path)
        }else{
            menuKey = [pathname]
        }
        this.setState({
            menuKey
        });
    };

    //点击菜单：设置路由和选中菜单
    selectMenu = (item)=>{
        this.setState({
            menuKey:item.selectedKeys
        });
        history.push(item.selectedKeys[0])
    };

    //点击收起或展开图标
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    //菜单渲染
    MenuItem = (menu) => {
        return menu.map((item) => {
            if (item.children && item.children.length > 0) {
                return (
                    <SubMenu
                        key={item.path}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.name}</span>
                            </span>
                        }
                    >
                        {this.MenuItem(item.children)}
                    </SubMenu>
                );
            }
            return (
                <Menu.Item
                    key={item.path}
                >
                    <Icon type={item.icon} />
                    <span>{item.name}</span>
                </Menu.Item>
            );
        });
    };

    render(){
        const {routes} = this.props;
        const {menuKey} = this.state;
        return (
            <div className="Components">
                <header className="head">测试项目</header>
                <Layout style={{ minHeight: 'calc(100% - 50px)',background:'#ccc' }}>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <Header style={{padding:0,textAlign:'center'}}>
                            <Icon
                                className="trigger"
                                style={{color:'#fff'}}
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </Header>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onSelect={this.selectMenu} selectedKeys={menuKey}>
                            {this.MenuItem(menu)}
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <Switch>
                                {routes.map((route, i) => {
                                    return (
                                        <Route
                                            key={i}
                                            exact={route.exact}
                                            path={route.path}
                                            render={(props) => <route.component {...props} routes={route.routes} />}
                                        />
                                    );
                                })}
                            </Switch>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }

}