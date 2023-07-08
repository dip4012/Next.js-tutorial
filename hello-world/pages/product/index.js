import Link from "next/link"
import { useRouter } from "next/router"

export default function ProductList() {
	return (
		<>
			<Link href="/product/1">Product 1</Link>
			<Link href="/product/2">Product 2</Link>
			<Link href="/product/3" replace>
				Product 3
			</Link>
			<Link href="/">Home</Link>
		</>
	)
}
