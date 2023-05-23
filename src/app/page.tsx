"use client";

import { ConfigProvider, Layout, Typography } from "antd";

const { Content } = Layout;
const { Text } = Typography;

const Home = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "hsl(223, 87%, 63%)",
          colorBgLayout: "#FFF",
        },
      }}
    >
      <Layout>
        <Content>
          <Text>Ping coming soon page</Text>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Home;
