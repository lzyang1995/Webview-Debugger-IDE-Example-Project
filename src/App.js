import React from 'react';

function executeProtocol(href) {
  let iframe = document.createElement("iframe");
  iframe.style.width = "0px";
  iframe.style.height = "0px";
  iframe.hidden = true;

  iframe.src = href;
  (document.body || document.documentElement).append(iframe);

  setTimeout(() => {
    iframe && iframe.parentNode && iframe.remove()
  }, 1000);
}

function setTitle(title) {
  if (title) {
    let href = "abc://web/settitle?title=" + encodeURIComponent(title);
    executeProtocol(href);
  }
}

function getContact(callback) {
  if (callback) {
    let href = "abc://web/info/getContact?callback=" + encodeURIComponent("javascript:" + callback);
    executeProtocol(href);
  }
}

function share(val) {
  if (val) {
    let href = "abc://web/share?share=" + encodeURIComponent(val);
    executeProtocol(href);
  }
}

function App() {
  return (
    <div>
      <p>Request: abc://web/settitle?title=Good Title</p>
      <button onClick={() => setTitle("Good Title")}>set title</button>
      <hr />

      <p>Request: abc://web/info/getContact?callback=javascript:getContactCallback</p>
      <button onClick={() => getContact("getContactCallback")}>get contact</button>
      <hr />

      <p>Request: abc://web/share?share=good share</p>
      <p>(This does not exist in default protocol configuration)</p>
      <button onClick={() => share("good share")}>share</button>
      <hr />
    </div>
  );
}

export default App;
