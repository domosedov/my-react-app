import React from "react";
import style from "./Im.module.css";
import { Dialog } from "./Dialog/Dialog";
import { Message } from "./Message/Message";
import { Redirect } from "react-router-dom";

const Im = props => {
  const dialogElements = props.dialogs.map(el => (
    <Dialog name={el.name} id={el.id} key={el.id} />
  ));

  const messageElements = props.messages.map(el => (
    <Message message={el.message} key={el.id} />
  ));

  let newMessageElement = React.createRef();

  const onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };
  const OnAddMessage = () => {
    props.addMessage();
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={style.im}>
      <div className={style.dialogs}>{dialogElements}</div>
      <div className={style.chat}>
        <div className="posts__form">
          <textarea
            onChange={onMessageChange}
            ref={newMessageElement}
            value={props.newMessageText}
          />
          <br />
          <button onClick={OnAddMessage}>Add Post</button>
        </div>
        <hr />
        {messageElements}
      </div>
    </div>
  );
};

export default Im;
