import { describe, it, expect, vi } from 'vitest';

vi.mock('../../src/expenses-list/format-expenses', () => ({
    getExpenses: vi.fn(),
}));

import { getExpenses, __only_for_test as internal } from '../../src/expenses-list/format-expenses.js';
import { getExpensesData } from '../../src/expenses-list/fetch-expenses.js';
import { __only_for_test as internal } from "../../src/expenses-list/show-expenses.js"
import { beforeEach, vi, it, expect } from "vitest";
import { showExpenses } from "../../src/expenses-list/show-expenses.js";

function createTestElement() {
    const el = document.createElement('div');
    document.body.appendChild(el);
    return el;
}

let el;
const expenses = [
    {
        "id": "1a2b3c",
        "description": "Lunch bij Broodje Mario",
        "amount": 8.50,
        "date": "2025-06-12",
        "category": "Eten"
    },
    {
        "id": "4d5e6f",
        "description": "Treinticket Gent => Brussel",
        "amount": 9.20,
        "date": "2025-06-11",
        "category": "Transport"
    }
]



beforeEach(() => {
    el = createTestElement();
});

it("toont 'Loading...", () => {
    internal.showLoading(el);
    expect(el.textContent).toBe("Loading...");
});

it("toont een error", () => {
    internal.showError(el, "No expenses found");
    expect(el.textContent).toBe("No expenses found");
});

it("toont de message 'No expenses found.'", () => {
    internal.showEmptyState(el);
    expect(el.textContent).toBe("No expenses found.");
});

it("toont een ul with li's", () => {
    const res = internal.renderExpenses(el, expenses);

    expect(res.innerHTML).toBe(`<ul><li>id: 1a2b3c</li><li>description: Lunch bij Broodje Mario</li><li>amount: 8.5</li><li>date: 2025-06-12</li><li>category: Eten</li><li>id: 4d5e6f</li><li>description: Treinticket Gent =&gt; Brussel</li><li>amount: 9.2</li><li>date: 2025-06-11</li><li>category: Transport</li></ul>`

    );
});


it("toont loading, daarna expenses in ul met li", async () => {
    getExpenses.mockResolvedValueOnce({ success: true, expenses }
    );
    let res = await showExpenses(el)
    expect(el.innerHTML).toEqual(`<ul><li>id: 1a2b3c</li><li>description: Lunch bij Broodje Mario</li><li>amount: 8.5</li><li>date: 2025-06-12</li><li>category: Eten</li><li>id: 4d5e6f</li><li>description: Treinticket Gent =&gt; Brussel</li><li>amount: 9.2</li><li>date: 2025-06-11</li><li>category: Transport</li></ul>`
    );
});

it("toont loading, daarna error", async () => {
    getExpenses.mockResolvedValueOnce(
        { success: false, error: new Error("Failed to fetch expenses") });

    let res = await showExpenses(el)

    expect(el.textContent).toBe("Error: Failed to fetch expenses");
});