import { useEffect, useState } from "react";
import { useGlobalContext } from "./store/context";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./LoginPage/firebase-config";
import Home from "./components/Home";
import RootLayout from "./components/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UnauthorizedPage from "./components/NotAuthorised/NotAuthorised";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "unauthorizedpage", element: <UnauthorizedPage /> },
    ],
  },
]);
let isInitial = true;
let isInitial2 = true;

function App(props) {
  const [user, setUser] = useState({});
  const [sendReports, setSendReports] = useState(false);
  const {
    setCartAtReducer,
    cart,
    notifications,
    notification,
    isSubmitting,
    setIsSubmitting,
  } = useGlobalContext();
  const [cartIsShown, setCartIsShown] = useState(false);

  useEffect(() => {
    // onAuthStateChanged listener to update the user state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      // Unsubscribe the onAuthStateChanged listener when the component unmounts
      unsubscribe();
    };
  }, []);

  //_______________loading____________________________
  const fetchCartData = async () => {
    try {
      console.log("inside fetchCartData function");
      const response = await fetch(
        "https://tac-capetown-default-rtdb.firebaseio.com/capetown.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      console.log("cart data Fetched success.........");

      return data || [];
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const cartData = await fetchCartData();
      console.log("cartData", cartData);
      setCartAtReducer(cartData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("cart", cart);
  }, []);

  ////  _________________________________sending__________

  useEffect(() => {
    const sendCartData = async () => {
      const memberS = Array.from(cart.entries()).map(([id, item]) => ({
        id,
        ...item,
      }));
      notifications("pending", "Sending...", "Sending cart data!");
      const response = await fetch(
        "https://tac-capetown-default-rtdb.firebaseio.com/capetown.json",
        {
          method: "PUT",
          body: JSON.stringify(memberS),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
      setIsSubmitting(false);
      notifications("success", "Success!", "Sent cart data successfully!");
    };

    // Rest of your code...
    // First condition
    if (isInitial) {
      isInitial = false;
      console.log("First condition");
      return;
    }

    // Second condition
    if (isInitial2) {
      isInitial2 = false;
      console.log("Second condition");
      return;
    }

    if (cart.size === 0) {
      // Cart is empty, no need to send data
      console.log("Cart is empty, no need to send data");
      return;
    }
    sendCartData().catch((error) => {
      notifications("error", "Error!", "Sending cart data failed!");
    });
  }, [isSubmitting]);

  const memberS = Array.from(cart.entries()).map(([id, item]) => ({
    id,
    ...item,
  }));
  return (
    <main>
      <RouterProvider router={router} />;
    </main>
  );
}

export default App;
