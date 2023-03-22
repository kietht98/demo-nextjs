import Head from "next/head";

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos/");
  const posts = await res.json();

  const paths = posts.map((post: any) => ({
    params: { id: `${post.albumId}` },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: number } }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${params.id}`
  );
  const post = await res.json();

  return { props: { post } };
}

export default function Post(props: any) {
  const { post } = props;

  return (
    <>
      <Head>
        <title>{post?.title?.toUpperCase()}</title>
        <meta property='og:title' content={post?.title} />
        <meta
          property='og:url'
          content='https://demo-nextjs-sepia.vercel.app/'
        />
        <meta property='og:image' content={post?.thumbnailUrl} />
        <meta property='og:image:secure_url' content={post?.thumbnailUrl} />
        <meta property='og:image:type' content='image/jpeg' />
        <meta property='og:image:width' content='1280' />
        <meta property='og:image:height' content='700' />
        <meta
          property='og:image:alt'
          content='A shiny red apple with a bite taken out'
        />
        <meta property='og:type' content='website' />
        {/* Open Graph */}

        <meta property='og:site_name' content={post?.title} />
        <meta property='og:description' content={post?.title} />
        <meta property='og:title' content={post?.title} />
        <meta name='image' property='og:image' content={post?.thumbnailUrl} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container center'>
        <div className='card'>
          <h2>{post?.name}</h2>
          <hr />
          <p></p>
          <button>{post.name}</button>
        </div>
      </div>
    </>
  );
}
