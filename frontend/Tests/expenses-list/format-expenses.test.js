// formatExpenses.test.js
import { describe, it, expect } from "vitest";
import { __only_for_test } from "../../src/expenses-list/format-expenses";

describe("formatExpenses", () => {
    it("voegt displayDate toe aan elke expense", () => {
        const input = [
            { id: 1, amount: 10 },
            { id: 2, amount: 20 },
        ];

        const result = __only_for_test.formatExpenses(input);

        expect(result).toHaveLength(input.length);

        result.forEach((item, i) => {
            // behoudt bestaande properties
            expect(item.id).toBe(input[i].id);
            expect(item.amount).toBe(input[i].amount);

            // maakt displayDate correct
            const expected = new Date(input[i].date).toLocaleDateString();
            expect(item.displayDate).toBe(expected);
        });
    });

    it("werkt niet-mutating: geeft nieuwe array terug", () => {
        const input = [{ id: 1 }];

        const result = __only_for_test.formatExpenses(input);

        expect(result).not.toBe(input);
        expect(result[0]).not.toBe(input[0]); // door {...expense} nieuwe objecten
    });

    it(() => {
        expect(__only_for_test.formatExpenses([])).toEqual([]);
    });
});
