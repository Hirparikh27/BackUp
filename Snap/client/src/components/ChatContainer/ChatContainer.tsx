// import React, { useState, useEffect, useRef } from "react";
// import ChatInput from "./ChatInput";
// import Logout from "./Logout";
// import { v4 as uuidv4 } from "uuid";
// import axios from "axios";
// import { sendMessageRoute, recieveMessageRoute } from "../utils/APIRoutes";
import ChatInput from "../ChatInput/ChatuInput";
import { Container } from "./ChatStyles";
export default function ChatContainer() {
  return (
    <Container>
      <div className="chat-header">
        <div className="user-details">
          <div className="avatar">
            {/* <img
              src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
              alt=""
            /> */}
          </div>
          <div className="username">
            {/* <h3>{currentChat.username}</h3> */}
          </div>
        </div>
        {/* <Logout /> */}
      </div>
      <div className="chat-messages">
        {/* {messages.map((message) => {
          return (
            <div ref={scrollRef} key={uuidv4()}>
              <div
                className={`message ${
                  message.fromSelf ? "sended" : "recieved"
                }`}
              >
                <div className="content ">
                  <p>{message.message}</p>
                </div>
              </div> 
        </div>
       );
        })}  */}
      </div>
      {/* <ChatInput handleSendMsg={handleSendMsg} /> */}
      <ChatInput />
    </Container>
  );
}
