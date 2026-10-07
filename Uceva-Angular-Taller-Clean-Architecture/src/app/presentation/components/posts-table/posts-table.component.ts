import { Component, Input } from '@angular/core'; import { Post } from '../../../core/domain/models/post.model';
@Component({selector:'app-posts-table', templateUrl:'./posts-table.component.html'}) export class PostsTableComponent { @Input() posts: Post[] = []; }
