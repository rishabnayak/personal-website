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
      screen.getByText((_, element) => {
        if (!element || element.tagName.toLowerCase() !== "p") return false;
        return /hacking on ai tools\s+to make\s+marketing hits repeatable\./i.test(
          element.textContent ?? "",
        );
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /resume/i })).toHaveAttribute(
      "href",
      "/assets/files/RNayak_Resume.pdf",
    );
  });
});