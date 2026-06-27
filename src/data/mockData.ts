export const mockData = {
  username: "monblanproject",
  createdAt: "2016-02-17",
  postsCount: 870,
  followers: 11787,
  following: 112,
};

export interface Post {
  id: number;
  coverUrl: string;
  title: string;
  likes: number;
  comments: number;
  uploadDate: string;
  caption: string;
}

export const mockPosts: Post[] = [
  {
    id: 1,
    coverUrl: "https://picsum.photos/id/10/400/300",
    title: "Today",
    likes: 128,
    comments: 31,
    uploadDate: "11-04-2016",
    caption: "Image upload",
  },
  {
    id: 2,
    coverUrl: "https://picsum.photos/id/20/400/300",
    title: "Today",
    likes: 128,
    comments: 31,
    uploadDate: "11-04-2016",
    caption: "Image upload",
  },
  {
    id: 3,
    coverUrl: "https://picsum.photos/id/30/400/300",
    title: "Today",
    likes: 128,
    comments: 31,
    uploadDate: "11-04-2016",
    caption: "Image upload",
  },
  {
    id: 4,
    coverUrl: "https://picsum.photos/id/40/400/300",
    title: "Today",
    likes: 128,
    comments: 31,
    uploadDate: "11-04-2016",
    caption: "Image upload",
  },
  {
    id: 5,
    coverUrl: "https://picsum.photos/id/50/400/300",
    title: "Today",
    likes: 128,
    comments: 31,
    uploadDate: "11-04-2016",
    caption: "Image upload",
  },
  {
    id: 6,
    coverUrl: "https://picsum.photos/id/60/400/300",
    title: "Today",
    likes: 128,
    comments: 31,
    uploadDate: "11-04-2016",
    caption: "Image upload",
  },
  {
    id: 7,
    coverUrl: "https://picsum.photos/id/70/400/300",
    title: "Today",
    likes: 128,
    comments: 31,
    uploadDate: "11-04-2016",
    caption: "Image upload",
  },
  {
    id: 8,
    coverUrl: "https://picsum.photos/id/80/400/300",
    title: "Today",
    likes: 128,
    comments: 31,
    uploadDate: "11-04-2016",
    caption: "Image upload",
  },
  {
    id: 9,
    coverUrl: "https://picsum.photos/id/90/400/300",
    title: "Today",
    likes: 128,
    comments: 31,
    uploadDate: "11-04-2016",
    caption: "Image upload",
  },
  {
    id: 10,
    coverUrl: "https://picsum.photos/id/100/400/300",
    title: "Today",
    likes: 128,
    comments: 31,
    uploadDate: "11-04-2016",
    caption: "Image upload",
  },
];
