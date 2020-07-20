// here there be JS, yarrr ☠️

const conversationElem = document.querySelector("#conversation-container");
const messageInput = document.querySelector("#user-input");
const sendMessage = (event) => {
  const updateConversation = (thismessage) => {
    console.log(thismessage);
    // deconstruct the message object
    const { author, text } = thismessage;
    // create a <p> element
    const messageElem = document.createElement("p");
    // add the text message to the element
    messageElem.innerHTML = `<span>${text}</span>`;
    // append the element to the conversation
    conversationElem.appendChild(messageElem);
    conversationElem.scrollTop = conversationElem.scrollHeight;
    messageElem.classList.add("message", author);
  };
  const message = { author: "user", text: messageInput.value };
  updateConversation(message);
  event.preventDefault();
  console.log(messageInput.value);

  fetch("/cat-message")
    .then((res) => res.json())
    .then((data) => {
      updateConversation(data.message);
    });
};

const handleFocus = () => {
  messageInput.focus();
};
