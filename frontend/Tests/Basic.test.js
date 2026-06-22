import { describe, it, expect } from "vitest";

describe("app smoke test", () => {
    it("has a working test environment", () => {
        expect(document.createElement("div")).toBeInstanceOf(HTMLDivElement);
    });
});