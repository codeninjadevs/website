export const generateRandomString = ({ prefix } = {}) => {
	return (prefix ?? "") + (Math.random() + 1).toString(36).substring(7);
};
