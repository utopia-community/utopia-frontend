import { Card } from "antd";
import Payment from "./Payment.js";
import Request from "./Request.js";

const MyProfile = () => {
  return (
    <>
      <Card>
        <Request />
      </Card>
      <Card style={{ marginTop: 16 }}>
        <Payment />
      </Card>
    </>
  );
};

export default MyProfile;
