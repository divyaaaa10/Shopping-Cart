import { useState } from "react"
export default function Cart() {
  const [quantity, setQauntity] = useState(0)
  const price = [100, 200];
  const [totalPrice, setTotalPrice] = useState(0)

  function Increase() {
    setQauntity(quantity + 1)
  }

  function Decrease() {
    if (quantity > 0) {
      setQauntity(quantity - 1)
    }
  }

  function TotalPrice() {
    let tot = 0
    tot += quantity * price
    setTotalPrice(tot)
  }
  return (
    <div>
      <div>
        <div> Item 1</div>
        <div> Quantity = {quantity}</div>
        <div>Price = {price[0]}</div>
        <button onClick={Increase}>+</button>
        <button onClick={Decrease}>-</button>
      </div>
      <div>
        <div> Item 2</div>
        <div> Quantity = {quantity}</div>
        <div>Price = {price[1]}</div>
        <button onClick={Increase}>+</button>
        <button onClick={Decrease}>-</button>
      </div>
      <div>total = {totalPrice}</div>
      <button onClick={TotalPrice}>Calculate Total</button>
    </div>
  )
}
