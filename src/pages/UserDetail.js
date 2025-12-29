import { Table, Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const deleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Phone", dataIndex: "phone" },
    { title: "Website", dataIndex: "website" },
    {
      title: "Action",
      render: (_, record) => (
        <>
          <Button onClick={() => navigate(`/users/${record.id}`)}>
            Detail
          </Button>
          <Button danger onClick={() => deleteUser(record.id)} style={{ marginLeft: 8 }}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return <Table columns={columns} dataSource={users} rowKey="id" />;
}

export default Users;
