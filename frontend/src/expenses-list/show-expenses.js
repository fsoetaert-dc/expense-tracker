import { getExpenses } from "../../src/expenses-list/format-expenses"

function showLoading(element) {
    element.textContent = "Loading...";
}

function showError(element, error) {
    element.textContent = error;
    element.style.color = "red";
}

function showEmptyState(element) {
    element.textContent = "No expenses found."
}

function renderExpenses(element, expenses) {
    if (!expenses || expenses.length === 0) {
        element.textContent = "No expenses";
        return;
    }
    element.firstChild?.remove();
    let ul = document.createElement("ul");
    for (const expense of expenses) {
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');
        const li3 = document.createElement('li');
        const li4 = document.createElement('li');
        const li5 = document.createElement('li');
        li1.textContent = "id: " + expense.id;
        ul.appendChild(li1);
        li2.textContent = "description: " + expense.description;
        ul.appendChild(li2);
        li3.textContent = "amount: " + expense.amount;
        ul.appendChild(li3);
        li4.textContent = "date: " + expense.date;
        ul.appendChild(li4);
        li5.textContent = "category: " + expense.category;
        ul.appendChild(li5);
    }
    element.appendChild(ul);
    return element;
}

export async function showExpenses(element) {
    showLoading(element);
    let res = await getExpenses();
    if (res.success == true) {
        return renderExpenses(element, res.expenses)
    }
    else { showError(element, res.error) }
}

export const __only_for_test = { showLoading, showError, showEmptyState, renderExpenses };