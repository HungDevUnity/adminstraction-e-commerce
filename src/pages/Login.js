import { Form, Input, Button, Card } from "antd";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    if (
      values.username === "admin" &&
      values.password === "123456"
    ) {
      localStorage.setItem("isLogin", "true");
      navigate("/");
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(135deg, #667eea, #764ba2)"  }}>
      <Card title="Login" style={{ width: 300, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <Form onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true }]}>
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Login;

