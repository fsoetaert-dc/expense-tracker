import { describe, it, expect, vi } from 'vitest';

vi.mock('../../src/expenses-list/fetch-expenses', () => ({
    getExpensesData: vi.fn(),
}));

import { getExpenses, __only_for_test as internal } from '../../src/expenses-list/format-expenses';
import { getExpensesData } from '../../src/expenses-list/fetch-expenses';


    it('is correct geformateerd', async () => {
        const expenses = [    {
        "id": "1a2b3c",
        "description": "Lunch bij Broodje Mario",
        "amount": 8.50,
        "date": "2025-06-12",
        "category": "Eten"
    }]
        getExpensesData.mockResolvedValueOnce(
        []);
        const res = await getExpenses();
        expect(res).toEqual({ success: true, expenses });
    });

    // it('bij fout, wordt er een error doorgegeven', () => {
    //     expect(getExpenses()).toEqual({ success: false, error });
    // });

