import FeatherIcon from "feather-icons-react";
import { useState } from "react";
export default function Cart() {
  const [btn, setBtn] = useState(false);

  function haneleClick() {
    setBtn((btn) => !btn);
  }

  let toggleClassCleck = btn ? "avtive" : '';

  return (
    <div className="bag d-flex align-items-center justify-content-center">
      <FeatherIcon
        icon="shopping-bag"
        className={`btn${toggleClassCleck}`}
        onClick={haneleClick}
      />
      <FeatherIcon icon="x" className="x" />
    </div>
  );
}
