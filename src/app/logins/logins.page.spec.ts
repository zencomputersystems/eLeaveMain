import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginsPage } from './logins.page';

describe('LoginsPage', () => {
  let component: LoginsPage;
  let fixture: ComponentFixture<LoginsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
