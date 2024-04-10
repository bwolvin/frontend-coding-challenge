import { render } from "@testing-library/react";

import Home from "./Home";

describe("/Components/Home", () => {
  it("works", async () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId("home")).toBeDefined();
  });
});
