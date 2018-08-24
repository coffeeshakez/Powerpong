import { Component, OnInit } from '@angular/core';
import { Rule } from '../Rule';
import { RuleService } from '../rule.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
  
})

export class RulesComponent implements OnInit {

  rules: Rule[];
  selectedRule: Rule;

  getRules(): void {
    this.RuleService.getRules().subscribe(rules => this.rules = rules);
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

  constructor(private RuleService: RuleService) { }

  ngOnInit() {

    this.getRules();
  }

}
