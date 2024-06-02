export interface CommentsModel {
    id: number;
    createdAt: Date;
    name: string;
    comment: string;
    postId: number | null;
}
