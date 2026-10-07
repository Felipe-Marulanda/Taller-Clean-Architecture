import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../../domain/models/category.model';
import { CategoryRepository } from '../../../domain/repositories/category.repository';
@Injectable() export class GetAllCategoriesUseCase { private repository = inject(CategoryRepository); execute(count: number): Observable<Category[]> { return this.repository.getAll(count); } }
