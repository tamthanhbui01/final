import { useState } from "react";
import { Button, Space, Typography } from "antd";
const { Text } = Typography;
function HelloWorld() {
  const [store, setStore] = useState([]);

  return (
    <div style={{ margin: 20 }}>
      <div style={{ fontSize: 24, fontWeight: "bold" }}>Hello World</div>
      <div style={{ marginTop: 12 }}>
        <Space>
          <Button
            onClick={() => {
              let arr = [...store];
              arr.push("");
              console.log(arr.length);
              setStore(arr);
            }}
          >
            Add me
          </Button>
          <Button
            onClick={() => {
              store.pop();
              let arr = [...store];
              setStore(arr);
            }}
          >
            Remove me
          </Button>
        </Space>
      </div>
      <div style={{ marginTop: 12, display: "flex", flexDirection: "column" }}>
        {store.map((_, idx) => (
          <Text style={{ fontWeight: "bold" }} type="success" key={idx}>
            Hello World
          </Text>
        ))}
      </div>
    </div>
  );
}
export default HelloWorld;
