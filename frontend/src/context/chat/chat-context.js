import React, { useState, useEffect, useContext } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./../Auth/auth-context";

const ChatContext = React.createContext({
  msgs: [],
  users: [],
  send: () => {},
});

const ChatContextProvider = (props) => {
  const [msgs, setMsgs] = useState([]);
  const [users, setUsers] = useState([]);
  const [connection, setConnection] = useState(null);
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      const con = io("http://localhost:9000", { path: "/chat" });

      if (con) {
        const initData = { user_name: sessionStorage.user_name };
        con.emit("INIT", initData);

        con.on("RECV", onMsgRecv);
        con.on("UPDATE", onUserListUpdate);

        setConnection(con);
      }
    }
  }, [isLoggedIn]);

  function send(data) {
    console.log(`REQUESTING MSG DELIVERY...`);
    console.log(data);
    console.log(connection);
    connection.emit("SEND", { content: data });
  }

  function onMsgRecv(data) {
    console.log(`INCOMING MSG...`);
    console.log(data);
    setMsgs((prevMsgs) => {
      return [...prevMsgs, data];
    });
  }

  function onUserListUpdate(data) {
    setUsers(data);
  }

  return (
    <ChatContext.Provider value={{ msgs: msgs, users: users, send: send }}>
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
export { ChatContext };
