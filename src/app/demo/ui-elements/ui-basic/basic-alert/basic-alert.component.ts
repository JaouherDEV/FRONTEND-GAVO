import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VolsService } from 'src/app/services/vols.service';
import { VilleModule } from 'src/app/ville/ville.module';


@Component({
  selector: 'app-basic-alert',
  templateUrl: './basic-alert.component.html',
  styleUrls: ['./basic-alert.component.scss']
})
export class BasicAlertComponent implements OnInit {
    date:Date;
    dd:any
    affiche:String
    ville:any
    dats:any
    datte=Date
    items:any
    it:any
    selectd:any={}
    selectdes:any
    countryForm:FormGroup
    Parama:FormGroup
    public multiCollapsed2: boolean;
   
       constructor(private service:VolsService ,private servicesdate:DatePipe) { 
         this.Parama= new FormGroup({
          param:new FormControl(),
         })
        this.countryForm = new FormGroup({
          villed: new FormControl(),
          villea:new FormControl(),
          bagage_opt:new FormControl(
           {value:true},
          ),
          nvol:new FormControl(),
          naturevol:new FormControl(),
          type:new FormControl(),
          date:new FormControl(),
          jo:new FormControl(),
         
          hd:new FormControl(),
          ha:new FormControl(),
          kilo:new FormControl({
            value:20
          }),
          prix_bagage:new FormControl(),
          prix_achate:new FormControl(),
          prix_vente:new FormControl(),
          ouvert:new FormControl(),
          nb_bagage:new FormControl(),
          remarque:new FormControl(),
          obs:new FormControl(),
       });
      
    }

  ngOnInit() {

    this.multiCollapsed2 = true;
    
  }
   fun(event){
    var weekday = [];
    weekday[0] =  "dimanche";
    weekday[1] = "lundi";
    weekday[2] = "mardi";
    weekday[3] = "mercredi";
    weekday[4] = "jeudi";
    weekday[5] = "vendredi";
    weekday[6] = "samedi";
     this.date= new Date( (event.target ).value);
     this.dd=weekday[this.date.getDay()]
     
   }
 
   villed(event){
       this.transform((event.target).value);
       this.items=this.dats.items[0].entries
       console.log(this.items)
   }
   savevilled(id:VilleModule){
    this.selectd = id;    
   }

   villedd(event){
    this.transform((event.target).value);
    this.it=this.dats.items[0].entries
    console.log(this.it)
}
      savevilleddd(id:VilleModule){

       this.selectdes = id;    
    }
    /*savevilleddd(id:VilleModule){
      this.villedd = id;  
    }*/
    async transform(searchInput: string) {   
      (await this.service.getpays(searchInput)).subscribe((data)=>
      this.dats=data
      
      );
         
   }
        fn(){
          
          console.log(this.selectd.label)
          const daeee=formatDate(this.date,'yyyy-MM-dd',"en-US")
          this.countryForm.value.date=daeee;
          this.countryForm.value.jo=this.date.getDay();
          if(this.countryForm.value.bagage_opt=="true"){
            this.countryForm.value.bagage_opt=Number(1)
          }else{
            this.countryForm.value.bagage_opt=Number(0)
          }
          if(this.countryForm.value.obs==null){
            this.countryForm.value.obs=""
          }
          if(this.countryForm.value.remarque==null){
            this.countryForm.value.remarque=""
          }
          console.log(this.countryForm.value)
          let poqst=JSON.stringify(this.countryForm.value)
          
          this.service.add(poqst).subscribe(data=>{
            console.log(data)
          })
          console.log(this.Parama.value)
          console.log(poqst)
        }
  
   














 }




