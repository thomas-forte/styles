import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Navigate, Route, Routes } from "react-router";

import { Demo } from "@thomas-forte/styles";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <main className="mx-auto w-full max-w-6xl sm:px-4 pb-10 pt-6">
        <Routes>
          <Route
            path="/"
            element={
              <Demo
                breadcrumbs={[
                  {
                    name: "Styles",
                    current: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />
        </Routes>
      </main>
    </HashRouter>
  </StrictMode>,
);
