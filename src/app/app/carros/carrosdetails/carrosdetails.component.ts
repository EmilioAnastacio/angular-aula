import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {

  route = inject(ActivatedRoute);

  constructor(){
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }
  

}
