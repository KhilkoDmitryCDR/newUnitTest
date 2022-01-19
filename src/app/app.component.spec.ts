import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component:AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    component= new AppComponent()
  });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'UnitTest'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('UnitTest');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('UnitTest app is running!');
  // });

  it ('la variable title debe tener el nombre del proyecto', ()=>{
    let myVar:string=component.title;
    expect(myVar).toEqual('UnitTest');

  })
  it ('la variable active siempre debe estar en true', ()=>{
    let myVar:boolean =component.active;
    expect(myVar).toBeTruthy();
  })
  it('el metodo sum() retorna la suma', ()=>{
    let a:number=5;
    let b:number=10;
    let result:number=a+b;

    expect (component.sum(a,b)).toBe(result);

  })

  it('debe existir un metodo llamado sum()' ,()=>{
    let metodoLlamado=spyOn(component,'sum')

    component.sum(3,3);

    expect(metodoLlamado).toHaveBeenCalled();

  })
});
