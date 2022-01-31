import React from "react";
import m from "./dialogs.module.css";
const Dialogs = (props) => {
  return (
    <div>
      <div className={m.dialogs}>
        <div className={m.dialogsItem}>
          <div className={m.dialog}>sasha</div>
          <div className={m.dialogsItem}>
            <div className={m.dialog}>masha</div>
            <div className={m.dialogsItem}>
              <div className={m.dialog}>ilya</div>
              <div className={m.dialogsItem}>
                <div className={m.dialog}>margo</div>
                <div className={m.dialogsItem}>
                  <div className={m.dialog}>anna</div>
                  <div className={m.dialogsItem}>
                    <div className={m.dialog}>elena</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={m.messages}>
          <div className={m.messageItem}>
            <div className={m.message}>hello, how are you?</div>
            <div className={m.message}>i'm fine</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
