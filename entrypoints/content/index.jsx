import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import ContentApp from "./App";

export default defineContentScript({
  matches: ["<all_urls>"],
  main() {
    createRoot(document.querySelector("body")).render(
      <StrictMode>
        <ContentApp />
      </StrictMode>
    );
  },
});
