import {
  Card,
  Space,
  Button,
  Table,
  Statistic,
  Row,
  Col,
  Typography,
} from "antd";
import { useHistory } from "react-router-dom";

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
    details: "HOA fee (June)",
    amount: 120,
  },
  {
    key: "2",
    date: "2021/07/01",
    details: "HOA fee (July)",
    amount: 120,
  },
  {
    key: "3",
    date: "2021/08/01",
    details: "HOA fee (August)",
    amount: 120,
  },
  {
    key: "4",
    date: "2021/09/01",
    details: "HOA fee (September)",
    amount: 10,
  },
];

const Payment = () => {
  const { Title } = Typography;
  const history = useHistory();

  return (
    <Row gutter={[32, 8]}>
      <Col span={18}>
        <Card title="Payment history">
          <Table columns={columns} dataSource={data} />
        </Card>
      </Col>

      <Col>
        <Card>
          <Space direction="vertical">
            <Statistic title="Balance outstanding" value={"$ 100"} />
            <Button
              onClick={() => history.push("/payment/checkout")}
              type="primary"
            >
              Pay now
            </Button>
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default Payment;
