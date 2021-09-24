import { Card, Layout, message, Typography, Space, Col, Row } from "antd";
import {
  ReadOutlined,
  TeamOutlined,
  ToolOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getAnnouncements } from "../utils";

import background from "../images/unsplash-1.jpg";

const { Text } = Typography;

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
    GENERAL_ANNOUNCEMENT: <HomeOutlined />,
    COMMITTEE_MEETING: <TeamOutlined />,
    MAINTENANCE_UPDATE: <ToolOutlined />,
    OTHERS: <ReadOutlined />,
  };
  return categoryToIcon[category] || <ReadOutlined />;
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

  const headerBackgroundStyles = {
    backgroundImage: `url(${background})`,
    backgroundPosition: "0% 60%",
    backgroundSize: "100vw auto",
    backgroundRepeat: "no-repeat",
  };

  const footerBackgroundStyles = {
    backgroundImage: `url(${background})`,
    backgroundPosition: "0% 60%",
    backgroundSize: "100vw auto",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Layout>
      <div
        style={{
          height: "120px",
          padding: "50px",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
          ...headerBackgroundStyles,
        }}
      >
        Announcements
      </div>

      {/* display latest 6 announcements */}
      <Row
        gutter={[16, 16]}
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
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
              <h1 style={{ fontSize: "18px" }}> {title}</h1>
              <AnnouncementContent content={content} date={creationTime} />
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default Announcement;
