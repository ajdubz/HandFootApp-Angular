import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPlayersComponent } from '../get-all-players/get-all-players.component';

describe('GetAllPlayersComponent', () => {
  let component: GetAllPlayersComponent;
  let fixture: ComponentFixture<GetAllPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllPlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
