import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

interface Metric {
  value: string,
  label: string
}

@Component({
  selector: 'app-metric-selector',
  templateUrl: './metric-selector.component.html',
  // styleUrls: ['./metric-selector.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule],
})
export class MetricSelectorComponent {
  selected!: string;
  metrics: Metric[] = [
    { value: "overall", label: "Overall risk level" },
    { value: "caseDensity", label: "Cases per 100k level" },
    { value: "testPositivityRatio", label: "Test positivity ration level" },
    { value: "infectionRate", label: "Infection rate level" }
  ];

  onChangeMetric(event: any) {
    console.log(event.value)
  }
}
