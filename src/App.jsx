import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  const contentMasakiStyle = {
    color: "yellow",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentMasakiStyle}>ちゃうわい！</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
