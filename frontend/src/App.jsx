import "./App.css";
import React, { useContext } from 'react'
import { UserContainer, ChatViewer, AuthPanel } from "./components"
import { AuthContext } from "./context/Auth/auth-context";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  const APP = (<><UserContainer /><ChatViewer /></>)
  const AUTHPANEL = <AuthPanel />

  let contentToRender = isLoggedIn ? APP : AUTHPANEL;

  return (
    <div className="App">
      {contentToRender}
    </div>
  );
}

export default App;
