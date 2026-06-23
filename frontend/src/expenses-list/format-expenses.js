import { getExpensesData } from "../../src/expenses-list/fetch-expenses"

function formatExpenses(expenses) {
    console.log(expenses);
    return expenses.map((expense) => ({
        ...expense,
        displayDate: new Date(expense.date).toLocaleDateString(),
    }));
}
export const __only_for_test = { formatExpenses };

export function getExpenses() {
    try {
        const res = getExpensesData();
        const resform = formatExpenses(res);
        return { success: true, expenses };
    }
    catch (error) { return { success: false, error }; }
}