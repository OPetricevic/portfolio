import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tools',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {
  tools = [
    { title: 'Angular', description: 'Razvoj SPA aplikacija.', imageUrl: '/angular.png', price: 10 },
    { title: 'React', description: 'Frontend razvoj s React-om.', imageUrl: '/react.png', price: 10 },
    { title: 'HTML/CSS/JS', description: 'Osnovni alati za web razvoj.', imageUrl: '/html.png', price: 10 },
    { title: 'Python', description: 'Skriptiranje i data science.', imageUrl: '/python.png', price: 25 },
    { title: 'SQL', description: 'Rad sa bazama podataka.', imageUrl: '/mysql.png', price: 25 },
    { title: 'Rust', description: 'Sistem programiranje i performanse.', imageUrl: '/rust.png', price: 25 },
    { title: 'Unreal Engine', description: 'Razvoj igara i 3D svjetova.', imageUrl: '/unreal.png', price: 20 },
    { title: 'Swift', description: 'Razvoj iOS aplikacija.', imageUrl: '/swift.png', price: 20 },
    { title: 'PHP', description: 'Web razvoj backend sistema.', imageUrl: '/php.png', price: 25 },
    { title: 'Kotlin', description: 'Razvoj Android aplikacija.', imageUrl: '/kotlin.png', price: 20 },
    { title: 'C#', description: 'Backend razvoj i Windows aplikacije.', imageUrl: '/csharp.png', price: 25 },
    { title: 'C', description: 'Niskonivovsko programiranje.', imageUrl: '/c.png', price: 25 },
    { title: 'C++', description: 'Razvoj aplikacija visokih performansi.', imageUrl: '/cpp.png', price: 25 },
    { title: '.NET', description: 'Razvoj Windows aplikacija.', imageUrl: '/net.png', price: 25 },
    { title: 'Java', description: 'Razvoj poslovnih i Android aplikacija.', imageUrl: '/java.png', price: 20 },
    { title: 'CSS', description: 'Stilizacija web stranica.', imageUrl: '/css.png', price: 10 },
    { title: 'JavaScript', description: 'Dinamični web sadržaj.', imageUrl: '/js.png', price: 10 },
    { title: 'Firebase', description: 'Alat za upravljanje bazama podataka.', imageUrl: '/firebase.png', price: 20 }
  ];

  selectedTool: any = null;

  onToolClick(tool: any) {
    this.selectedTool = tool;
  }

  clearSelection() {
    this.selectedTool = null;
  }
}
