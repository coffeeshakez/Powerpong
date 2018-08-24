import { Injectable } from '@angular/core';
import { Rule } from './Rule';
import { RULES } from './mock-rules';
import { Observable, of, BehaviorSubject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class RuleService {
  

  getRules(): Observable<Rule[]> {
    return of(RULES);
    
  }

  constructor() { }
}
