import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountTableComponent } from './count-table.component';

describe('CountTableComponent', () => {
  let component: CountTableComponent;
  let fixture: ComponentFixture<CountTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountTableComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CountTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
