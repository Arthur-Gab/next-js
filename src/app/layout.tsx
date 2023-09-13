import Head from './head';

export const metadata = {
	title: {
		default: 'NextApp',
		template: '%s | Arthur',
	},
	description: 'Created with next 13',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Head />
			<body>
				<h1>RootLayout</h1>
				{children}
			</body>
		</html>
	);
}
