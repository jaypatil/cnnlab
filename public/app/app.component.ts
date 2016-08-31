import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES]
  
})
export class AppComponent {
  
  // constructor(private router: Router) {
  // }
  
  // isActive(instruction: any[]): boolean {
  //   return this.router.isRouteActive(this.router.generate(instruction));
  // }
  
}
