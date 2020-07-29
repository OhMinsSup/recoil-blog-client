export interface PostData {
  _id: any;
  title: string;
  body: string;
  tags: string[];
  publishedDate: Date;
  user: {
    _id: any;
    username: string;
  };
}
