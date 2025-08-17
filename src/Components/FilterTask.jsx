import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/tasks/taskSlice";
const FilterTask = () => {
  const filter = useSelector((state) => state.task.filters);
  const dispatch = useDispatch();
  console.log(filter);

  return (
    <div className="filter">
      <button
        onClick={() => dispatch(setFilter("all"))}
        className={`button ${filter == "all" ? "active" : ""}`}
      >
        All
      </button>
      <button
        className={`button ${filter === "completed" ? "active" : ""}`}
        onClick={() => dispatch(setFilter("completed"))}
      >
        Completed
      </button>
    </div>
  );
};
export default FilterTask;
