import { Observable } from 'rxjs'; import { Post } from '../models/post.model';
export abstract class PostRepository { abstract getAll(count: number): Observable<Post[]>; }
