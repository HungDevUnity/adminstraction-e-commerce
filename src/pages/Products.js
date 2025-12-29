import { Table, Button, Image } from "antd";
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const columns = [
    { title: "Title", dataIndex: "title" },
    { title: "Price", dataIndex: "price" },
    { title: "Category", dataIndex: "category" },
    {
      title: "Image",
      render: (_, record) => <Image src={record.image} width={50} />,
    },
    {
      title: "Action",
      render: (_, record) => (
        <Button danger onClick={() => deleteProduct(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

  return <Table columns={columns} dataSource={products} rowKey="id" />;
}

export default Products;
