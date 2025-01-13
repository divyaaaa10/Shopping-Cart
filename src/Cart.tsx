import { useState } from "react"
export default function Cart() {
  const [quantity, setQuantity] = useState([0, 0])
  const price = [100, 200];
  const [totalPrice, setTotalPrice] = useState(0)

  function Increase(i: number) {
    const newQuant = [...quantity]
    newQuant[i]++
    setQuantity(newQuant)
  }

  function Decrease(i: number) {
    const newQuant = [...quantity]
    if (newQuant[i] > 0) {
      newQuant[i]--
      setQuantity(newQuant)
    }
  }

  function TotalPrice() {
    let tot = 0
    for (let i = 0; i < quantity.length; i++) {
      tot += quantity[i] * price[i]
    }
    setTotalPrice(tot)
  }
  return (
    <div>
      <div>
        <div> Item 1</div>
        <div> Quantity = {quantity[0]}</div>
        <div>Price = {price[0]}</div>
        <button onClick={() => Increase(0)}>+</button>
        <button onClick={() => Decrease(0)}>-</button>
      </div>
      <div>
        <div> Item 2</div>
        <div> Quantity = {quantity[1]}</div>
        <div>Price = {price[1]}</div>
        <button onClick={() => Increase(1)}>+</button>
        <button onClick={() => Decrease(1)}>-</button>
      </div>
      <div>total = {totalPrice}</div>
      <button onClick={TotalPrice}>Calculate Total</button>
    </div>
  )
}
