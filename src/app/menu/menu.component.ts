import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // isUserLoggedIn : boolean = false;

  constructor(public hardcodedAuthenticationService : HardcodedAuthenticationService) { }

  ngOnInit() {
    // Questo approccio è eficace solo se c'è un refresh della pagina, ma dato che 
    // sitamo usando le routeLink per navigare, i refresh completi non avvengono
    // cambiando pagine dal menù
    // iniettando hardcodedAuthenticationService in modo pubblico la classe, 
    // possiamo usare il metodo nella view, quindi il check sulla sessionStorage
    // avviene effettivamente anche se non c'è un refresh completo.

    // this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
