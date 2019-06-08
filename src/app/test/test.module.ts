import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirective } from '../test.directive';
import { TestPipe } from '../test.pipe';

@NgModule({
  declarations: [TestDirective, TestPipe],
  imports: [
    CommonModule
  ]
})
export class TestModule { }
