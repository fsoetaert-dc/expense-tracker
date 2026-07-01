import { __only_for_test as internal } from "../../src/expenses-list/show-expenses.js"
import { beforeEach, vi, it, expect } from "vitest";

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
    internal.renderExpenses(el, expenses);
    const items = Array.from(el.querySelectorAll('li')).map(li => li.textContent);
    expect(items).toEqual([
        '"id": "1a2b3c"',
        '"description": "Lunch bij Broodje Mario"',
        '"amount": 8.50',
        '"date": "2025-06-12"',
        '"category": "Eten"',
        '"id": "4d5e6f"',
        '"description": "Treinticket Gent => Brussel"',
        '"amount": 9.20',
        '"date": "2025-06-11"',
        '"category": "Transport"'
    ]);
});


