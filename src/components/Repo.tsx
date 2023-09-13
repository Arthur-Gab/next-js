export async function Repo() {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	const response = await fetch('https://api.github.com/users/Arthur-Gab/repos', {
		cache: 'no-store', // Chache based on the user
	});
	const repos = await response.json();

	return (
		<>
			<div>
				<h1>Repos</h1>
				<pre>{JSON.stringify(repos, null, 2)}</pre>
			</div>
		</>
	);
}
