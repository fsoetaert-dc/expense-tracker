// apiClient.js
export async function getExpensesData() {
    const response = await fetch("http://localhost:3000/expenses");
    if (!response.ok) throw new Error("Failed to fetch expenses");
    return await response.json();
}