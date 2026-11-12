import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('debería renderizar los enlaces de navegación', () => {
    const links = fixture.debugElement.queryAll(By.css('nav a'));

    expect(links.map((link) => link.nativeElement.textContent.trim())).toEqual([
      'Angular Client',
      'Órdenes',
      'Categorías',
      'Posts',
    ]);
    expect(links.slice(1).map((link) => link.attributes['href'])).toEqual([
      '/orders',
      '/categories',
      '/posts',
    ]);
  });

  it('debería contener un router-outlet en el template', () => {
    const routerOutlet = fixture.debugElement.query(By.css('router-outlet'));
    expect(routerOutlet).toBeTruthy();
  });

});
