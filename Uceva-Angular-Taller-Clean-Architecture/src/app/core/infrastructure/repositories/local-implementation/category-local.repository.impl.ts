import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { Category } from '../../../domain/models/category.model';
import { CategoryRepository } from '../../../domain/repositories/category.repository';
@Injectable() export class CategoryLocalRepositoryImpl extends CategoryRepository {
 private dataService = inject(DataService);
 getAll(count: number): Observable<Category[]> { return this.dataService.getAllCategoriesLocal(count); }
}
