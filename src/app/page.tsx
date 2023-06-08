"use client";

import { Button, Col, Form, Input, Layout, Row, Typography } from "antd";
import Image from "next/image";

import logo from "@/assets/logo.svg";
import ilustrationDashboard from "@/assets/illustration-dashboard.png";
import FacebookIcon from "@/assets/FacebookIcon";
import InstagramIcon from "@/assets/InstagramIcon";
import TwitterIcon from "@/assets/TwitterIcon";

const { Content, Footer } = Layout;
const { Text, Title } = Typography;

const Home = () => {
  return (
    <Layout>
      <Content>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Image src={logo} alt="logo" style={{ marginTop: 36 }} />
          <Typography>
            <Title
              level={1}
              style={{
                fontWeight: 300,
                color: "hsl(0, 0%, 59%)",
                marginBottom: 6,
              }}
            >
              We are launching{" "}
              <span style={{ fontWeight: 700, color: "hsl(209, 33%, 12%)" }}>
                soon!
              </span>
            </Title>
            <Title
              // level={4}
              level={4}
              style={{
                fontWeight: 300,
                color: "hsl(209, 33%, 12%)",
                marginTop: 6,
              }}
            >
              Subscribe and get notified
            </Title>
          </Typography>
        </div>
        <Form
          style={{
            maxWidth: 500,
            margin: "0 auto",
            marginTop: 24,
          }}
          layout="inline"
        >
          <Form.Item style={{ flex: 1 }}>
            <Input
              size="large"
              placeholder="Your email address..."
              style={{ borderRadius: "50px", padding: "15px 30px" }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              size="large"
              type="primary"
              shape="round"
              style={{
                padding: "25px 50px",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: 600,
              }}
            >
              Notify Me
            </Button>
          </Form.Item>
        </Form>

        <Image
          src={ilustrationDashboard}
          alt="ilustration-dashboard"
          style={{
            display: "block",
            margin: "0 auto",
            marginTop: 48,
            marginBottom: 24,
            maxWidth: "60%",
            height: "auto",
          }}
        />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        <Row justify="center" gutter={20} style={{ marginBottom: 24 }}>
          <Col>
            <Button
              icon={
                <FacebookIcon
                  fill="hsl(223, 87%, 63%)"
                  height={24}
                  width={24}
                />
              }
              shape="circle"
              size="large"
            />
          </Col>
          <Col>
            <Button
              icon={
                <TwitterIcon fill="hsl(223, 87%, 63%)" height={24} width={24} />
              }
              shape="circle"
              size="large"
            />
          </Col>
          <Col>
            <Button
              icon={
                <InstagramIcon
                  fill="hsl(223, 87%, 63%)"
                  height={24}
                  width={24}
                />
              }
              shape="circle"
              size="large"
            />
          </Col>
        </Row>

        <Text
          style={{
            textAlign: "center",
            color: "hsl(0, 0%, 59%)",
          }}
        >
          &copy; Copyrigth Ping. All rights reserved.
        </Text>
      </Footer>
    </Layout>
  );
};

export default Home;
