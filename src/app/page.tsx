import { Repo } from '@/components/Repo';
import { Suspense } from 'react';
import Link from 'next/link';
import { User } from '@/components/User';

export default function Home() {
	return (
		<>
			<h1>Home</h1>

			<Link href="products/algum-produto">Produto X</Link>
			<Link href="/signin">Login</Link>

			<User />

			<Suspense fallback={<p>Carregando repositórios...</p>}>
				<Repo />
			</Suspense>
		</>
	);
}
