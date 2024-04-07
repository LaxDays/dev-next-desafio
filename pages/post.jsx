import Image from "next/image";
import Link from "next/link";

export default function Post() {
  return (
    <div className="flexContainerCenter">
      <div className="postContainer">
        <div className="postTopBarContainer">
          <div className="postLogoAndCreatePostP">
            <Link href="/">
              <Image
                className="logoDEVPost"
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt="Logo DEV"
                width={50}
                height={40}
              />
            </Link>
            <p className="createPostTitlePost">Create Post</p>
          </div>
          <div className="topPost">
            <button className="btnEditPost">Edit</button>
            <button className="btnPreviewPost">Preview</button>
            <button className="btnCancelPost">X</button>
          </div>
        </div>
        <form>
          <div className="postTitleContainer">
            <button className="btnAddCoverImage">Add a cover image</button>
            <input
              className="inputNewPostTitle"
              type="text"
              placeholder="New post title here..."
            ></input>
            <input
              className="inputAddTags"
              type="text"
              placeholder="Add up to 4 tags..."
            ></input>
          </div>
          <div className="containerOptionsPost">
            <div className="postEditOptions">
              <button className="btnBlackB">B</button>
              <button className="btnCursI">I</button>
              <button>O</button>
              <button>&#8694;</button>
              <button>&#8694;</button>
              <button className="btnOptionHideSmall">H</button>
              <button className="btnOptionHideSmall">"</button>
              <button className="btnOptionHideSmall">&lt;&gt;</button>
              <button className="optionMoreThanBorder">&lt;&gt;</button>
              <button className="btnOptionHideSmall">⚡</button>
              <button>🖼️</button>
            </div>
            <div>
              <p className="threePointsPost">⁝</p>
            </div>
          </div>
          <div className="textAreaPostContainer">
            <textarea
              className="textAreaPost"
              rows="22"
              placeholder="Write your post content here..."
            ></textarea>
          </div>
          <div className="btnsBottomPost">
            <button className="btnInputBluePostBotton" type="input">
              Publish
            </button>
            <button className="btnGrayPostBotton btnBigDisplayPostBottom">
              Save
            </button>
            <button className="btnGrayPostBotton btnSmallDisplayPostBottom">
              Save draft
            </button>
            <button className="btnGrayPostBotton postBottonOptions">Θ</button>
            <button className="btnGrayPostBotton btnBigDisplayPostBottom">
              Revert
            </button>
            <button className="btnGrayPostBotton btnSmallDisplayPostBottom">
              Revert new changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
