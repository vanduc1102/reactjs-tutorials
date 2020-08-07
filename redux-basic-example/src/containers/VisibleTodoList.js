import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { VISIBILITY_FILTERS, toggleTodo } from "../actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VISIBILITY_FILTERS.SHOW_ALL:
      return todos;
    case VISIBILITY_FILTERS.SHOW_COMPLETE:
      return todos.filter((t) => t.completed);
    case VISIBILITY_FILTERS.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw Error("Unknow filter: " + filter );
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
