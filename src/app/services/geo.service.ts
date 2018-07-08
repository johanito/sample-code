import { Injectable, Query } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { filterQueryId } from '@angular/core/src/view/util';

@Injectable()
export class GeoService {

  dbRef: any;
  constructor(private db: AngularFireDatabase) {
   }
      //JBAL 20-02-2018 Reference geofire database location
      
   getLocations() {
    return this.db.list('/location');
    
   }

  }
