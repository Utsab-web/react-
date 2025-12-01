import {useState} from 'react'
 function Todo() {
const [TodoList, setTodoList] = useState([])

const [newTodo, setNewTodo] = useState("")

const handleAddTodo = (newTodo) => {
  setTodoList([...TodoList, newTodo])
}

const handleDeleteTodo = (index) => {
  const updatedTodoList = TodoList.filter((v, i) => i !== index)
  setTodoList(updatedTodoList)
}
const hanldeMarkDone = (index) => {
  const updatedTodoList = TodoList.map((v, i) => {
    if (i === index) {
      return v + " (done)"
    }
    return v
  })
  setTodoList(updatedTodoList)
}
  return (
    <>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Todo List</h1>

          <div className="flex gap-3 mb-5">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="button"
              onClick={() => {
                if (newTodo.trim() === "") return
                handleAddTodo(newTodo.trim())
                setNewTodo("")
              }}
              disabled={newTodo.trim() === ""}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add
            </button>
          </div>

          <ul className="space-y-3">
            {TodoList.length === 0 ? (
              <li className="text-sm text-gray-500">No todos yet — add one above.</li>
            ) : (
              TodoList.map((todo, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                >
                  <span className={`${todo.includes("(done)") ? "line-through text-gray-400" : "text-gray-800"}`}>{todo}</span>
                  <button
                    type="button"
                    onClick={() => handleDeleteTodo(index)}
                    className="text-sm text-red-600 hover:text-red-800 px-2 py-1 rounded hover:bg-red-50"
                  >
                    Delete
                  </button>
                   <button
                    type="button"
                    onClick={() => hanldeMarkDone(index)}
                    className="text-sm text-red-600 hover:text-red-800 px-2 py-1 rounded hover:bg-red-50"
                  >
                    Mark Done
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  )
}
export{Todo}