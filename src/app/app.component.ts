import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  url1 : String //https://bootswatch.com/darkly/bootstrap.min.css
  url2 : String //https://bootswatch.com/flatly/bootstrap.min.css
  url : String


  changeTheme(){

  	this.url1 = 'https://bootswatch.com/darkly/bootstrap.min.css'
  	this.url2 = 'https://bootswatch.com/flatly/bootstrap.min.css'

  	if (this.url === this.url1)
  		this.url =  this.url1
  	else
  		this.url = this.url2
  }
}
