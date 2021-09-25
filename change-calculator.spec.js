import tickets from './change-calculator';

test('calculate if has enough change to sell tickets to each person in the queue', () => {
	const calculateChange1 = tickets([25, 25, 50]);
	const calculateChange2 = tickets([25, 100]);
	const calculateChange3 = tickets([25, 25, 50, 50, 100]);

	expect(calculateChange1).toEqual('SI');
	expect(calculateChange2).toEqual('NO');
	expect(calculateChange3).toEqual('NO');
});
