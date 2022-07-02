import "./app.css";
import "@fortawesome/fontawesome-free/js/all.js";
import Habits from "./components/habits";

import React, { Component } from "react";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reding", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = habit => {
    console.log(`handleIncrement, ${habit.name}`);
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        // 다른 것을 전부 복사해 오고 카운트만 다른것으로 덮어쓴다.
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits: habits });
  };

  handleDecrement = habit => {
    console.log(`handleDecrement, ${habit.name}`);
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits: habits });
  };

  handleDelete = habit => {
    console.log(`handleDelete, ${habit.name}`);
    // 내가 불러온 해빗의 아이디와 기존의 아이디와 같지 않은 것들만 묶기
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = name => {
    console.log("add");
    const habits = [...this.state.habits];
    const additem = { id: habits.length + 1, name: name, count: 0 };
    habits.push(additem);
    this.setState({ habits: habits });
  };

  handleClear = () => {
    console.log("receive");
    const habits = this.state.habits.map(item => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
    this.setState({ habits: habits });
  };

  // filter는 새 배열을 만든다 기존배열의 아이템을가지고...
  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter(item => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onClear={this.handleClear}
        />
      </>
    );
  }
}

export default App;
