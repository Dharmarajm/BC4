import { Component, OnInit } from '@angular/core';
import { MediaCapture, MediaFile, CaptureError, CaptureAudioOptions, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { File,FileEntry, IFile } from '@ionic-native/file/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-health-diary-add',
  templateUrl: './health-diary-add.page.html',
  styleUrls: ['./health-diary-add.page.scss'],
})
export class HealthDiaryAddPage implements OnInit {
  
  recording: boolean = false;
  filePath: string;
  fileName: string;
  audio: MediaObject;
  audioList: any[] = [];
  sec:number = 0;
  time:any ="00:00:00";
  interval:any;
  zero:any;
  show:any;
  isenabled:boolean=true;
  audioTrack:boolean = false;
  recordStart:boolean= false;
  Stop:boolean = false;
  Pause:boolean =false;

  constructor(private mediaCapture: MediaCapture,private media: Media,private file: File,public platform: Platform) {
    this.show=3; 
  }

  ngOnInit() {
  }
  

  start(){
  /*	let options: CaptureAudioOptions = { limit: 1,duration: 180};
	this.mediaCapture.captureAudio(options).then((data: MediaFile[]) => {
		console.log(data);
	}),((err: CaptureError) => console.log(err));*/

	if(this.audioTrack==false && this.recordStart==false){
        
        this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.mp3';
              
         this.file.createFile(this.file.externalDataDirectory,this.fileName,{append: true}).then((res) => {
            this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.audio = this.media.create(this.filePath);
            this.audioTrack=true;
            this.Stop=true;
            this.Pause=true;
            this.audio.startRecord();

            this.audio.onSuccess.subscribe(() => console.log('Action is successful'));

            this.audio.onError.subscribe(error => console.log('Error!', error));
            this.recording = true;
            this.show = 1;      
            //this.isenabled=false; 
            this.time ="00:00:00";
            this.sec=0;   
            this.interval =setInterval(() => {
            this.sec +=1 ;
            this.time= this.secondsToTime(this.sec)
            }, 1000);
            this.recording = true; 
         }).catch(e => console.log(e));
    }else{
      if(this.recordStart==false){
         this.audioTrack=false;
         this.Pause=false;
         this.recordStart=true;
         this.audio.pauseRecord();
         clearInterval(this.interval);
         
       }else{
         this.audioTrack=true;
         this.recordStart=false;
         this.Pause=true;
         this.audio.resumeRecord();
         this.interval =setInterval(() => {
          this.sec +=1 ;
          this.time= this.secondsToTime(this.sec)
         }, 1000);
         
       }
    }       
  }

  stop(){ 
        this.isenabled=false; 
        this.Stop=false;  
        this.show = 2;     
        clearInterval(this.interval);
        this.audio.stopRecord();
        this.audio.release();
        /*let data = { filename: this.fileName };
        this.audioList.push(data);
        localStorage.setItem("audiolist", JSON.stringify(this.audioList));
        this.recording = false;
        this.getAudioList();      */  
    }


    startRecord() {
        if (this.platform.is('ios')) {
          this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
          this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
          this.audio = this.media.create(this.filePath);
        } else if (this.platform.is('android')) {
          this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
          this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
          this.audio = this.media.create(this.filePath);
        }
        this.audio.startRecord();
        this.recording = true;
    }


    stopRecord() {
     this.audio.stopRecord();
     let data = { filename: this.fileName };
     this.audioList.push(data);
     localStorage.setItem("audiolist", JSON.stringify(this.audioList));
     this.recording = false;
     this.getAudioList();
    }


    secondsToTime(secs){
        var hours = Math.floor(secs / (60 * 60));
        var divisor_for_minutes = secs % (60 * 60);
        var minutes = Math.floor(divisor_for_minutes / 60);
        var divisor_for_seconds = divisor_for_minutes % 60;
        var seconds = Math.ceil(divisor_for_seconds);
        if(seconds < 10){
          this.zero = "0" + seconds;
          seconds = this.zero ;
        }
        if(minutes < 10){
          this.zero = "0" + minutes;
          minutes = this.zero ;
        }
        if(hours < 10){
          this.zero = "0" + hours;
          hours = this.zero ;
        }
        var obj = hours + ":" + minutes + ":" + seconds;
        return obj;
    }



}
