import { Component, OnInit } from '@angular/core';
import { RuleService } from '../rule.service';
import { Rule } from '../Rule';

@Component({
  selector: 'app-edit-rules',
  templateUrl: './edit-rules.component.html',
  styleUrls: ['./edit-rules.component.scss']
})

export class EditRulesComponent implements OnInit {
  
  rules: Rule[];
  
  powerRules: Rule[];
  cursedRules: Rule[];
  counterRules: Rule[];
  normalRules: Rule[];
  
  selectedRule: Rule

  types = ['Power', 'Counter', 'Normal', 'Cursed'];

  submitted = false;

  model = new Rule( '', '', '');

  onSubmit(){
    
    this.updateLists(this.model);
    this.rules.push(this.model);
    this.model = new Rule('', '','');
  }

  updateLists(rule: Rule){
    
    switch(rule.type){
      case 'Power': 
      this.powerRules.push(rule);
      break;

      case 'Counter': 
      this.counterRules.push(rule);
      break;

      case 'Normal': 
      this.normalRules.push(rule);
      break;

      case 'Cursed': 
      this.cursedRules.push(rule);
      break;
    }
    
  }

  getRules(): void {
    this.RuleService.getRules().subscribe(rules => (
      this.rules = rules
    ));
  }

  initializeAllRules(): void{

    let powerRules = [];
    let counterRules = [];
    let normalRules = [];
    let cursedRules = [];

    this.rules.forEach(element => {
      
      console.log(element.type);
      console.log(element.type === 'Power');

      switch(element.type){
        case 'Power': 
          powerRules.push(element);
          break;

        case 'Counter': 
          counterRules.push(element);
          break;

        case 'Normal': 
          normalRules.push(element);
          break;

        case 'Cursed': 
          cursedRules.push(element);
          break;
      }
    });

    this.powerRules = powerRules;
    this.counterRules = counterRules;
    this.normalRules = normalRules;
    this.cursedRules = cursedRules;
  }

  onSelect(rule: Rule): void {
    this.selectedRule = rule;
  }

  get Rules(){
    return this.rules;
  }

  getSelectedRule(){
    return this.selectedRule;
  }

  
  //TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

  constructor(private RuleService: RuleService) { }

  ngOnInit() {

    this.getRules(); //Initialize RuleArray
    this.initializeAllRules(); //initialize powerRuleArray
    this.selectedRule = this.rules[0];
  }
}
