import {
  Component,
  ViewChild,
  AfterViewInit,
  ViewContainerRef,
  ComponentRef,
  OnInit,
  Input,
  EventEmitter,
  Output,
  Injector,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StepConfig } from './models/step-config.model';
import { FormStepComponent } from './models/form-step-cponent.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stepper',
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit, AfterViewInit {
  @Input() steps: StepConfig[] = [];
  @Input() formGroup!: FormGroup;
  @Input() formGroupConfigs!: any;
  @Input() data: any = {};

  @Output() onTransitionComplete = new EventEmitter<FormGroup>();
  @Output() onSelectedIndexChanged = new EventEmitter<number>();

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef, static: true })
  dynamicComponentContainer!: ViewContainerRef;

  currentIndex: number = 0;
  currentFormGroup!: FormGroup;
  componentRefs: ComponentRef<FormStepComponent>[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.steps = this.steps.sort((a: StepConfig, b: StepConfig) => a.order - b.order);

    this.steps.forEach((step) => {
      if (this.formGroupConfigs[step.index]) {
        this.formGroup.addControl(step.index, this.formGroupConfigs[step.index]);
      } else {
        this.formGroup.addControl(step.index, this.fb.group({}));
      }
    });
  }

  ngAfterViewInit(): void {
    this.initializeStepComponent(this.currentIndex);
  }

  initializeStepComponent(index: number): void {
    this.dynamicComponentContainer.clear(); // Clear previous step component

    const step = this.steps[index];
    const injector = Injector.create({
      providers: [{ provide: StepperComponent, useValue: this }],
      parent: this.dynamicComponentContainer.injector,
    });

    const componentRef = this.dynamicComponentContainer.createComponent(step.component as any, {
      injector,
    }) as ComponentRef<FormStepComponent>;

    const stepFormGroup = this.formGroup.get(step.index) as FormGroup;
    componentRef.instance.formGroup = stepFormGroup;
    componentRef.instance.globalFormGroup = this.formGroup;
    componentRef.instance.data = this.data;

    this.currentFormGroup = stepFormGroup;
    this.componentRefs = [componentRef];
  }

  nextStep(): void {
    if (this.currentIndex < this.steps.length - 1) {
      if (this.currentFormGroup.valid) {
        this.currentIndex++;
        this.initializeStepComponent(this.currentIndex);
        this.onSelectedIndexChanged.emit(this.currentIndex);
        this.onTransitionComplete.emit(this.currentFormGroup);
      } else {
        this.currentFormGroup.markAllAsTouched(); // Mark form as touched to show validation errors
      }
    }
  }

  previousStep(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.initializeStepComponent(this.currentIndex);
      this.onSelectedIndexChanged.emit(this.currentIndex);
      this.onTransitionComplete.emit(this.currentFormGroup);
    }
  }

  goToStep(index: number): void {
    if (index >= 0 && index < this.steps.length) {
      this.currentIndex = index;
      this.initializeStepComponent(index);
      this.onSelectedIndexChanged.emit(index);
    } else {
      console.warn(`Index ${index} is out of bounds for the stepper.`);
    }
  }

  ngOnDestroy(): void {
    this.componentRefs.forEach(ref => ref.destroy());
  }
}
