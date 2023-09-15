import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FooterComponent
      ],
    });
  });

  test('should exist', () => {
    let fixture = TestBed.createComponent(FooterComponent);
    let app = fixture.componentInstance;
    expect(app).toBeDefined();
  });


});
