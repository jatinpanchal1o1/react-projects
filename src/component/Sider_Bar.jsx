import React from "react";
// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//   (icon, index) => {
//     const key = String(index + 1);
//     return {
//       key: `sub${key}`,
//       icon: React.createElement(icon),
//       label: `subnav ${key}`,
//       // children: new Array(4).fill(null).map((_, j) => {
//       //   const subKey = index * 4 + j + 1;
//       //   return {
//       //     key: subKey,
//       //     label: `option${subKey}`,
//       //   };
//       // }),
//     };
//   }
// );

const style = { color: "#92929D", fontSize: "1.5em" };

import { AiOutlineAppstore } from "react-icons/ai";
import Order_icon from "../assets/Dazzie_Icons/orders.svg";
import Customer_icon from "../assets/Dazzie_Icons/customer.svg";
import Package_icon from "../assets/Dazzie_Icons/Package.svg";
import Coupon_icon from "../assets/Dazzie_Icons/Coupon.svg";
import User_icon from "../assets/Dazzie_Icons/user.svg";
import Setting_icon from "../assets/Dazzie_Icons/seettings.svg";

const Sider_Bar = () => {
  return (
    <div className="Sidebar">
      <div className="topSide">
        <ul className="topList">
          <li>
            <AiOutlineAppstore style={style} />
          </li>
          <li>
            <img src={Order_icon} alt="order_icon" />
          </li>
          <li>
            <img src={Customer_icon} alt="customer_icon" />
          </li>
          <li>
            <img src={Package_icon} alt="package_icon" />
          </li>
          <li>
            <img src={Coupon_icon} alt="coupon_icon" />
          </li>
          <li>
            <img src={User_icon} alt="user_icon" />
          </li>
        </ul>
      </div>
      <div className="bottomSide">
        <ul className="bottomList">
          <li>
            <img src={Setting_icon} alt="setting_icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sider_Bar;
