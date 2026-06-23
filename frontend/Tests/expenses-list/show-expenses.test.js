import { describe, it, expect, vi } from 'vitest';

vi.mock('../../src/expenses-list/fetch-expenses', () => ({
    getExpensesData: vi.fn(),
}));

import { getExpenses, __only_for_test as internal } from '../../src/expenses-list/format-expenses';
import { getExpensesData } from '../../src/expenses-list/fetch-expenses';

describe('getExpenses', () => {
    it('is correct geformateerd', () => {
        expect(getExpenses()).toBe(70);
    });

    it('bij fout, wordt er een error doorgegeven', () => {
        expect(getExpenses()).toBe({ success: false, error });
    });
});
