// apiClient.test.js
import { getExpensesData } from "../../src/expenses-list/fetch-expenses";
import { vi, it, expect } from "vitest";

global.fetch = vi.fn();

it("haalt expenses op", async () => {
    fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => [{ id: 1, name: "Chell" }],
    });

    const result = await getExpensesData();
    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/expenses");
    expect(result).toEqual([{ id: 1, name: "Chell" }]);
});