import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomAddComponent } from './room-add.component';


describe('RoomAddComponent', () => {
  let component: RoomAddComponent;
  let fixture: ComponentFixture<RoomAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomAddComponent ], 
      imports: [FormsModule ]
    })
    .compileComponents();
  });


 

});

describe('SignupFormComponent', () => {
  let component: RoomAddComponent;
  let fixture: ComponentFixture<RoomAddComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [RoomAddComponent],
          imports: [
              ReactiveFormsModule,
              FormsModule
          ]
      })
          .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(RoomAddComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      fixture.detectChanges();
  });


  it('entire form validity', () => {
    let name = component.forma.controls['name'];
    let zvezdica = component.forma.controls['zvezdica'];
    let city= component.forma.controls['city'];
    let brojSobe= component.forma.controls['brojSobe'];
    let ulica = component.forma.controls['ulica'];
    let cenaPoNoci= component.forma.controls['cenaPoNoci'];
    expect(name.valid).toBeFalsy();

    name.setValue("");
    zvezdica.setValue("");
   ulica.setValue("");
    brojSobe.setValue("");
    cenaPoNoci.setValue("");
 city.setValue("");
    expect(component.forma.valid).toBeFalsy();
;
});

  it('form invalid when empty', () => {
      expect(component.forma.valid).toBeFalsy();
  });

  it('name field validity', () => {
      let name = component.forma.controls['name'];
      expect(name.valid).toBeFalsy();

      name.setValue("");
      expect(name.hasError('required')).toBeTruthy();

      name.setValue("ss");
      expect(name.hasError('minlength', ['minlength'])).toEqual(false);
  });
  it('name field validity', () => {
    let name = component.forma.controls['name'];
    expect(name.valid).toBeFalsy();

    name.setValue("");
    expect(name.hasError('required')).toBeTruthy();

    name.setValue("ss");
    expect(name.hasError('minlength', ['minlength'])).toEqual(false);
});

it('zvezdica field validity', () => {
  let testField= component.forma.controls['zvezdica'];
  expect(testField.valid).toBeFalsy();

  testField.setValue("");
  expect(testField.hasError('required')).toBeTruthy();

  testField.setValue(6);
  expect(testField.hasError('max', ['max'])).toEqual(false);
  testField.setValue(0);
  expect(testField.hasError('min', ['min'])).toEqual(false);
});

it('brojSobe field validity', () => {
  let testField= component.forma.controls['brojSobe'];
  expect(testField.valid).toBeFalsy();

  testField.setValue("");
  expect(testField.hasError('required')).toBeTruthy();

  testField.setValue(100000);
  expect(testField.hasError('max', ['max'])).toEqual(false);
  testField.setValue(-1);
  expect(testField.hasError('min', ['min'])).toEqual(false);
});

it('city field validity', () => {
  let testField= component.forma.controls['city'];
  expect(testField.valid).toBeFalsy();

  testField.setValue("");
  expect(testField.hasError('required')).toBeTruthy();

  
});
it('ulica field validity', () => {
  let testField= component.forma.controls['ulica'];
  expect(testField.valid).toBeFalsy();

  testField.setValue("");
  expect(testField.hasError('required')).toBeTruthy();

  
});

it('cenaPoNoci field validity', () => {
  let testField= component.forma.controls['cenaPoNoci'];
  expect(testField.valid).toBeFalsy();

  testField.setValue("");
  expect(testField.hasError('required')).toBeTruthy();
  testField.setValue(0);
  expect(testField.hasError('min', ['min'])).toEqual(false);
  
});




});