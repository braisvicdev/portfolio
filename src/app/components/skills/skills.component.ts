import { Component, OnInit } from '@angular/core';
import { ISkill } from 'src/app/interfaces/interfaces';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: ISkill [] = [];

  constructor(public perfilService: PerfilService) {}
  
  ngOnInit(): void {
    this.subscripcionSkills();
  }

  subscripcionSkills() {
    this.perfilService.skills().subscribe(skills  => {
      this.skills = skills;
    });
  }



}
