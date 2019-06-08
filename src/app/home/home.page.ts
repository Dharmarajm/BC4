import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { ActivatedRoute,Router,NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data:any;
  paramsData:any;
  diary:any=[{"id":1,"name":'Heart',"description":"Play Music of joy","date":'03 May 2019',"time":'12:49:00 am'},{"id":2,"name":'Heart',"description":"Play Music of joy","date":'03 May 2019',"time":'12:49:00 am'},{"id":3,"name":'Heart',"description":"Play Music of joy","date":'03 May 2019',"time":'12:49:00 am'}]
  constructor(public Testservice:HomeService,private router: Router,private route: ActivatedRoute,private navCtrl:NavController) {
  	/*this.route.queryParams.subscribe(params =>{
      this.paramsData=params["id"]
    });  */
  }
  
  ngOnInit() {
    
  	/*this.Testservice.service(this.paramsData).subscribe(res=>{
  		console.log(res)
        this.data=res;
  	});*/
  }
   
  test(){
    console.log('test')
    //this.nav.goForward('')
    //this.nav.goRoot('')
    this.navCtrl.navigateForward('/health-diary-add')
    //this.navCtrl.navigateBack('/products');
    //this.navCtrl.navigateRoot('/support');
  } 

  diaryDetails(data,diary){
    console.log(data,diary)

    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(data),
        array:JSON.stringify(diary)
      }
    };

    this.router.navigate(['music'], navigationExtras);
  }

}
