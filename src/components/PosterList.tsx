"use client";

import { useState } from "react";
import { mockPosts } from "@/data/mockData";
import Poster from "./Poster";

interface PostListProps {
  selectedDate?: Date | null;
}

const POSTS_PER_PAGE = 8;

export default function PostList({ selectedDate }: PostListProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const visiblePosts = mockPosts.slice(0, visibleCount);
  const hasMore = visibleCount < mockPosts.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + POSTS_PER_PAGE);
  };

  return (
    <section className="posts-section">
      <div className="posts-section__controls">
        <button
          className={`controls-btn ${viewMode === "grid" ? "controls-btn--active" : ""}`}
          onClick={() => setViewMode("grid")}
        >
          <img src="/viewModel-col.svg" alt="Grid" width={22} height={22} />
        </button>
        <button
          className={`controls-btn ${viewMode === "list" ? "controls-btn--active" : ""}`}
          onClick={() => setViewMode("list")}
        >
          <img src="/viewModel-row.svg" alt="List" width={24} height={22} />
        </button>
      </div>

      <div className={`posts-container posts-container--${viewMode}`}>
        {visiblePosts.map((post) => (
          <Poster
            key={post.id}
            post={post}
            viewMode={viewMode}
            selectedDate={selectedDate}
          />
        ))}
      </div>

      {hasMore && (
        <button className="load-more" onClick={handleLoadMore}>
          LOAD MORE
        </button>
      )}
    </section>
  );
}
