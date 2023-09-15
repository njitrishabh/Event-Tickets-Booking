import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
    });
  });

  test('should exist', () => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let app = fixture.componentInstance;
    expect(app).toBeDefined();
  });


});
