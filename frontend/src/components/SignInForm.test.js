import { cleanup } from "@testing-library/react";
import axiosMock from "axios";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(() => {
  axiosMock.get.mockClear();
  // render(<App />);
  cleanup;
});

jest.mock("axios");

test("Example test", () => {
  expect(true).toBeTruthy();
});

test("Example test", () => {
  expect(false).toBeFalsy();
});

// const mockCall = () => {
//   axiosMock.get.mockResolvedValueOnce({
//     data: [
//       {
//         firstName: "John"
//       },
//       {
//         firstName: "Thomas"
//       }
//     ]
//   });
// };

// describe("Test <User /> component", () => {
//   test("Show loader when it's fetching data from api", () => {
//     const url = "/users";
//     mockCall();

//     const { getByText, getAllByText } = render(<User url={url} />);
//     expect(getByText(/Loading..../)).toBeInTheDocument;
//   });

//   test("Successfully fetching data from axios mock api", async () => {
//     const url = "/users";
//     mockCall();

//     const { getByText, getAllByText } = render(<User url={url} />);

//     await waitForElement(() => getAllByText("Thomas"));
//     expect(axiosMock.get).toHaveBeenCalledTimes(1);
//     expect(axiosMock.get).toHaveBeenCalledWith(url);
//   });
// });
