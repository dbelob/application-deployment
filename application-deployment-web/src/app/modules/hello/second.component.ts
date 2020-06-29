import { Component, OnInit } from '@angular/core';
import { HelloService } from '../../shared/services/hello.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html'
})
export class SecondComponent implements OnInit {
  public message: string;

  constructor(private helloService: HelloService) {
  }

  ngOnInit(): void {
    this.helloService.getMessage('second')
      .subscribe(data => {
        this.message = data;
      });
  }
}
