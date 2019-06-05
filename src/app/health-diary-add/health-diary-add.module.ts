import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MediaCapture, MediaFile, CaptureError, CaptureAudioOptions, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { File } from '@ionic-native/file/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';

import { IonicModule } from '@ionic/angular';

import { HealthDiaryAddPage } from './health-diary-add.page';

const routes: Routes = [
  {
    path: '',
    component: HealthDiaryAddPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [MediaCapture,File,Media],
  declarations: [HealthDiaryAddPage]
})
export class HealthDiaryAddPageModule {}
