import { Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, BulbOutlined, FundOutlined } from "@ant-design/icons";
import icon from "../img/cryptocurrency.png";

export const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypto Storm</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />} key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />} key="cryptocurrency">
          <Link to="/cryptocurrencies">Cryptocurrency</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />} key="news">
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
