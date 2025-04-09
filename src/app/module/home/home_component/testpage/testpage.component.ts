import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.scss'],
  standalone: false,
})
export class TestpageComponent   {

  constructor() { }

  mathTests = [
    { title: 'Algebra Basics', level: 'Beginner', description: 'Test your skills on equations and expressions.' },
    { title: 'Geometry Essentials', level: 'Intermediate', description: 'Angles, shapes, and formulas.' },
    { title: 'Trigonometry Test', level: 'Advanced', description: 'Sin, Cos, and everything in between.' },
    { title: 'Math Speed Quiz', level: 'All Levels', description: 'Quick math problems under time pressure.' },
    { title: 'Statistics & Probability', level: 'Intermediate', description: 'Data analysis and probability basics.' }
  ];

  scienceTests = [
    { title: 'Physics Foundations', level: 'Beginner', description: 'Motion, force, and energy basics.' },
    { title: 'Chemistry Quiz', level: 'Intermediate', description: 'Atoms, elements, and reactions.' },
    { title: 'Biology Challenge', level: 'Advanced', description: 'Cells, DNA, and ecosystems.' },
    { title: 'Science Mega Test', level: 'All Levels', description: 'A mix of physics, chem, and bio.' },
    { title: 'Scientific Reasoning', level: 'Intermediate', description: 'Think like a scientist with logic-based questions.' }
  ];
}


