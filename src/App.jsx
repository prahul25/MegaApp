import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import "./app.css";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((e) => console.log(e))
      .finally(setLoading(false));
  }, []);
  return (
    <>
      {loading ? (
        <div className="bg-gray-500 text-white text-3xl">Loading</div>
      ) : (

          <div className=" text-black text-3xl">
            <Header />
            <main>
              <Outlet />
            </main>
            <Footer/>
          </div>

      )}
    </>
  );
}

export default App;
