import React, {useState} from 'react';
import {useNavigate, Outlet} from "react-router-dom";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {Layout, Menu, Button, theme} from 'antd';

const {Header, Sider, Content} = Layout;
const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    return (
        <Layout style={{height: "100vh"}}>
            <Sider trigger={null} style={{background:"crimson"}} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical text-center text-white">
                    <h2> Logo </h2>
                </div>
                <Menu
                    theme="dark"
                    style={{background:"crimson"}}
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={(e)=> navigate(e.key)  }
                    items={[
                        {
                            key: '/xodimlar',
                            icon: <UserOutlined/>,
                            label: 'Xodimlar',
                        },
                        {
                            key: '/lavozim',
                            icon: <VideoCameraOutlined/>,
                            label: 'Lavozim',
                        },
                        {
                            key: '/daraja',
                            icon: <UploadOutlined/>,
                            label: 'Daraja',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: "lightgreen",
                        borderRadius: borderRadiusLG,
                    }}
                >
                   <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};
export default App;