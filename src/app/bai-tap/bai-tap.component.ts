import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap',
  templateUrl: './bai-tap.component.html',
  styleUrls: ['./bai-tap.component.scss']
})
export class BaiTapComponent implements OnInit {

  p: number = 1;
  mangSanPham: any[] = [{MaSP:1,TenSP:"SonyXZ",Gia:1000}
  ,{MaSP:2,TenSP:"SonyXZ2",Gia:1000}
  ,{MaSP:3,TenSP:"HTCUUltra",Gia:1000}
  ,{MaSP:4,TenSP:"HTCU12Plus",Gia:1000}
  ,{MaSP:5,TenSP:"IphoneXSMAX",Gia:1000}
  ,{MaSP:6,TenSP:"IphoneXR",Gia:1000}
  ,{MaSP:7,TenSP:"XiaomiMiNote3",Gia:9900}
  ,{MaSP:8,TenSP:"XiaomiMi8",Gia:1000}
  ,{MaSP:9,TenSP:"GalaxyNote9",Gia:1000}
  ,{MaSP:10,TenSP:"GalaxyS9Plus",Gia:1000}
  ,{MaSP:11,TenSP:"NokiaX9",Gia:1000},];


  addItem(ma,ten,gia){

    const sanPham = {
        MaSP:ma,
         TenSP:ten,
         Gia:gia
    }

    this.mangSanPham.push(sanPham);
    localStorage.setItem('DSSP',JSON.stringify(this.mangSanPham));
  
  }

  xoaBtn(index){
    
   for (let i=0; i<this.mangSanPham.length;i++){
     if(this.mangSanPham[i].MaSP === index){
       this.mangSanPham.splice(i,1);
       localStorage.setItem('DSSP',JSON.stringify(this.mangSanPham));
     }
   }
   
  
   
  }


  constructor() { }

  ngOnInit() {

   if(localStorage.getItem('DSSP')){
        this.mangSanPham = JSON.parse(localStorage.getItem('DSSP'));
   }


  }

}
