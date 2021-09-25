import { tickets, EMPTY_QUEUE_MESSAGE } from './change-calculator';

test('calculate if has enough change to sell tickets to each person in the queue', () => {
	const calculateChange1 = tickets([25, 25, 50]);
	expect(calculateChange1).toBe('SI');

	const calculateChange2 = tickets([25, 100]);
	expect(calculateChange2).toBe('NO');

	const calculateChange3 = tickets([25, 25, 50, 50, 100]);
	expect(calculateChange3).toBe('NO');

	const calculateChange4 = tickets([]);
	expect(calculateChange4).toBe(EMPTY_QUEUE_MESSAGE);
});
