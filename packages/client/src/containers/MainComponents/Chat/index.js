import React from "react";

import "./style.scss";
import InputBar from "./InputBar";
import Avatar from "containers/MainComponents/Avatar";
// const chats = [];

const Message = ({ chat, user }) => (
  <div
    className={`clearfix chat__item ${
      user === chat.username ? "chat__item--left" : "chat__item--right"
    }`}
  >
    <div className="chat__itemAvatar">
      <Avatar src={chat.img} size="50" border="false" />
    </div>
    <div className="chat__itemContent">
      <strong>{chat.username}</strong>
      <p>{chat.text}</p>
    </div>
  </div>
);

class Chat extends React.Component {
  state = {
    // chats: chats,
    username: "Chris Evans"
  };

  render() {
    const { username } = this.state;
    const { chats, listingId } = this.props;

    return (
      <div className="chat">
        <div className="chat__messaging" style={{ height: 287 }}>
          <div className="chat__block">
            {chats.map((chat, index) => (
              <Message chat={chat} user={username} key={index} />
            ))}
          </div>
        </div>
        {/* <form className="form-group mt-4 mb-0">
          <textarea
            className="form-control adjustable-textarea"
            placeholder="Type message..."
          />
          <div className="mt-3">
            <button type="submit" className="btn btn-primary width-200">
              <i className="fa fa-send mr-2" />
              Send
            </button>
            <button className="btn btn-link">Attach File</button> */}
        <InputBar listingId={listingId} />
        <button onClick={this.unsubscribe}>unsubscribe</button>
        {/* </div> */}
        {/* </form> */}
      </div>
    );
  }
}

export default Chat;
