import Image from "next/image"
import img from "@/public/1.jpg"

export default function PetsPage() {
	return (
		<div>
			{[1, 2, 3, 4, 5].map((num) => (
				<div key={num}>
					{/* <Image src={`/${num}.jpg`} alt="pet" width={280} height={280} /> */}
					<Image src={img} alt="pet" width={280} height={280} placeholder="blur" />
				</div>
			))}
		</div>
	)
}
