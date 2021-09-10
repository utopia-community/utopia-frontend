import { Card } from 'antd';

import "./Profile.js";


const Annoucement = () => {  
  return (
    <Card title="Announcement">
      <Card type="inner" title="Inner Card title 1" extra={<a href="#">More</a>}>
        Inner Card content
      </Card>
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="Inner Card title"
        extra={<a href="#">More</a>}
      >
        Inner Card content
      </Card>
    </Card>
  );
};

export default Annoucement;
