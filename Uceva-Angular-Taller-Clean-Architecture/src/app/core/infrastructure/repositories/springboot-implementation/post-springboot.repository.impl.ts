import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { Post } from '../../../domain/models/post.model';
import { PostRepository } from '../../../domain/repositories/post.repository';
@Injectable() export class PostSpringBootRepositoryImpl extends PostRepository {
 private dataService = inject(DataService);
 getAll(count: number): Observable<Post[]> { return this.dataService.getAllPostsSpringBoot(count); }
}
