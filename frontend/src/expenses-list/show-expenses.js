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
    let html = "<ul>";
    for (const expense of expenses) {
        html += `<li>"id": "${expense.id}"</li>`;
        html += `<li>"description": "${expense.description}"</li>`;
        html += `<li>"amount": ${expense.amount.toFixed(2)}</li>`;
        html += `<li>"date": "${expense.date}"</li>`;
        html += `<li>"category": "${expense.category}"</li>`;
    }
    html += "</ul>";
    element.innerHTML = html;
}

export const __only_for_test = { showLoading, showError, showEmptyState, renderExpenses };