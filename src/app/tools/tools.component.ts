import { Component, OnInit } from '@angular/core';
import { Tool } from './tool.model'; 
import { ToolService } from './tool.service'; 
import { CommonModule } from '@angular/common'; // Import this for ngClass

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  tools: Tool[] = [];
  selectedTool: Tool | null = null;

  constructor(private toolService: ToolService) {}

  ngOnInit(): void {
    this.loadTools();
  }

  loadTools(): void {
    this.tools = this.toolService.getTools();
  }

  onToolClick(tool: Tool): void {
    this.selectedTool = tool;
  }

  clearSelection(): void {
    this.selectedTool = null;
  }
}
