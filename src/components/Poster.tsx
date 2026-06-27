import { Post } from "@/data/mockData";

interface PosterProps {
  post: Post;
  viewMode: "grid" | "list";
  selectedDate?: Date | null;
}

function formatDate(date: Date): string {
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();
  return `${d}-${m < 10 ? "0" + m : m}-${y}`;
}

export default function Poster({ post, viewMode, selectedDate }: PosterProps) {
  const hasDate = !!selectedDate;
  const displayDate = selectedDate ? formatDate(selectedDate) : null;

  return (
    <article className={`post-card post-card--${viewMode}`}>
      <div className="post-card__image-wrapper">
        <img
          src={post.coverUrl}
          alt={post.title}
          className="post-card__img"
          width={viewMode === "grid" ? 203 : 82}
          height={viewMode === "grid" ? 203 : 82}
        />
      </div>

      <div className="post-card__content">
        {viewMode === "list" ? (
          <>
            <div className="post-card__col">
              <span className="post-card__title">{post.title}</span>
              <div className="post-card__stats">
                <div className="post-card__stat-item">
                  <img src="/like.svg" width={14} height={14} alt="" />
                  <span>{post.likes}</span>
                </div>
                <div className="post-card__stat-item">
                  <img src="/comment.svg" width={14} height={14} alt="" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </div>

            {hasDate && (
              <div className="post-card__col">
                <span className="post-card__date">{displayDate}</span>
                <div className="post-card__stats">
                  <div className="post-card__stat-item">
                    <img src="/like.svg" width={14} height={14} alt="" />
                    <span>67</span>
                  </div>
                  <div className="post-card__stat-item">
                    <img src="/comment.svg" width={14} height={14} alt="" />
                    <span>22</span>
                  </div>
                </div>
              </div>
            )}

            <div className="post-card__col">
              <span className="post-card__caption">{post.caption}</span>
              <span className="post-card__upload">{post.uploadDate}</span>
            </div>
          </>
        ) : (
          <>
            <div className="post-card__grid-row">
              <div className="post-card__col">
                <span className="post-card__title">{post.title}</span>
                <div className="post-card__stats">
                  <div className="post-card__stat-item">
                    <img src="/like.svg" width={14} height={14} alt="" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="post-card__stat-item">
                    <img src="/comment.svg" width={14} height={14} alt="" />
                    <span>{post.comments}</span>
                  </div>
                </div>
                <span className="post-card__caption">{post.caption}</span>
              </div>

              {hasDate && (
                <div className="post-card__col">
                  <span className="post-card__date">{displayDate}</span>
                  <div className="post-card__stats">
                    <div className="post-card__stat-item">
                      <img src="/like.svg" width={14} height={14} alt="" />
                      <span>67</span>
                    </div>
                    <div className="post-card__stat-item">
                      <img src="/comment.svg" width={14} height={14} alt="" />
                      <span>22</span>
                    </div>
                  </div>
                  <span className="post-card__upload">{post.uploadDate}</span>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </article>
  );
}
