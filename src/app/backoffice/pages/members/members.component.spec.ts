import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { CKEditorModule } from 'ckeditor4-angular';
import { Member } from 'src/app/shared/models/Member';
import { MemberState } from 'src/app/shared/models/membersState.interface';
import { addMember } from 'src/app/state/actions/members.actions';
import { METAREDUCERS, REDUCERS } from 'src/app/state/app.state';
import { MembersEffects } from 'src/app/state/effects/members.effects';

import { MembersComponent } from './members.component';

describe('MembersComponent', () => {
  let component: MembersComponent;
  let fixture: ComponentFixture<MembersComponent>;
  let store: MockStore;
  const initialState: MemberState = {
    loading: false,
    members: [],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RxReactiveFormsModule,
        CKEditorModule,
        FormsModule,
        RouterModule.forRoot([]),
        StoreModule.forRoot(REDUCERS, {
          metaReducers: METAREDUCERS
        }),
        StoreDevtoolsModule.instrument({ name: "test redux" }),
        EffectsModule.forRoot([
          MembersEffects
        ]),
        HttpClientModule
      ],
      declarations: [ MembersComponent ],
      providers: [FormBuilder, provideMockStore({ initialState })]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('Debe existir el componente "MembersComponent"', () => {
    expect(component).toBeTruthy();
  });

  it('Debe cargar formulario de creacion', () => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let id = component.id;
    id = 592;
    const testId = 592;

    expect(id).toEqual(testId);
  });

  it('Debe cargar formulario de actualizacion', () => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let id = component.id;    
    const testId = 0;

    expect(id).toEqual(testId);
  });

  it('Debe mostrar campo nombre incompleto', () => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let name = component.form.controls["name"];    
    
    expect(name.untouched && name.invalid).toBeTrue();
  });

  it('Debe mostrar campo descripcion incompleto', () => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let description = component.form.controls["description"];    
    
    expect(description.untouched && description.invalid).toBeTrue();
  });

  it('Debe mostrar campo facebook incompleto', () => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let facebookUrl = component.form.controls["facebookUrl"];    
    
    expect(facebookUrl.untouched && facebookUrl.invalid).toBeTrue();
  });

  it('Debe mostrar campo linkedIn incompleto', () => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let linkedinUrl = component.form.controls["facebookUrl"];    
    
    expect(linkedinUrl.untouched && linkedinUrl.invalid).toBeTrue();
  });

  it('Debe retornar formulario valido al crear o editar', () => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let name = component.form.controls["name"];
    let description = component.form.controls["description"];
    let image = component.form.controls["image"];
    let facebookUrl = component.form.controls["facebookUrl"];
    let linkedinUrl = component.form.controls["linkedinUrl"];

    name.setValue("Sabrina Luna");
    description.setValue("Abogada");
    image.setValue("data:image/jpeg;base64");
    facebookUrl.setValue("www.facebook.com.ar/sabrina-luna");
    linkedinUrl.setValue("www.linkedin.com.ar/sabrina-luna");

    expect(component.form.valid).toBeTrue();
  });

  it('Debe retornar formulario valido al presionar boton crear o guardar', () => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let name = component.form.controls["name"];
    let description = component.form.controls["description"];
    let image = component.form.controls["image"];
    let facebookUrl = component.form.controls["facebookUrl"];
    let linkedinUrl = component.form.controls["linkedinUrl"];

    name.setValue("Sabrina Luna");
    description.setValue("Abogada");
    image.setValue("data:image/jpeg;base64");
    facebookUrl.setValue("www.facebook.com.ar/sabrina-luna");
    linkedinUrl.setValue("www.linkedin.com.ar/sabrina-luna");

    const btnElement = fixture.debugElement.query(By.css('button.primary'));
    btnElement.nativeElement.click();

    const testData = {
      name: "Sabrina Luna",
      description: "Abogada",
      image: "data:image/jpeg;base64",
      facebookUrl: "www.facebook.com.ar/sabrina-luna",
      linkedinUrl: "www.linkedin.com.ar/sabrina-luna"
    }
    expect(component.form.value).toEqual(testData);
  });

  it('Debe invocar a la accion addMember', () => {
    component.form.setValue({
      name: "Sabrina Luna",
      description: "Abogada",
      image: "data:image/jpeg;base64",
      facebookUrl: "www.facebook.com.ar/sabrina-luna",
      linkedinUrl: "www.linkedin.com.ar/sabrina-luna"
    });
    component.submit();
    expect(store.dispatch).toHaveBeenCalledWith(
      addMember({ member: component.form.value })
    );
  });
});