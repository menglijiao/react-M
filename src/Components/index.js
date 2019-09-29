import React,{ Component } from 'react';
import {Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css';
import Box from './Box/index';
import Tab from './Tab/index';
import LearnJS from './LearnJS/index'
import './css.less';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Components extends Component{
    constructor(){
        super();
        this.state = {
            collapsed: false,
        };
    }

    //点击菜单
    selectMenu = (item,key)=>{
        console.log(item,key)
    };

    //点击收起或展开图标
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render(){
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
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onSelect={this.selectMenu}>
                            <Menu.Item key="1">
                                <Icon type="pie-chart" />
                                <span>Option 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="desktop" />
                                <span>Option 2</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="user" />
                                        <span>User</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="5">
                                <Icon type="file" />
                                <span>File</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            {/*<Box/>*/}
                            <Tab/>
                            <LearnJS/>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }

}