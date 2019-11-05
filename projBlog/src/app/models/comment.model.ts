export class Comment{
    constructor( 
        public post_id: number,
        public title: string,
        public body: string,
        public email: string,
        public author: string
    ){ }
}