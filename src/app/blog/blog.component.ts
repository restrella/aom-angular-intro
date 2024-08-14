import { UserService } from './../user/services/user.service';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('div') div: any;

  name = 'data from server request';
  myData = 'this is my data';
  sum = 0;

  getName() {
    return this.myData;
  }

  displaySum(x: number, y: number) {
    this.sum = x + y;
  }

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.log('init');
  }

  ngAfterViewInit(): void {
    console.log(this.div);
    console.log(this.userService.getDataFromServer());
  }

  ngOnDestroy(): void {
    console.log('on destroy');
  }
}
