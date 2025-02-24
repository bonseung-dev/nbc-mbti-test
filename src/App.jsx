import { ToastContainer } from "react-toastify";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import Router from "./shared/Router";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  );
}

export default App;
