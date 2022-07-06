import "../styles/header.css";
import React from 'react'
import PubSub from "pubsub-js"

const Header = () => {
  const subscribeAction = () => {
    alert("Subscribed!");
  };

  let topic = "ini topik";
  const subscribeTopic = () => {
    if (PubSub.countSubscriptions(topic) === 0) {
      PubSub.subscribe(topic, subscribeAction);
      alert("Subscribe Success!")
    } else {
      alert("You have already subscribed!");
    }
  }

  return (
    <header>
      <h1>Judul Header</h1>
      <nav>
        <a href="#" className="navlist">Home</a>
        <a href="#" className="navlist">Project</a>
        <a href="#" className="navlist">Contact Us</a>
        <a href="#" className="navlist">About</a>
        <a onClick={subscribeTopic} href="#" className="navlist">Subscribe</a>
      </nav>
    </header>
  );
}

export default Header;