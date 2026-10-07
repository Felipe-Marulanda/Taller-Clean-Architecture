import { Component, inject } from '@angular/core';
import { GetAllPostsUseCase } from '../../../core/application/usecases/posts/get-all-posts.usecase';
import { Post } from '../../../core/domain/models/post.model';
import { AlertComponent } from '../../components/alert/alert.component';
import { PostsTableComponent } from '../../components/posts-table/posts-table.component';
import { State } from '../../interfaces/state.interface';
@Component({selector:'app-posts', templateUrl:'./posts.page.html', imports:[PostsTableComponent, AlertComponent], providers:[GetAllPostsUseCase]})
export class PostsPage { posts: Post[] = []; state: State = 'init'; private useCase = inject(GetAllPostsUseCase); ngOnInit(): void { this.state='loading'; this.useCase.execute(10).subscribe({next: value => { this.posts=value; this.state='success'; }, error: () => this.state='error'}); } }
