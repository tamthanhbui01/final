import { useState } from "react";
import { InputNumber, Typography, Space } from "antd";
const { Text } = Typography;
function App() {
  const [VND, setVND] = useState(0);
  const [USD, setUSD] = useState(0);

  return (
    <div style={{ margin: 20 }}>
      <div style={{fontSize: 24, fontWeight: "bold" }}>Unit Converter</div>
      <Space direction="vertical" style={{marginTop:12}}>
        <Text>From: VND </Text>
        <InputNumber
          style={{
            width: 500,
          }}
          value={VND}
          min={0}
          onChange={(value) => {
            setVND(value);
            setUSD(value / 22000);
          }}
        />
        <Text>To: USD </Text>
        <InputNumber
          style={{
            width: 500,
          }}
          min={0}
          value={USD}
          readOnly={true}
        />
      </Space>
    </div>
  );
}

export default App;
