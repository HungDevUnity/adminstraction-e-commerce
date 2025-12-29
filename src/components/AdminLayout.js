import { Layout, Menu, Button } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Sider, Content } = Layout;

function AdminLayout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <Menu
          theme="dark"
          mode="inline"
          items={[
            { key: "1", label: "Dashboard", onClick: () => navigate("/") },
            { key: "2", label: "Users", onClick: () => navigate("/users") },
            { key: "3", label: "Products", onClick: () => navigate("/products") },
            { key: "4", label: <Button type="primary" danger onClick={logout}>Logout</Button> },
          ]}
        />
      </Sider>

      <Layout>
        <Content style={{ margin: 16 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
