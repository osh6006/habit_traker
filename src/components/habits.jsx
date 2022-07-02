import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";
import Reset from "./reset";

class Habits extends Component {
  handleAdd = name => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <div>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement} // 부모로 이벤트전달 및 받기
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <Reset onClear={this.props.onClear} />
      </div>
    );
  }
}

export default Habits;
