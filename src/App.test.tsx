import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the minimal landing page with the original content and links", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /rishab nayak/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/2x founder \| mlh top 50 \| gcp professional cloud architect/i),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /resume/i })).toHaveAttribute(
      "href",
      "/assets/files/RNayak_Resume.pdf",
    );
    expect(screen.getByRole("link", { name: /mount/i })).toHaveAttribute(
      "href",
      "https://rentmount.com",
    );
    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
  });
});
