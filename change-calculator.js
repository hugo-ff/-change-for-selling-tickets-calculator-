import { validateArray } from './utils';

export const EMPTY_QUEUE_MESSAGE = 'There are no people in the queue.';

export const tickets = peopleInQueue => {
	if (!validateArray(peopleInQueue)) return EMPTY_QUEUE_MESSAGE;

	const moneyBills = {
		25: 0,
		50: 0,
		100: 0,
	};

	const moneyOperations = {
		25: () => (moneyBills[25] += 1),
		50: () => {
			moneyBills[25] -= 1;
			moneyBills[50] += 1;
		},
		100: () => {
			moneyBills[50] ? (moneyBills[50] -= 1) : (moneyBills[25] -= 2);
			moneyBills[25] -= 1;
		},
	};

	const checkIfHasChangeForEachPerson = peopleInQueue.every(mbill => {
		moneyOperations[mbill]();
		if (mbill === 25) return true;
		if (moneyBills[25] < 0 || moneyBills[50] < 0) return false;
		return true;
	});

	return checkIfHasChangeForEachPerson ? 'SI' : 'NO';
};
