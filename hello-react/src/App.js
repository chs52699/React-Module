import "./App.css";
import Counter from "./Counter";
import MyComponent from "./MyComponent";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import InterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";

const App = () => {
  return (
    <>
      <LifeCycleSample></LifeCycleSample>
      <br />
      <br />
      <InterationSample></InterationSample>
      <br />
      <br />
      <ScrollBox></ScrollBox>
      <br />
      <br />
      <ValidationSample></ValidationSample>
      <br />
      <br />
      <EventPractice></EventPractice>
      <br />
      <br />
      <Say></Say>
      <br />
      <br />
      <Counter name={5}></Counter>
      <br />
      <br />
      <MyComponent>칠드런</MyComponent>
    </>
  );
};

export default App;

// import { Component } from "react";
// import ScrollBox from "./ScrollBox";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => (this.scrollBox = ref)}></ScrollBox>
//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           맨 밑으로
//         </button>
//       </div>
//     );
//   }
// }

// export default App;
