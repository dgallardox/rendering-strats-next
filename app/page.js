import PostsGrid from "./components/postsGrid/PostsGrid.jsx"
import styles from "./page.module.css"

export default async function Home() {
  const { data } = await getPosts()

  return (
    <>
      <main id={styles.main}>
        <div>Daily Byte</div>
      </main>
      <PostsGrid posts={data.posts.nodes} />
    </>
  );
}

const getPosts = async () => {
  try {
    const response = await fetch("https://cms.dailybyte.org/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query GET_POSTS {
            posts(first: 1000) {
              nodes {
                id
                slug
                title
                date
                content
                excerpt
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        `,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
