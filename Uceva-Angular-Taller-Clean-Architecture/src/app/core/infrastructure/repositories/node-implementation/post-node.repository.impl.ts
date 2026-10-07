import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { Post } from '../../../domain/models/post.model';
import { PostRepository } from '../../../domain/repositories/post.repository';
@Injectable() export class PostNodeRepositoryImpl extends PostRepository {
 private dataService = inject(DataService);
 getAll(count: number): Observable<Post[]> { return this.dataService.getAllPostsNode(count); }
}
