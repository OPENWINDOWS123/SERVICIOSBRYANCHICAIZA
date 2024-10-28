import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTsComponent } from './module.ts.component';

describe('ModuleTsComponent', () => {
  let component: ModuleTsComponent;
  let fixture: ComponentFixture<ModuleTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleTsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
