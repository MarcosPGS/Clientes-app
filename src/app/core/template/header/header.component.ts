import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Input() inputSideNav: MatSidenav;
  userDetails: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userDetails = this.authService.getUsuarioAutenticado();
  }

  sair(): void{
    this.authService.removendoToken();
    this.router.navigate(['/']);
  }
}
