import { Component, OnInit, ViewChild  } from '@angular/core';
import { ResourceService } from 'src/app/shared/resource.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ResourceComponent } from "./../resource/resource.component";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {

  constructor(private resourceService: ResourceService, private dialog: MatDialog, private http: HttpClient) { }
  getType:any;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['actions','customer', 'project', 'projectLead', 'teamMember', 'role', 'type', 'WK1' , 'WK2', 'WK3', 'WK4', 'WK5', 'WK6', 'WK7', 'WK8', 'WK9', 'WK10', 'WK11', 'WK12', 'WK13', 'WK14', 'WK15', 'WK16', 'WK17', 'WK18', 'WK19', 'WK20', 'WK21', 'WK22','WK23', 'WK24', 'WK25', 'WK26', 'WK27', 'WK28', 'WK29', 'WK30', 'WK31', 'WK32', 'WK33', 'WK34', 'WK35', 'WK36', 'WK37', 'WK38', 'WK39', 'WK40', 'WK41', 'WK42', 'WK43', 'WK44', 'WK45', 'WK46', 'WK47', 'WK48', 'WK49', 'WK50', 'WK51', 'WK52'];
  displayedWeekStartColumns: string[] = ['','', '', '', '', 'WeekStarts', '','05/Apr','12/Apr','19/Apr','26/Apr'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  ngOnInit(): void { 
    this.resourcesList();
  }
  resourcesList(){
    this.http.get('http://localhost:3000/Resources').subscribe(
      list => {
        // let array = list.map(item => {
        //   return {
        //     $key: item.key,
        //     ...item.payload.val()
        //   };
        // });
        let array:any =list;
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    customer: new FormControl(''),
    project: new FormControl({value:'',disabled: true} ),
    projectLead: new FormControl({value:'',disabled: true}),
    teamMember: new FormControl({value:'',disabled: true}),
    role: new FormControl({value:'',disabled: true}),
    type: new FormControl({value:'',disabled: true}),
    wk1: new FormControl(''), wk2: new FormControl(''), wk3: new FormControl(''), wk4: new FormControl(''), wk5: new FormControl(''),
    wk6: new FormControl(''), wk7: new FormControl(''), wk8: new FormControl(''), wk9: new FormControl(''), wk10: new FormControl(''),
    wk11: new FormControl(''), wk12: new FormControl(''), wk13: new FormControl(''), wk14: new FormControl(''), wk15: new FormControl(''),
    wk16: new FormControl(''), wk17: new FormControl(''), wk18: new FormControl(''), wk19: new FormControl(''), wk20: new FormControl(''),
    wk21: new FormControl(''), wk22: new FormControl(''), wk23: new FormControl(''), wk24: new FormControl(''), wk25: new FormControl(''),
    wk26: new FormControl(''), wk27: new FormControl(''), wk28: new FormControl(''), wk29: new FormControl(''), wk30: new FormControl(''),
    wk31: new FormControl(''), wk32: new FormControl(''), wk33: new FormControl(''), wk34: new FormControl(''), wk35: new FormControl(''),
    wk36: new FormControl(''), wk37: new FormControl(''), wk38: new FormControl(''), wk39: new FormControl(''), wk40: new FormControl(''),
    wk41: new FormControl(''), wk42: new FormControl(''), wk43: new FormControl(''), wk44: new FormControl(''), wk45: new FormControl(''),
    wk46: new FormControl(''), wk47: new FormControl(''), wk48: new FormControl(''), wk49: new FormControl(''), wk50: new FormControl(''),
    wk51: new FormControl(''), wk52: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
     id: null,
      customer: '',
      project: '',
      projectLead: '',
      teamMember: '',
      role: '',
      type:'',
      wk1:{value:'' }, wk2:'', wk3:'', wk4:'', wk5:'', wk6:'', wk7:'', wk8:'', wk9:'', wk10:'',
      wk11:'', wk12:'', wk13:'', wk14:'', wk15:'', wk16:'', wk17:'', wk18:'', wk19:'', wk20:'',
      wk21:'', wk22:'', wk23:'', wk24:'', wk25:'', wk26:'', wk27:'', wk28:'', wk29:'', wk30:'',
      wk31:'', wk32:'', wk33:'', wk34:'', wk35:'', wk36:'', wk37:'', wk38:'', wk39:'', wk40:'',
      wk41:'', wk42:'', wk43:'', wk44:'', wk45:'', wk46:'', wk47:'', wk48:'', wk49:'', wk50:'',
      wk51:'', wk52:'',
    });
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    this.initializeFormGroup();
    const createDialog = new MatDialogConfig();
   // dialogConfig.disableClose = true;
   createDialog.autoFocus = true;
   createDialog.width = "100%";
    this.dialog.open(ResourceComponent,createDialog);
  }

  onEdit(row){
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "100%";
    dialogConfig.data = row ;
    this.dialog.open(ResourceComponent,dialogConfig);
  }

  // onDelete($key){
  //   if(confirm('Are you sure to delete this record ?')){
  //   this.resourceService.deleteEmployee($key);
  //   this.notificationService.warn('! Deleted successfully');
  //   }
  // }

}
