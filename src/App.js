import Header from "./Header";
import Logo from "./Logo";
import SocialIcon from "./SocialIcon";

function App() {
  return (
    <div className="App Container">
      <div className="row">
        <Logo></Logo>
        <Header></Header>
        <SocialIcon></SocialIcon>
      </div>
    </div>
  );
}

export default App;
