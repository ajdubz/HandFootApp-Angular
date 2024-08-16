import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPlayerComponent } from './get-player.component';

describe('GetPlayerComponent', () => {
  let component: GetPlayerComponent;
  let fixture: ComponentFixture<GetPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
