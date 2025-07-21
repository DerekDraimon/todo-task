import { TaskProvider } from "./infrastructure/context/TaskContext";
import { TaskHeaderContainer } from "./interfaces/components/TaskHeaderContainer";

const App = () => {
 

  return (
    <TaskProvider>
      <div>
        <TaskHeaderContainer />
      </div>
    </TaskProvider>
  );
};

export default App;
