import { Component, OnInit } from '@angular/core';
import { HelloService } from '../../shared/services/hello.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html'
})
export class ThirdComponent implements OnInit {
  public message: string;

  constructor(private helloService: HelloService) {
  }

  ngOnInit(): void {
    this.helloService.getMessage('third')
      .subscribe(data => {
        this.message = data;
      });
  }
}
