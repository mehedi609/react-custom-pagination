import TodoTable from './TodoTable';
import todosData from './data.json';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div>
            <h1>Todo List</h1>
            <TodoTable todos={todosData.todos} pageSize={5} />
        </div>
    );
};

export default App;
