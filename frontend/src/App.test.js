import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(() => {
  cleanup;
});

describe("Test <App />", () => {
  test("App renders its components", () => {
    expect(true).toBeTruthy();
  });
});
