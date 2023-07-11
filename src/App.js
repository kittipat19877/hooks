import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [totalprice, setTotalprice] = useState(0);
  const [totalitems, setTotalitems] = useState(0);
  const [product1, setProduct1] = useState(150);
  const [product2, setProduct2] = useState(800);
  const [product3, setProduct3] = useState(300);

  return (
    <div className="App">
      <div>
        <div>
          <h3>จำนวนสินค้าในตะกร้า {totalitems}</h3>
          <h3>ราคาสินค้าทั้งหมด{totalprice} บาท</h3>
        </div>
        <img src="f1.jpg" alt="backpack" width="15%" />
        <br />
        กระเป๋า ราคา {product1} บาท
      </div>
      <button onClick={() =>{ 
      setTotalitems(totalitems + 1);
      setTotalprice(totalprice + product1)
      }}>เพิ่มลงในตะกร้า</button>
      <button onClick={() =>{
        if (totalitems > 0) {
      setTotalitems(totalitems - 1);
      setTotalprice(totalprice - product1)
        }
      }}>ลบออกจากตะกร้า</button>

      <div>
        <img src="f2.jpg" alt="backpack2" width="15%" />
        <br />
        กระเป๋า ราคา {product2} บาท
      </div>
      <button onClick={() =>{ 
      setTotalitems(totalitems + 1);
      setTotalprice(totalprice + product2)
      }}>เพิ่มลงในตะกร้า</button>
      <button onClick={() =>{
        if (totalitems > 0) {
      setTotalitems(totalitems - 1);
      setTotalprice(totalprice - product2)
        }
      }}>ลบออกจากตะกร้า</button>

      <div>
        <img src="f3.jpg" alt="backpack3" width="15%" />
        <br />
        กระเป๋า ราคา {product3} บาท
      </div>
      <button onClick={() =>{ 
      setTotalitems(totalitems + 1);
      setTotalprice(totalprice + product3)
      }}>เพิ่มลงในตะกร้า</button>
      <button onClick={() =>{
        if (totalitems > 0) {
      setTotalitems(totalitems - 1);
      setTotalprice(totalprice - product3)
        }
      }}>ลบออกจากตะกร้า</button>
    </div>
  );
}

export default App;
