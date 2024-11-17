// TodoTemplate.js
import "./scss/TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">오늘 할 일</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;