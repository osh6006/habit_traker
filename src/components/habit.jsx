import React, { PureComponent } from "react";

class Habit extends PureComponent {
  // 등록이 되었을 때 (보여질 때)
  // 초기화나 이런것들
  componentDidMount() {
    console.log(`habit: ${this.props.habit.name} mounted`);
  }
  // 없어질 때 (사라질 때)
  // 리소스정리 (소켓 닫기)
  componentWillUnmount() {
    console.log(`habit: ${this.props.habit.name} will unmount`);
  }
  // state = {
  //   count: 0,
  // };

  handleIncrement = event => {
    // console.log(event);
    // // 스테이트 오브젝트 안에 있는 count를 증가한 뒤 start를 업데이트 해야 함.
    // // 하지 않으면 업데이트한 줄 모름!
    // this.setState({ count: this.state.count + 1 });
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = event => {
    // const count = this.state.count - 1;
    // this.setState({ count: count < 0 ? 0 : count });
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fa-solid fa-minus"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
