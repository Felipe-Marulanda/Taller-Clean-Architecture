import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../../domain/models/post.model';
import { PostRepository } from '../../../domain/repositories/post.repository';
@Injectable() export class GetAllPostsUseCase { private repository = inject(PostRepository); execute(count: number): Observable<Post[]> { return this.repository.getAll(count); } }
