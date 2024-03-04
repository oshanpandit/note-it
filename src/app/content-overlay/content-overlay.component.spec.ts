import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentOverlayComponent } from './content-overlay.component';

describe('ContentOverlayComponent', () => {
  let component: ContentOverlayComponent;
  let fixture: ComponentFixture<ContentOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
