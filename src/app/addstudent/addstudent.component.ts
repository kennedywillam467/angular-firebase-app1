import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
//import { Observable } from 'rxjs';
import { Router	 } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private db:AngularFirestore, private router: Router) { }

  ngOnInit() {

  }

  addStuddent(form){
  	const student: any = {
  		name: form.fullname,
  		age: form.age,
  		level: form.level,
  		contact: form.contact,
  	}

  	//this.db.collection('students').doc('2').set(student) //c'est nous meme qui devons changer sur set
  	this.db.collection('students').add(student)  //c'est automatique
  	.then( () =>{
  		console.log('successfully created');
  		this.router.navigate(['/students']);
  	})
  	.catch( (error) => console.log('Error: ', error));
  }

}
