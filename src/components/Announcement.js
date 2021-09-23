import { Card, message, Typography, Space, Col, Row } from "antd";
import {
  ReadOutlined,
  TeamOutlined,
  ToolOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getAnnouncements } from "../utils";

const { Text } = Typography;
const { Meta } = Card;

const AnnouncementContent = (props) => {
  return (
    <Space direction="vertical">
      <h5>
        <Text type="secondary"> {props.date}</Text>
      </h5>
      <Text>{props.content}</Text>
    </Space>
  );
};

const getCategoryIcon = (category) => {
  const categoryToIcon = {
    category1: <HomeOutlined />,
    category2: <TeamOutlined />,
    category3: <ToolOutlined />,
    category4: <ReadOutlined />,
  };
  return categoryToIcon[category] || <HomeOutlined />;
};

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    getAnnouncements()
      .then((data) => {
        setAnnouncements(data);
      })
      .catch((err) => {
        message.error(err.message);
      });
  }, []);

  return (
    <>
      <Row gutter={[16, 16]}>
        {announcements.map(({ title, category, content, creationTime }) => (
          <Col span={8}>
            <Card
              style={{
                height: "100%",
                minHeight: "200px",
                textAlign: "center",
              }}
              bordered={false}
            >
              {getCategoryIcon(category)}
              <br />
              <h1 style={{fontSize: "18px"}}> {title}</h1>
              <AnnouncementContent content={content} date={creationTime} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Announcement;
