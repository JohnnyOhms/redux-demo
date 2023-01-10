import { displayUserCartItems } from "./cartSlice";

export function fetchCartData() {
  return async (dispatch) => {
    async function getFetchedData() {
      const fetchData = await fetch(
        "https://redux-db-tutorial-default-rtdb.firebaseio.com/cartItem.json"
      );
      const data = await fetchData.json();
      console.log(data);
      return data;
    }
    getFetchedData()
      //   .then(() => dispatch(displayUserCartItems()))
      .catch((err) => console.log(err));
  };
}

export function sendCartDataToDB(cartItem) {
  return async (dispatch) => {
    // notify sending data
    console.log("sending data");
    const sendCartItems = async () => {
      const response = await fetch(
        "https://redux-db-tutorial-default-rtdb.firebaseio.com/cartItem.json",
        {
          method: "PUT",
          body: JSON.stringify(cartItem),
        }
      );
      const data = await response.json();
    };
    sendCartItems()
      .then(() => {
        console.log("data sent");
      })
      .catch((err) => {
        console.log("failed to send ", err);
      });
  };
}
