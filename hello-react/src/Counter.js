// 클래스에서 state 사용법

import { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 5,
  };

  render() {
    const { fixedNumber, number } = this.state;
    const { name } = this.props;
    return (
      <div>
        <h1>{number}</h1>
        <h1>{name}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            // this.setState({ number: number + 1 }, () => {
            //   console.log("방금 setState가 추가되었습니다.");
            //   console.log(this.state.number);
            // });
            // this.setState({ number: this.state.number + 1 });
            this.setState((prevState, props) => {
              return { number: prevState.number + props.name };
            });
            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            // }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
