import { Component, OnInit } from '@angular/core';
import  { items as data } from './home-data.model'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items:data[]=[
    {
      id:'1',
      Name_of_Inventry: 'Electronics',
      Total_Category: '5',
      Discription:"sdfsaffsdsdgdfgdgdgdfgdfgdgdg",
      Reports:'sfadfsdafsdffsdfsdsdf'
    },
    {
      id:'2',
      Name_of_Inventry: 'Grosery',
      Total_Category: '4',
      Discription:"sdfsaffsdsdgdfgdgdgdfgdfgdgdg",
      Reports:'sfadfsdafsdffsdfsdsdf'
    },
    {
      id:'3',
      Name_of_Inventry: 'Networking',
      Total_Category: '7',
      Discription:"sdfsaffsdsdgdfgdgdgdfgdfgdgdg",
      Reports:'sfadfsdafsdffsdfsdsdf'
    },
    {
      id:'4',
      Name_of_Inventry: 'Computers',
      Total_Category: '1',
      Discription:"sdfsaffsdsdgdfgdgdgdfgdfgdgdg",
      Reports:'sfadfsdafsdffsdfsdsdf'
    },
    {
      id:'5',
      Name_of_Inventry: 'Costmatic',
      Total_Category: '4',
      Discription:"sdfsaffsdsdgdfgdgdgdfgdfgdgdg",
      Reports:'sfadfsdafsdffsdfsdsdf'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}


