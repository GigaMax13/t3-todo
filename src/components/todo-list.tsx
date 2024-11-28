"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

export function TodoList() {
  const [title, setTitle] = useState("");
  const utils = api.useUtils();
  const todos = api.todo.getAll.useQuery();

  const createTodo = api.todo.create.useMutation({
    onSuccess: async () => {
      await utils.todo.invalidate();
      setTitle("");
    },
  });

  const toggleTodo = api.todo.toggle.useMutation({
    onSuccess: async () => {
      await utils.todo.invalidate();
    },
  });

  const deleteTodo = api.todo.delete.useMutation({
    onSuccess: async () => {
      await utils.todo.invalidate();
    },
  });

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createTodo.mutate({ title });
        }}
        className="flex gap-2"
      >
        <input
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg px-4 py-2 text-black"
        />
        <button
          type="submit"
          className="rounded-lg bg-white/10 px-4 py-2 font-semibold transition hover:bg-white/20"
          disabled={createTodo.isPending}
        >
          Add
        </button>
      </form>

      <ul className="mt-4 flex flex-col gap-2">
        {todos.data?.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) =>
                toggleTodo.mutate({ id: todo.id, completed: e.target.checked })
              }
              className="h-4 w-4"
            />
            <span
              className={`flex-grow ${
                todo.completed ? "text-gray-500 line-through" : ""
              }`}
            >
              {todo.title}
            </span>
            <button
              onClick={() => deleteTodo.mutate({ id: todo.id })}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
