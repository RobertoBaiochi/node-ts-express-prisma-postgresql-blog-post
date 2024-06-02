export interface CommentsModel {
    id: string;
    createdAt: Date;
    name: string;
    comment: string;
    postId: number | null;
}
