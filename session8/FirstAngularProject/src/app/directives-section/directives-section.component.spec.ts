import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesSectionComponent } from './directives-section.component';

describe('DirectivesSectionComponent', () => {
  let component: DirectivesSectionComponent;
  let fixture: ComponentFixture<DirectivesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
