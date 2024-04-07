export default function UserPost(props) {
  return (
    <main>
      <section>
        {props?.posts?.map((userPost, index) => {
          return (
            <article key={`userPost-${userPost.title}`}>
              <div className="postUserContainerCenter">
                <div className="postTopSectionCenter">
                  <div className="postUserPhotoCenter">👨🏿‍🦳</div>
                  <div className="postDataInfoCenter">
                    <p className="postUserNameCenter">Alexis Fuentes</p>
                    <p className="postDateCenter">Apr 6</p>
                  </div>
                </div>
                <div className="postTitleCenter">
                  <p>{userPost.title}</p>
                </div>
                <div className="postTagsContainerCenter">
                  <div className="postTagsCenter">#begginers</div>
                  <div className="postTagsCenter">#JavaScript</div>
                </div>
                <div className="postBottomSection">
                  <div className="postBottomSectionLeft">
                    <div className="postReactionsCenter">
                      🔥⭐🎉😔 41{" "}
                      <span className="postBottomTextReactionComments">
                        reactions
                      </span>
                    </div>
                    <div className="postCommentsCenter">
                      💬 1{" "}
                      <span className="postBottomTextReactionComments">
                        Add Comment
                      </span>
                    </div>
                  </div>
                  <div className="postBottomSectionRight">
                    <div className="postReadingTime">16 min read</div>
                    <div className="postSaveOption">🔳</div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export async function getServerSideProps(ctx) {
  const response = await fetch("http://localhost:3001/post");
  const info = await response.json();

  return {
    props: {
      posts: info.data,
    },
  };
}
