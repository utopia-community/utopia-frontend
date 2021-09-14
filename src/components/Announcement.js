import { Card, Typography, Space } from "antd";
import { Link } from "react-router-dom";

import "./Profile.js";

const { Text } = Typography;

const AnnouncementContent = (props) => {
  const date = new Date().toISOString().slice(0, 10);
  return (
    <Space direction="vertical">
      <h1>
        <Text strong>{props.content}</Text>
      </h1>
      <h5>
        <Text type="secondary">Date posted: {date}</Text>
      </h5>
    </Space>
  );
};

const Announcement = () => {
  return (
    <Card title="Announcement">
      <Card
        type="inner"
        title="Title 1"
        extra={<Link to="/announcement-details">More</Link>}
        // extra={<a href="#">More</a>}
      >
        <AnnouncementContent content="Content here..." />
      </Card>

      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="Title 2"
        extra={<a href="#">More</a>}
      >
        Inner Card content
      </Card>
    </Card>
  );
};

export default Announcement;
