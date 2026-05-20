import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the landing page with the new tagline, bio, and links", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /rishab nayak/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/hacking on AI tools to make marketing hits repeatable./i),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /resume/i })).toHaveAttribute(
      "href",
      "/assets/files/RNayak_Resume.pdf",
    );
  });
});