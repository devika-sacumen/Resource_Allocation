import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../shared/resource.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { NgForm  } from '@angular/forms';
import { Inject } from '@angular/core';    
import { DOCUMENT } from '@angular/common';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
selectedRole = '';
selectedType = '';
doj = '';
doe = '';
  constructor(public service: ResourceService, private http: HttpClient,
    public dialogRef: MatDialogRef<ResourceComponent>, @Inject(DOCUMENT) private document: Document , @Inject(MAT_DIALOG_DATA) public data: any ) {
     }

  ngOnInit() {
    this.form.patchValue(this.data);
  if( this.form.value == '') {
    this.form.get('project').disable();
    this.form.get('projectLead').disable();
    this.form.get('teamMember').disable();
    this.form.get('role').disable();
    this.form.get('type').disable();
  } else {
    this.form.get('project').enable();
    this.form.get('projectLead').enable();
    this.form.get('teamMember').enable();
    this.form.get('role').enable();
    this.form.get('type').enable();
  }
  }

  metaCustData={
    'AT&T':['Akamai EAA','Tenable','Crowdstrike'],
    'Sacumen':['Resource Allocation','Hire Talent','Everest'],
    'Beyond Identity':['Qradar'],
    'BIGID':[''],
    'BitDefender': [''],
    'BluBracket': [''],
    'Cloudflare' : ['Support'],
    'Cyfirma' : ['ServiceNow'],
    'GetVisibility' : [''],
    'Illusive	Illusive' : ['Azure Sentinel'],
    'IronNet' : ['Crowdstrike','Parser','Carbon Black'],
    'Kenna Security' : [''],
    'SSC' : ['Splunk Support'],
    'ThreatConnect' : [''],
    'Trend Micro Inc' : ['Qradar'],
    'Zscaler' : ['Qradar']
  };

  metaTeamMemberData={
    'Mohan Babu':[{role:'Development',type:'Full Time',DOJ:'01/JAN/2020',DOE:'01/SEP/2021'}], 
    'Shivaraja KE':[{role:'Accounts',type:'Full Time',DOJ:'01/MAY/2019',DOE:''}], 
    'Amrita Kumari':[{role:'Development',type:'Full Time',DOJ:'10/APR/2018',DOE:'05/JUN/2020'}], 
    'Tulsi Acharya':[{role:'Testing',type:'Full Time',DOJ:'09/JUN/2018',DOE:'15/OCT/2021'}],
    'Syed Kaiser':[{role:'Development',type:'Full Time',DOJ:'11/APR/2017',DOE:'15/JUL/2021'}],
    'Vibushan S':[{role:'Development',type:'Full Time',DOJ:'21/MAY/2016',DOE:''}],
    'Tushar Pal':[{role:'Development',type:'Full Time',DOJ:'22/JUL/2015',DOE:'04/APR/2021'}], 
    'Jaydeep Sannake':[{role:'Development',type:'Full Time',DOJ:'25/APR/2017',DOE:''}],
    'Ramakant Darbha':[{role:'Development',type:'Full Time',DOJ:'15/MAY/2020',DOE:''}], 
    'Deepak Baraik':[{role:'Development',type:'Full Time',DOJ:'16/JUN/2017',DOE:'06/OCT/2021'}],
    'Parul Shree':[{role:'Development',type:'Full Time',DOJ:'17/JUL/2016',DOE:''}], 
    'Jyothibabu Pasupuleti':[{role:'Development',type:'Full Time',DOJ:'01/MAY/2019',DOE:''}],
    'M Jayaprakash':[{role:'Development',type:'Full Time',DOJ:'18/NOV/2018',DOE:'08/SEP/2021'}], 
    'Amit Kulkarni':[{role:'Development',type:'Full Time',DOJ:'21/NOV/2020',DOE:''}],
    'Gowri Sirsi':[{role:'Testing',type:'Full Time',DOJ:'22/DEC/2019',DOE:''}], 
    'Adavayya Hiremath':[{role:'Development',type:'Full Time',DOJ:'09/AUG/2018',DOE:''}],
    'Nitesh Sinha':[{role:'CEO',type:'Full Time',DOJ:'21/APR/2015',DOE:''}], 
    'Praneeth Babu Kudithipudi':[{role:'Project Marketing',type:'Full Time',DOJ:'15/MAY/2015',DOE:''}],
    'Prince Gourav':[{role:'Development',type:'Full Time',DOJ:'21/NOV/2017',DOE:''}], 
    'Thribhuvana':[{role:'Testing',type:'Full Time',DOJ:'01/JUL/2021',DOE:''}],
    'Vignesh Krishnamoorthy':[{role:'Testing',type:'Full Time',DOJ:'11/APR/2018',DOE:''}], 
    'Guru M':[{role:'Accounts',type:'Full Time',DOJ:'17/MAY/2018',DOE:''}],
    'Jamie Ashikur Rahman':[{role:'Testing',type:'Full Time',DOJ:'15/JUL/2016',DOE:'22/MAY/2021'}], 
    'Abdul Shuaib N':[{role:'Events Manager',type:'Full Time',DOJ:'18/APR/2019',DOE:''}],
    'Kumar Vijay':[{role:'Testing',type:'Full Time',DOJ:'17/MAY/2019',DOE:''}], 
    'Parul Ranjan':[{role:'Development',type:'Full Time',DOJ:'19/JUL/2020',DOE:''}],
    'Nisha Pasargi':[{role:'Testing',type:'Full Time',DOJ:'16/AUG/2018',DOE:'08/JUN/2021'}], 
    'Vidya Sagar Bandaru':[{role:'Team Lead',type:'Full Time',DOJ:'18/JUN/2020',DOE:'28/JUL/2021'}],
    'Sarada Kiran':[{role:'Team Lead',type:'Full Time',DOJ:'01/OCT/2020',DOE:'01/SEP/2021'}], 
    'Devika':[{role:'Development',type:'Full Time',DOJ:'09/NOV/2020',DOE:''}],
    'Kiran Hanamaraddi':[{role:'Team Lead',type:'Full Time',DOJ:'05/DEC/2020',DOE:''}], 
    'Ravikumar Latchupatula':[{role:'Project Lead',type:'Full Time',DOJ:'28/FEB/2016',DOE:'20/AUG/2021'}],
    'Amrit Peeyush':[{role:'Development',type:'Full Time',DOJ:'27/MAR/2020',DOE:''}], 
    'Salla Naveen Kumar ':[{role:'Team Lead',type:'Full Time',DOJ:'01/AUG/2016',DOE:''}],
    'Manohara HS':[{role:'Testing',type:'Full Time',DOJ:'05/AUG/2018',DOE:''}], 
    'Pramod Mishra':[{role:'Team Lead',type:'Full Time',DOJ:'08/DEC/2020',DOE:''}],
    'Rajib Sarma':[{role:'Project Lead',type:'Full Time',DOJ:'15/MAY/2017',DOE:''}], 
    'Caroline Palha':[{role:'Team Lead',type:'Full Time',DOJ:'25/JUL/2018',DOE:''}],
    'Muhammed Salman':[{role:'Testing',type:'Full Time',DOJ:'18/SEP/2019',DOE:''}], 
    'Suthan Natrajan':[{role:'Team Lead',type:'Full Time',DOJ:'19/JUL/2018',DOE:''}],
    'Savitha Veerappa':[{role:'Development',type:'Full Time',DOJ:'14/JUN/2018',DOE:''}], 
    'Divya Pandia':[{role:'testing',type:'Full Time',DOJ:'11/SEP/2019',DOE:''}],
    'Arun Kumar':[{role:'Accounts',type:'Full Time',DOJ:'12/MAR/2019',DOE:''}], 
    'Ashu Jha':[{role:'Development',type:'Full Time',DOJ:'17/JUL/2018',DOE:''}],
    'Savitha G':[{role:'Development',type:'Full Time',DOJ:'08/AUG/2019',DOE:''}], 
    'Ranganathagowda N':[{role:'Project Lead',type:'Full Time',DOJ:'15/JUN/2019',DOE:''}],
    'Harshitha Urs K':[{role:'Accounts',type:'Full Time',DOJ:'19/NOV/2018',DOE:'17/MAY/2021'}], 
    'Kiran B N':[{role:'Team Lead',type:'Full Time',DOJ:'15/SEP/2020',DOE:''}],
    'Indu Saini':[{role:'Accounts',type:'Full Time',DOJ:'18/JUN/2019',DOE:''}], 
    'Pradeep M':[{role:'HR',type:'Full Time',DOJ:'21/NOV/2017',DOE:''}],
    'Pritish Banerjee':[{role:'Project Lead',type:'Full Time',DOJ:'16/MAY/2018',DOE:''}], 
    'Shruthi G':[{role:'HR',type:'Full Time',DOJ:'14/JUL/2018',DOE:''}],
    'Subhashish Lahiri':[{role:'Project Lead',type:'Full Time',DOJ:'16/MAY/2018',DOE:''}], 
    'Chethan P':[{role:'Testing',type:'Full Time',DOJ:'08/APR/2018',DOE:''}],
    'Surendran Krishnapuram':[{role:'HR',type:'Contractor',DOJ:'15/JUL/2018',DOE:'21/AUG/2021'}], 
    'Ragu Bharathi. E':[{role:'Development',type:'Contractor',DOJ:'15/FEB/2019',DOE:''}],
    'Rahul Shelke':[{role:'Development',type:'Contractor',DOJ:'19/JUN/2019',DOE:''}], 
    'Jameel Pasha Mohammed':[{role:'Development',type:'Contractor',DOJ:'08/FEB/2019',DOE:'01/JUL/2021'}],
    'Geethanjali Karnati':[{role:'Development',type:'Contractor',DOJ:'01/NOV/2020',DOE:''}], 
    'Ismail Aman':[{role:'Development',type:'Contractor',DOJ:'15/APR/2021',DOE:'01/JUL/2021'}],
    'Harsh Vardhan':[{role:'Development',type:'Contractor',DOJ:'11/AUG/2019',DOE:'04/MAY/2021'}], 
    'Jithu George':[{role:'Testing',type:'Contractor',DOJ:'05/AUG/2019',DOE:'16-/MAY/2021'}],
    'Deepika Shukla':[{role:'Testing',type:'Contractor',DOJ:'01/AUG/2019',DOE:'19/JUL/2020'}], 
    'Dhananjay':[{role:'Technical',type:'Contractor',DOJ:'01/NOV/2019',DOE:''}],
    'Priyanka Karn':[{role:'Testing',type:'Contractor',DOJ:'08/DEC/2017',DOE:'21/SEP/2021'}], 
    'Yagnik':[{role:'Technical',type:'Contractor',DOJ:'05/JUN/2018',DOE:'04/AUG/2021'}],
    'B Raghavendra Kedilaya':[{role:'Testing',type:'Contractor',DOJ:'08/SEP/2018',DOE:'01/OCT/2020'}], 
    'Kiran Reddy':[{role:'Testing',type:'Contractor',DOJ:'18/JUN/2021',DOE:''}], 
    'Muthu':[{role:'Technical',type:'Contractor',DOJ:'11/MAY/2021',DOE:''}],
    'SARANYA JAYAVEERAN':[{role:'HR',type:'Contractor',DOJ:'09/MAY/2020',DOE:''}], 
    'Manoj Jain':[{role:'HR',type:'Contractor',DOJ:'08/JUN/2019',DOE:''}],
    'Hiren Patel':[{role:'Testing',type:'Contractor',DOJ:'10/JUL/2018',DOE:'05/SEP/2021'}], 
    'Bhargavi':[{role:'HR',type:'Contractor',DOJ:'05/AUG/2018',DOE:''}]
  };

  weekData = {
    'wk1':{weekStart:'05/Apr/2021',weekEnd:'09/Apr/2021'}, 'wk2':{weekStart:'12/Apr/2021',weekEnd:'16/Apr/2021'},
    'wk3':{weekStart:'19/Apr/2021',weekEnd:'23/Apr/2021'}, 'wk4':{weekStart:'26/Apr/2021',weekEnd:'30/Apr/2021'},
    'wk5':{weekStart:'03/May/2021',weekEnd:'07/May/2021'}, 'wk6':{weekStart:'10/May/2021',weekEnd:'14/May/2021'},
    'wk7':{weekStart:'17/May/2021',weekEnd:'21/May/2021'}, 'wk8':{weekStart:'24/May/2021',weekEnd:'28/May/2021'},
    'wk9':{weekStart:'31/May/2021',weekEnd:'04/Jun/2021'}, 'wk10':{weekStart:'07/Jun/2021',weekEnd:'11/Jun/2021'},
    'wk11':{weekStart:'14/Jun/2021',weekEnd:'18/Jun/2021'}, 'wk12':{weekStart:'21/Jun/2021',weekEnd:'25/Jun/2021'},
    'wk13':{weekStart:'28/Jun/2021',weekEnd:'02/Jul/2021'}, 'wk14':{weekStart:'05/Jul/2021',weekEnd:'09/Jul/2021'},
    'wk15':{weekStart:'12/Jul/2021',weekEnd:'16/Jul/2021'}, 'wk16':{weekStart:'19/Jul/2021',weekEnd:'23/Jul/2021'},
    'wk17':{weekStart:'26/Jul/2021',weekEnd:'30/Jul/2021'}, 'wk18':{weekStart:'02/Aug/2021',weekEnd:'06/Aug/2021'},
    'wk19':{weekStart:'09/Aug/2021',weekEnd:'13/Aug/2021'}, 'wk20':{weekStart:'16/Aug/2021',weekEnd:'20/Aug/2021'},
    'wk21':{weekStart:'23/Aug/2021',weekEnd:'27/Aug/2021'}, 'wk22':{weekStart:'30/Aug/2021',weekEnd:'03/Sep/2021'},
    'wk23':{weekStart:'06/Sep/2021',weekEnd:'10/Sep/2021'}, 'wk24':{weekStart:'13/Sep/2021',weekEnd:'17/Sep/2021'},
    'wk25':{weekStart:'20/Sep/2021',weekEnd:'24/Sep/2021'}, 'wk26':{weekStart:'27/Sep/2021',weekEnd:'01/Oct/2021'},
    'wk27':{weekStart:'04/Oct/2021',weekEnd:'08/Oct/2021'}, 'wk28':{weekStart:'11/Oct/2021',weekEnd:'15/Oct/2021'},
    'wk29':{weekStart:'18/Oct/2021',weekEnd:'22/Oct/2021'}, 'wk30':{weekStart:'25/Oct/2021',weekEnd:'29/Oct/2021'},
    'wk31':{weekStart:'01/Nov/2021',weekEnd:'05/Nov/2021'}, 'wk32':{weekStart:'08/Nov/2021',weekEnd:'12/Nov/2021'},
    'wk33':{weekStart:'15/Nov/2021',weekEnd:'19/Nov/2021'}, 'wk34':{weekStart:'22/Nov/2021',weekEnd:'26/Nov/2021'},
    'wk35':{weekStart:'29/Nov/2021',weekEnd:'03/Dec/2021'}, 'wk36':{weekStart:'06/Dec/2021',weekEnd:'10/Dec/2021'},
    'wk37':{weekStart:'13/Dec/2021',weekEnd:'17/Dec/2021'}, 'wk38':{weekStart:'20/Dec/2021',weekEnd:'24/Dec/2021'},
    'wk39':{weekStart:'27/Dec/2021',weekEnd:'31/Dec/2021'}, 'wk40':{weekStart:'03/Jan/2022',weekEnd:'07/Jan/2022'},
    'wk41':{weekStart:'10/Jan/2022',weekEnd:'14/Jan/2022'}, 'wk42':{weekStart:'17/Jan/2022',weekEnd:'21/Jan/2022'},
    'wk43':{weekStart:'24/Jan/2022',weekEnd:'28/Jan/2022'}, 'wk44':{weekStart:'31/Jan/2022',weekEnd:'04/Feb/2022'},
    'wk45':{weekStart:'07/Feb/2022',weekEnd:'11/Feb/2022'}, 'wk46':{weekStart:'14/Feb/2022',weekEnd:'18/Feb/2022'},
    'wk47':{weekStart:'21/Feb/2022',weekEnd:'25/Feb/2022'}, 'wk48':{weekStart:'28/Feb/2022',weekEnd:'04/Mar/2022'},
    'wk49':{weekStart:'07/Mar/2022',weekEnd:'11/Mar/2022'}, 'wk50':{weekStart:'14/Mar/2022',weekEnd:'18/Mar/2022'},
    'wk51':{weekStart:'21/Mar/2022',weekEnd:'25/Mar/2022'}, 'wk52':{weekStart:'28/Mar/2022',weekEnd:'01/Apr/2022'}
  };

  Customers = Object.keys(this.metaCustData);
  //Roles = ['Development', 'Testing'];
  project_leads = ['Pritish B', 'Kumaragurubaran M', 'Raghavendra K', 'Abhishek V', 'Subhashish L'];
  team_members = Object.keys(this.metaTeamMemberData);
  //types = ['Full Time', 'Contractor'];  

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    customer: new FormControl('', Validators.required),
    project: new FormControl({value:'',disabled: true}, Validators.required ),
    projectLead: new FormControl({value:'',disabled: true}, Validators.required),
    teamMember: new FormControl({value:'',disabled: true}, Validators.required),
    role: new FormControl({value:'',disabled: true}, Validators.required),
    type: new FormControl({value:''}),
    wk1: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk2: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), 
    wk3: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk4: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), 
    wk5: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk6: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), 
    wk7: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk8: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), 
    wk9: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk10: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]),
    wk11: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk12: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]),
    wk13: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk14: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), 
    wk15: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]),wk16: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), 
    wk17: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk18: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), 
    wk19: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk20: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]),
    wk21: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk22: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), 
    wk23: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk24: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), 
    wk25: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk26: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), 
    wk27: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk28: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), 
    wk29: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk30: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]),
    wk31: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk32: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), 
    wk33: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk34: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), 
    wk35: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk36: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), 
    wk37: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk38: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), 
    wk39: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk40: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]),
    wk41: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk42: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]),
    wk43: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk44: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]),
    wk45: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk46: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), 
    wk47: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk48: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), 
    wk49: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk50: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), 
    wk51: new FormControl('',[Validators.pattern("^([0-9]{1,3})")]), wk52: new FormControl('',[Validators.pattern("^([0-9]{1,3})+")])
  });

  onSubmit(formData:NgForm) {
  // this.http.post('http://localhost:3000/Resources', form).subscribe(
  //   (response) => {console.log(response)
  //     this.document.location.reload();}
  // )
     
      if (this.form.valid) {
        if (this.form.value.id == null){
      this.http.post('http://localhost:3000/Resources', formData).subscribe(
        (response) => {
        this.document.location.reload();
        }
      )}
    else{
    let url = `http://localhost:3000/Resources/${this.form.value.id}`;
    this.http.put(url, formData).subscribe(
      (response) => {
        this.document.location.reload();
      }
    )
    }
      this.form.reset();
    }
    this.onClose();
  }

  onClose() {
    this.form.reset();
    this.dialogRef.close();
  }

  getWk1(){
    if(this.weekData.wk1.weekStart <= this.doj && this.weekData.wk1.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk1').disable();
    } else {
      this.form.get('wk1').enable();
    }
  };
  getWk2(){
    if(this.weekData.wk2.weekStart <= this.doj && this.weekData.wk2.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk2').disable();
    } else {
      this.form.get('wk2').enable();
    }
  };
  getWk3(){
    if(this.weekData.wk3.weekStart <= this.doj && this.weekData.wk3.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk3').disable();
    } else {
      this.form.get('wk3').enable();
    }
  };
  getWk4(){
    if(this.weekData.wk4.weekStart <= this.doj && this.weekData.wk4.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk4').disable();
    } else {
      console.log(this.weekData.wk4.weekStart, this.doj, this.doe)
      this.form.get('wk4').enable();
    }
  };
  getWk5(){
    if(this.weekData.wk5.weekStart <= this.doj && this.weekData.wk5.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk5').disable();
    } else {
      this.form.get('wk5').enable();
    }
  };
  getWk6(){
    if(this.weekData.wk6.weekStart <= this.doj && this.weekData.wk6.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk6').disable();
    } else {
      this.form.get('wk6').enable();
    }
  };
  getWk7(){
    if(this.weekData.wk7.weekStart <= this.doj && this.weekData.wk7.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk7').disable();
    } else {
      this.form.get('wk7').enable();
    }
  };
  getWk8(){
    if(this.weekData.wk8.weekStart <= this.doj && this.weekData.wk8.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk8').disable();
    } else {
      this.form.get('wk8').enable();
    }
  };
  getWk9(){
    if(this.weekData.wk9.weekStart <= this.doj && this.weekData.wk9.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk9').disable();
    } else {
      this.form.get('wk9').enable();
    }
  };
  getWk10(){
    if(this.weekData.wk10.weekStart <= this.doj && this.weekData.wk10.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk10').disable();
    } else {
      this.form.get('wk10').enable();
    }
  };
  getWk11(){
    if(this.weekData.wk11.weekStart <= this.doj && this.weekData.wk11.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk11').disable();
    } else {
      this.form.get('wk11').enable();
    }
  };
  getWk12(){
    if(this.weekData.wk12.weekStart <= this.doj && this.weekData.wk12.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk12').disable();
    } else {
      this.form.get('wk12').enable();
    }
  };
  getWk13(){
    if(this.weekData.wk13.weekStart <= this.doj && this.weekData.wk13.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk13').disable();
    } else {
      this.form.get('wk13').enable();
    }
  };
  getWk14(){
    if(this.weekData.wk14.weekStart <= this.doj && this.weekData.wk14.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk14').disable();
    } else {
      this.form.get('wk14').enable();
    }
  };
  getWk15(){
    if(this.weekData.wk15.weekStart <= this.doj && this.weekData.wk15.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk15').disable();
    } else {
      this.form.get('wk15').enable();
    }
  };
  getWk16(){
    if(this.weekData.wk16.weekStart <= this.doj && this.weekData.wk16.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk16').disable();
    } else {
      this.form.get('wk16').enable();
    }
  };
  getWk17(){
    if(this.weekData.wk17.weekStart <= this.doj && this.weekData.wk17.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk17').disable();
    } else {
      this.form.get('wk17').enable();
    }
  };
  getWk18(){
    if(this.weekData.wk18.weekStart <= this.doj && this.weekData.wk18.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk18').disable();
    } else {
      this.form.get('wk18').enable();
    }
  };
  getWk19(){
    if(this.weekData.wk19.weekStart <= this.doj && this.weekData.wk19.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk19').disable();
    } else {
      this.form.get('wk19').enable();
    }
  };
  getWk20(){
    if(this.weekData.wk20.weekStart <= this.doj && this.weekData.wk20.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk20').disable();
    } else {
      this.form.get('wk20').enable();
    }
  };
  getWk21(){
    if(this.weekData.wk21.weekStart <= this.doj && this.weekData.wk21.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk21').disable();
    } else {
      this.form.get('wk21').enable();
    }
  };
  getWk22(){
    if(this.weekData.wk22.weekStart <= this.doj && this.weekData.wk22.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk22').disable();
    } else {
      this.form.get('wk22').enable();
    }
  };
  getWk23(){
    if(this.weekData.wk23.weekStart <= this.doj && this.weekData.wk23.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk23').disable();
    } else {
      this.form.get('wk23').enable();
    }
  };
  getWk24(){
    if(this.weekData.wk24.weekStart <= this.doj && this.weekData.wk24.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk24').disable();
    } else {
      this.form.get('wk24').enable();
    }
  };
  getWk25(){
    if(this.weekData.wk25.weekStart <= this.doj && this.weekData.wk25.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk25').disable();
    } else {
      this.form.get('wk25').enable();
    }
  };
  getWk26(){
    if(this.weekData.wk26.weekStart <= this.doj && this.weekData.wk26.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk26').disable();
    } else {
      this.form.get('wk26').enable();
    }
  };
  getWk27(){
    if(this.weekData.wk27.weekStart <= this.doj && this.weekData.wk27.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk27').disable();
    } else {
      this.form.get('wk27').enable();
    }
  };
  getWk28(){
    if(this.weekData.wk28.weekStart <= this.doj && this.weekData.wk28.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk28').disable();
    } else {
      this.form.get('wk28').enable();
    }
  };
  getWk29(){
    if(this.weekData.wk29.weekStart <= this.doj && this.weekData.wk29.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk29').disable();
    } else {
      this.form.get('wk29').enable();
    }
  };
  getWk30(){
    if(this.weekData.wk30.weekStart <= this.doj && this.weekData.wk30.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk30').disable();
    } else {
      this.form.get('wk30').enable();
    }
  };
  getWk31(){
    if(this.weekData.wk31.weekStart <= this.doj && this.weekData.wk31.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk31').disable();
    } else {
      this.form.get('wk31').enable();
    }
  };
  getWk32(){
    if(this.weekData.wk32.weekStart <= this.doj && this.weekData.wk32.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk32').disable();
    } else {
      this.form.get('wk32').enable();
    }
  };
  getWk33(){
    if(this.weekData.wk33.weekStart <= this.doj && this.weekData.wk33.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk33').disable();
    } else {
      this.form.get('wk33').enable();
    }
  };
  getWk34(){
    if(this.weekData.wk34.weekStart <= this.doj && this.weekData.wk34.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk34').disable();
    } else {
      this.form.get('wk34').enable();
    }
  };
  getWk35(){
    if(this.weekData.wk35.weekStart <= this.doj && this.weekData.wk35.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk35').disable();
    } else {
      this.form.get('wk35').enable();
    }
  };
  getWk36(){
    if(this.weekData.wk36.weekStart <= this.doj && this.weekData.wk36.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk36').disable();
    } else {
      this.form.get('wk36').enable();
    }
  };
  getWk37(){
    if(this.weekData.wk37.weekStart <= this.doj && this.weekData.wk37.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk37').disable();
    } else {
      this.form.get('wk37').enable();
    }
  };
  getWk38(){
    if(this.weekData.wk38.weekStart <= this.doj && this.weekData.wk38.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk38').disable();
    } else {
      this.form.get('wk38').enable();
    }
  };
  getWk39(){
    if(this.weekData.wk39.weekStart <= this.doj && this.weekData.wk39.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk39').disable();
    } else {
      this.form.get('wk39').enable();
    }
  };
  getWk40(){
    if(this.weekData.wk40.weekStart <= this.doj && this.weekData.wk40.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk40').disable();
    } else {
      this.form.get('wk40').enable();
    }
  };
  getWk41(){
    if(this.weekData.wk41.weekStart <= this.doj && this.weekData.wk41.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk41').disable();
    } else {
      this.form.get('wk41').enable();
    }
  };
  getWk42(){
    if(this.weekData.wk42.weekStart <= this.doj && this.weekData.wk42.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk42').disable();
    } else {
      this.form.get('wk42').enable();
    }
  };
  getWk43(){
    if(this.weekData.wk43.weekStart <= this.doj && this.weekData.wk43.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk43').disable();
    } else {
      this.form.get('wk43').enable();
    }
  };
  getWk44(){
    if(this.weekData.wk44.weekStart <= this.doj && this.weekData.wk44.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk44').disable();
    } else {
      this.form.get('wk44').enable();
    }
  };
  getWk45(){
    if(this.weekData.wk45.weekStart <= this.doj && this.weekData.wk45.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk45').disable();
    } else {
      this.form.get('wk45').enable();
    }
  };
  getWk46(){
    if(this.weekData.wk46.weekStart <= this.doj && this.weekData.wk46.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk46').disable();
    } else {
      this.form.get('wk46').enable();
    }
  };
  getWk47(){
    if(this.weekData.wk47.weekStart <= this.doj && this.weekData.wk47.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk47').disable();
    } else {
      this.form.get('wk47').enable();
    }
  };
  getWk48(){
    if(this.weekData.wk48.weekStart <= this.doj && this.weekData.wk48.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk48').disable();
    } else {
      this.form.get('wk48').enable();
    }
  };
  getWk49(){
    if(this.weekData.wk49.weekStart <= this.doj && this.weekData.wk49.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk49').disable();
    } else {
      this.form.get('wk49').enable();
    }
  };
  getWk50(){
    if(this.weekData.wk50.weekStart <= this.doj && this.weekData.wk50.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk50').disable();
    } else {
      this.form.get('wk50').enable();
    }
  };
  getWk51(){
    if(this.weekData.wk51.weekStart <= this.doj && this.weekData.wk51.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk51').disable();
    } else {
      this.form.get('wk51').enable();
    }
  };
  getWk52(){
    if(this.weekData.wk52.weekStart <= this.doj && this.weekData.wk52.weekStart >= this.doe && this.doe != ""){
      this.form.get('wk52').disable();
    } else {
      this.form.get('wk52').enable();
    }
  };

  onSelectionChanged({value}) {
    if(value == '') {
      this.form.get('project').disable();
    } else {
      this.form.get('project').enable();
    }
  }

  onSelectProjectChanged({value}) {
    if(value == '') {
      this.form.get('projectLead').disable();
    } else {
      this.form.get('projectLead').enable();
    }
  }

  onSelectProjectLeadChanged({value}) {
    if(value == '') {
      this.form.get('teamMember').disable();
    } else {
      this.form.get('teamMember').enable();
    }
  }

  onSelectTeamMemberChanged({value}) {
    this.selectedRole = this.metaTeamMemberData[value][0].role;
    this.selectedType = this.metaTeamMemberData[value][0].type;
    this.doj = this.metaTeamMemberData[value][0].DOJ;
    this.doe = this.metaTeamMemberData[value][0].DOE;
    console.log(this.doj);
    console.log(this.doe);
    if(value == '') {
      this.form.get('role').disable();
    } else {
      this.form.get('role').enable();
    }
  }

  onSelectRoleChanged({value}) {
    if(value == '') {
      this.form.get('type').disable();
    } else {
      this.form.get('type').enable();
    }
  }

}
