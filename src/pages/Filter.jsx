import Menu from "../components/Menu";

import { useContext } from "react";
import TodoContext from "../Context/TodoContext";
import TodoItem from "../components/TodoItem";
import { motion, AnimatePresence } from "framer-motion";

function Filter() {
  const { isLoading, label, labelTodo, labelFilter } = useContext(TodoContext);
  let unique = [...new Set(label)];

  if (!isLoading && labelTodo.length === 0) {
    return (
      <div className="filter">
        <Menu />
        <h2>No Option has been selected! </h2>

        <div className="select">
          <select
            name="todos"
            className="filter-list label-fil"
            onChange={() => labelFilter()}
          >
            <option key="none" value="none" disabled hidden>
              Select an Option
            </option>
            {unique.map((item) => (
              <option key={item.id} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            name="todos"
            className="filter-list current-fil"
            onChange={() => labelFilter()}
          >
            <option key="active" value="active">
              Unfinished
            </option>
            <option key="non-active" value="non-active">
              Finished
            </option>
          </select>
        </div>
      </div>
    );
  }

  return (
    !isLoading && (
      <div className="filter">
        <Menu />

        <div className="select">
          <select
            name="todos"
            className="filter-list label-fil"
            onChange={() => labelFilter()}
          >
            <option key="selectop" value="none" disabled hidden>
              Select an Option
            </option>
            {unique.map((item) => (
              <option key={item.id} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            name="todos"
            className="filter-list current-fil"
            onChange={() => labelFilter()}
          >
            <option key="active" value="active">
              Unfinished
            </option>
            <option key="non-active" value="non-active">
              Finished
            </option>
          </select>
        </div>
        <div className="todo-list">
          <AnimatePresence>
            {labelTodo.map(
              (item) =>
                typeof item === "object" && (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <TodoItem key={item.id} item={item} />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    )
  );
}

export default Filter;
