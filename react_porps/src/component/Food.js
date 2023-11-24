import Delivery from './Delivery.js'
import React, {useState} from "react";

const Food = () => {
    const [showDelivery, setShowDelivery] = useState(false);

    const handleClick = () => {
      setShowDelivery(true);
    }

  return (
    <div className="food" >
      {showDelivery ? <Delivery value={"Pizza"} /> : null}
      <button id="pizza"
        onClick={handleClick}> Pizza </button>
      </div >
  )
}

export default Food;