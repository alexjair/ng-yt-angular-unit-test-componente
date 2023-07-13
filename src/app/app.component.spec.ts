import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//TODO: "spec.ts <--"
//TODO: 😨 es la sintaxis de Jasmin!

describe(`(1) TEST del componente "AppComponent"`, () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule, //para uso de formularios reactivos
        FormsModule,
        HttpClientTestingModule//TODO: <-----
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

  });

  //TODO:Aislado!
  it('Debe de existir el AppComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance
    //toBeTruthy probar que exista
    expect(app).toBeTruthy(); //TODO: ✔
  });

  //TODO:Aislado!
  it('Debe retornar formulario invalido', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance
    fixture.detectChanges() //Aqui detectamos cambios desde el formulario

    const email = app.form.controls['email'] //hacer referencia input "email"
    email.setValue('leifer33@gmail.com')//simular la escritura de "leifer33@gmail.com"

    expect(app.form.invalid).toBeTrue(); //espero de from.invalis es true
  });

  it('Debe retornar formulario valido', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()

    let email = app.form.controls['email']
    let password = app.form.controls['password']
    let result = app.form.controls['result']

    email.setValue('leifer33@gmail.com')
    password.setValue('123456')
    result.setValue('1')


    expect(app.form.invalid).toBeFalse(); //TODO: ✔
  });

  //TODO:Aislado!
   xit(`Debe de actulizar datos de usuario`, () => {
     const fixture = TestBed.createComponent(AppComponent);
     const app = fixture.componentInstance;
     fixture.detectChanges()

     let email = app.form.controls['email']
     let password = app.form.controls['password']

     email.setValue('leifer33@gmail.com')
     password.setValue('123456')

     const btnElement = fixture.debugElement.query(By.css('button.btn'))// un "button" que tenga la clase btn
     //debugElement, llamadas x #ID, html nativo, o por clase ".clase_element"
     btnElement.nativeElement.click()
     const testData = { user: 1 }
     console.log(app.isCheck);

     expect(app.isCheck).toEqual(testData)
   });

});
