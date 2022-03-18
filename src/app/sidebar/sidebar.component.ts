import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private route:Router,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }
  logout(){
    this.route.navigate(['login']);
    this.snackbar.open("logout successfully done","ok",{duration:3000})
  }
}
