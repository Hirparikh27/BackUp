// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { io } from "socket.io-client";
// import { allUsersRoute, host } from "../utils/APIRoutes";
import ChatContainer from "../../components/ChatContainer/ChatContainer";
import Welcome from "../../components/Welcome/Welcome";
// import Contacts from "../components/Contacts";
import { Container } from "./dashboardStyles";

export default function Dashboard() {
  return (
    <>
      <Container>
        <div className="container">
          {/* <Contacts contacts={contacts} changeChat={handleChatChange} />
          {currentChat === undefined ? (
          ) : (
            <ChatContainer currentChat={currentChat} socket={socket} />
          )} */}
          <Welcome />
        </div>
        <ChatContainer />
      </Container>
    </>
  );
}
