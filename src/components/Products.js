import siz from "../img/sizes.jpg";

export default function Products({ stores }) {
  return (
    <div className="products w-100">
      <div className="produ text-align-center">
        <h1 className="text-uppercase">Welcome to my store</h1>
        <p className="text-capitalize">
          these products i hope will be satisfied
        </p>
      </div>
      <div className="container vh-100 d-flex flex-wrap align-items-center justify-content-evenly text-capitalize">
        {stores.map((store) => {
          return (
            <div key={store.id} className="product text-align-center">
              <div className="produ-img">
                <img className="siz" src={siz} alt="" />
              </div>
              <div className="prudc-inf">
                <h3> {store.title}</h3>
                <h4>{store.style}</h4>
                <h5>
                  {store.price} {store.currencyFormat}
                </h5>
                <p>{store.availableSizes}</p>
                <button className="add">Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
