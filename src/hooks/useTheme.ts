// 테마모드를 관리할 custom hooks
import { useEffect, useState } from 'react';

export const useDarkMode = (): [string, () => void] => {
	const localTheme = window.localStorage.getItem('theme');
	const initialState = localTheme || 'light';
	const [theme, setTheme] = useState(initialState);
	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
		window.localStorage.setItem('theme', theme);
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme');
		setTheme(localTheme || 'light');
	}, []);

	return [theme, toggleTheme];
};
