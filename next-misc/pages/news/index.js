export default function News({ data }) {
	return <h1 className="content">{data}</h1>
}

export async function getStaticProps(context) {
	return {
		props: {
			data: context.preview
				? `List of draft article by ${context.previewData.user}`
				: "List of published article",
		},
	}
}
