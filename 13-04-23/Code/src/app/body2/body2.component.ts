import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body2',
  templateUrl: './body2.component.html',
  styleUrls: ['./body2.component.css']
})
export class Body2Component {
  @Input() t2:string=""
  @Input() t3:string[]=[]
}
