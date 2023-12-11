import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLayoutComponent } from './content-layout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@shared/shared.module';
import { NavBarComponent } from '@layout/nav-bar/nav-bar.component';
import { FooterComponent } from '@layout/footer/footer.component';

describe('ContentLayoutComponent', () => {
  let component: ContentLayoutComponent;
  let fixture: ComponentFixture<ContentLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentLayoutComponent, NavBarComponent, FooterComponent],
      imports: [RouterTestingModule, SharedModule],
    });
    fixture = TestBed.createComponent(ContentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
