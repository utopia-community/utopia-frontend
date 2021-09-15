import * as React from "react";
import { Card } from "antd";

import "./Comment.js";

import CommentSection from "./Comment.js";

const AnnouncementDetails = () => {
  return (
    <Card title="Announcement #1">
      <Card type="inner" title="Inner Card title">
        Inner Card content
      </Card>
      <Card type="inner">
        <CommentSection />
      </Card>
    </Card>
  );
};

export default AnnouncementDetails;
