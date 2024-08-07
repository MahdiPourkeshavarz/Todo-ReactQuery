import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/reactQuery.js";
import { TodoProvider } from "./context/todos.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TodoProvider>
        <App />
      </TodoProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
