import { useState } from 'react';

export default function Checkout(){
  const [name,setName]=useState('');
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <form className="space-y-4">
        <div><label>Name:</label><input type="text" className="w-full border p-2" value={name} onChange={e=>setName(e.target.value)}/></div>
        <div><label>Address:</label><input type="text" className="w-full border p-2"/></div>
        <div><label>Payment Info:</label><input type="text" className="w-full border p-2"/></div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Place Order</button>
      </form>
    </div>
  );
}
