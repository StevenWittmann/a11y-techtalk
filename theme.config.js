const theme = {
	docsRepositoryBase: 'https://github.com/StevenWittmann/a11y-techtalk',
	project: {
		link: 'https://github.com/StevenWittmann/a11y-techtalk',
	},
	logo: () => (
		<>
			<img alt="" src="/universal-access-icon.png" height="25" width="25" style={{ marginRight: '1em' }} />
			<h1>A11y Tech Talk</h1>
		</>
	),
	head: function Head(props) {
		return (
			<>
				<meta charSet="utf-8" />
				<meta name="theme-color" content="#000" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="apple-touch-icon" sizes="180x180" href="/universal-access-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/universal-access-icon.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/universal-access-icon.png" />
				<link rel="mask-icon" href="/universal-access-icon.png" color="#000000" />
				<link rel="shortcut icon" href="/universal-access-icon.png" />
				<meta name="msapplication-TileColor" content="#000000" />
				<meta
					name="description"
					content="Website created for the team at dotSource to learn about Accessibility"
				/>
				<meta name="author" content="Steven Wittmann" />
				<meta property="og:url" content="https://a11y-techtalk.vercel.app/topics" />
				<meta property="og:type" content="website" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="692" />
				<meta property="og:title" content={`${props.title} | All about Accessibility`} />
				<meta
					property="og:description"
					content="Website created for the team at dotSource to learn about Accessibility"
				/>
			</>
		);
	},
	sidebar: {
		defaultMenuCollapseLevel: 1,
		autoCollapse: true,
	},
	darkMode: true,
	footer: {
		text: `${new Date().getFullYear()} © Steven Wittmann, dotSource SE`,
	},
	nextThemes: {
		defaultTheme: 'dark',
	},
	useNextSeoProps() {
		return {
			titleTemplate: '%s – All about Accessibility',
		};
	},
};
export default theme;
