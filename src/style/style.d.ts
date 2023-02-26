import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		mode: {
			// 다크모드/라이트모드로 변경할 때 다른 색상이 들어가게 함, mode 안에서 key 값을 색상 이름이 아닌 mainBackground와 같이 쓰이는 부분의 의미로 작성하게 되면 색상값만 바꾸면 되기 때문에 편리
			mainBackground: string;
			primaryText: string;
			secondaryText: string;
			disable: string;
			border: string;
			divider: string;
			background: string;
			tableHeader: string;
			themeIcon: string;
			blue1: string;
			blue2: string;
			blue3: string;
			green: string;
			gray: string;
		};
		fontSizes: {
			xsm: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			xxl: string;
		};
		fontWeights: {
			extraBold: number;
			bold: number;
			semiBold: number;
			regular: number;
		};
	}
}
