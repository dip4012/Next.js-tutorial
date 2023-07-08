import { comments } from "@/data/comments"

export default function CommentDetail({ comment }) {
	return (
		<div>
			{comment.id} {comment.text}
		</div>
	)
}

export async function getStaticPaths() {
	return {
		paths: [
			{
				params: {
					commentId: "1",
				},
			},
		],
		fallback: false,
	}
}

export async function getStaticProps(context) {
	const { commentId } = context.params
	// Do ot call your own api routes from getStaticProps() or getServerSideProps()
	// const response = await fetch(`/api/comments/${commentId}`)
	// const data = await response.json()

	const data = comments.find((comment) => comment.id === parseInt(commentId))

	return {
		props: {
			comment: data,
		},
	}
}
