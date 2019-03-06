import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {


	students: any[] = [];


  constructor(private db:AngularFirestore) { }

  ngOnInit() {
  	this.getAllStudents();
  }

  getAllStudents(){
  	this.db.collection('students').ref.get()
  	.then((data)=>{
  		data.forEach((student)=> this.students.push(student.data()
  			))
  	})
  	.catch ( (error) => console.log('Error: ', error) );
  }

}
