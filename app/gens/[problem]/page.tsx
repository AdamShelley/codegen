export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Gen: {params.slug}</div>
  }