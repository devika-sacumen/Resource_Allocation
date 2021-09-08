import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private httpClient: HttpClient) { }
  resourceList= [];

}
