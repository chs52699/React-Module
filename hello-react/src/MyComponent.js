//Props 전달, defaultProps 설정, PropTypes 설정

// import { Component } from "react";
// import PropTypes from "prop-types";

// class MyComponent extends Component {
//   static defaultProps = {
//     name: "조현성",
//     favoriteNumber: "1",
//   };
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//     favoriteNumber: PropTypes.number,
//   };
//   render() {
//     const { name, favoriteNumber, children } = this.props;

//     return (
//       <>
//         안녕하세여. 제 이름은 {name} 입니다. <br />
//         children값은 {children}입니다. <br />
//         제가 좋아하는 숫자는 {favoriteNumber} 입니다.
//       </>
//     );
//   }
// }

// export default MyComponent;

import PropTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <>
      안녕하세여. 제 이름은 {name} 입니다. <br />
      children값은 {children}입니다. <br />
      제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </>
  );
};

MyComponent.defaultProps = {
  name: "조현성",
  favoriteNumber: 1,
};

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
};
export default MyComponent;
