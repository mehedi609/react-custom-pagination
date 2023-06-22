import TodoTable from './TodoTable';
import todosData from './data.json';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className="App">
            <h1>Todo List</h1>
            <TodoTable todos={todosData.todos} />
        </div>
    );
};

export default App;
