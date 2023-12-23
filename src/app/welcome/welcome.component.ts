import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
// import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message : string = 'un messaggio'
  message1 = 'altro messaggio senza tipo'
  username = ''
  welcomeMessageFromService: string = ''

  //ActivatedRoute
  constructor(private route:ActivatedRoute,
              private service:WelcomeDataService) { }

  ngOnInit() : void {
    // console.log(this.message)
    
    // console.log(this.route.snapshot.params['name'])
    this.username = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    // console.log(this.service.executeHelloWorldBeanService());
    //asynchronous call, il console log last line viene loggato prima
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handlesuccessfulResponse(response),
      error => this.handleErrorResponse(error)
      );
    // console.log("last line of get welcome message")
  }

  handlesuccessfulResponse(response: any){
    // console.log(response);
    // console.log(response.message)
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: any){
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }



  getWelcomeMessageWhitPathVariable(){
    // console.log(this.service.executeHelloWorldBeanService());
    //asynchronous call, il console log last line viene loggato prima
    this.service.executeHelloWorldBeanServiceWhitPathvariable(this.username).subscribe(
      response => this.handlesuccessfulResponse(response),
      error => this.handleErrorResponse(error)
      );
    // console.log("last line of get welcome message")
  }

}
