import React, { useContext, useEffect } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    // console.log(response.data.data);
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h2>Мої замовлення</h2>
      <div className="container">
        {data.map((order, index) => {
          <div key={index} className="my-orders-order">
            <img src={assets.parcle_icon} alt="" />
            <p>
              {order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return item.name + " X " + item.quantity;
                } else {
                  return item.name + " X " + item.quantity + ", ";
                }
              })}
            </p>
            <p>{order.amount}₴</p>
            <p>Страви: {order.items.length}</p>
            <p>
              <span>&#x25cf;</span>
              <b>{order.status}</b>
            </p>
            <button onClick={fetchOrders}>Відстежувати замовлення</button>
          </div>;
        })}
      </div>
    </div>
  );
};

export default MyOrders;