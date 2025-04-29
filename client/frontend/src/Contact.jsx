import React from "react";
import styles from "./styles/contact.module.css";
import user from "./assets/img.png";
import { useState } from "react";
function Contact() {
  const[userinfo,SetUserinfo]=useState()
  return (
    <div className={styles.main}>
      <div className={styles.chats}>
        <div className={styles.Contact}>Contact Center</div>
        <div>
          <p style={{ borderBottom: "2px solid grey", width: "50px" }}>Chats</p>
          <hr />
          <br />
          <div className={styles.users}>
            <img src={user} alt="" className={styles.userimg} />
            <div>
              <p style={{ color: "blue" }}>Chat 1</p>
              <p style={{ color: "gray", fontSize: "small" }}>
                i have a question
              </p>
            </div>
          </div>{" "}
          <br />
        </div>
      </div>

      <div className={styles.ticket}>
        <p
          className={styles.tktname}
          style={{ padding: "10px", color: "#86898C" }}
        >
          Ticket#123456687
        </p>
        <hr />
        <div className={styles.tktmessage}>message</div>
        <textarea
          className={styles.tktinput}
          placeholder="text area"
        ></textarea>
      </div>

      <div className={styles.members}>
        <div className={styles.usernamechat}>
          <img src={user} alt="" />
          <p>username</p>
        </div>{" "}
        <br />
        <div className={styles.detailsuser}>
          <p>Details</p> <br />
          <p className={styles.userright}>username</p>
          <p className={styles.userright}>mobile</p>
          <p className={styles.userright}>email</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
