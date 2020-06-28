import { Component, OnInit } from '@angular/core';
import { HelloService } from '../../shared/services/hello.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})
export class FirstComponent implements OnInit {
  public message: string;

  constructor(private helloService: HelloService) {
  }

  ngOnInit(): void {
    this.helloService.getMessage('first')
      .subscribe(data => {
        this.message = data;
      });
  }
}
