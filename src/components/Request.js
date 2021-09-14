import { useHistory } from "react-router-dom";

const Request = () => {
  const history = useHistory();

  return (
    <div>
      My Request!{" "}
      <a onClick={() => history.push("/request/new-request")}>Click me!</a>
    </div>
  );
};

export default Request;
