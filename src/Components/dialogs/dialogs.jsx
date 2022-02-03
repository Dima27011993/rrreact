import React from "react";
import { NavLink } from "react-router-dom";
import m from "./dialogs.module.css";

const Message = (props) => {
  return <div className={m.message}>{props.message}</div>;
};

const Dialogs = (props) => {

  let path = "/dialogs/" + props.id;
  let DialogArray = props.DialogData.map((d) => (
    <div className={m.dialog}>
      <NavLink to={path}>{d.name}</NavLink>
    </div>
  ));

  let messageArray = props.messageData.map((d) => <Message message={d.message} />);
  return (
    <div>
      <div className={m.dialogs}>
        <div className={m.dialogsItem}>
          <div className={m.dialog}>{DialogArray}</div>
        </div>
        <div className={m.messages}>
          <div className={m.messageItem}>{messageArray}</div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
