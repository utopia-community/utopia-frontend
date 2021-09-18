import { Card, Space, Button, Table, Statistic, Row, Col } from "antd";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Checkout.js";
import Checkout from "./Checkout.js";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    defaultSortOrder: "descend",
    sorter: (a, b) => (a.date < b.date ? -1 : 1),
  },
  {
    title: "Details",
    dataIndex: "details",
    onFilter: (value, record) => record.charges.indexOf(value) === 0,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.amount - b.amount,
  },
];

const data = [
  {
    key: "1",
    date: "2021/06/01",
    details: "HOA fee (June 2021)",
    amount: 120,
  },
  {
    key: "2",
    date: "2021/07/01",
    details: "HOA fee (July 2021)",
    amount: 120,
  },
  {
    key: "3",
    date: "2021/08/01",
    details: "HOA fee (August 2021)",
    amount: 120,
  },
  {
    key: "4",
    date: "2021/09/01",
    details: "HOA fee (September 2021)",
    amount: 120,
  },
];

const Payment = () => {
  const [displayCheckout, setDisplayCheckout] = useState(false);
  console.log("rendering Payment");
  return (
    <>
      <Row gutter={[32, 8]}>
        <Col span={18}>
          <Card title="Payment history">
            <Table columns={columns} dataSource={data} />
          </Card>
        </Col>

        <Col>
          <Card>
            <Space direction="vertical">
              <Statistic title="Balance outstanding" value={"$ 120"} />
              <Button onClick={() => setDisplayCheckout(true)} type="primary">
                Pay now
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>

      <Checkout
        displayModal={displayCheckout}
        onSuccess={() => setDisplayCheckout(false)}
        onCancel={() => setDisplayCheckout(false)}
      />
    </>
  );
};

export default Payment;
