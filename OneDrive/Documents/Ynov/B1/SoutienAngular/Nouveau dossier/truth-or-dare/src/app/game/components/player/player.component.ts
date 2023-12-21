import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent  implements OnInit {
protected playersForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private gameService: GameService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {    
    this.playersForm = this.formBuilder.group({
      player1: [this.gameService.players[0] ? this.gameService.players[0].name : null,[Validators.required]],
      player2: [this.gameService.players[1] ? this.gameService.players[1].name : null,[Validators.required]]
    })
  } 
  onSubmit() {
    if(this.playersForm.valid) {
      
      const players = [this.playersForm.get('player1')?.value, this.playersForm.get('player2')?.value];
      console.log(players);
      this.gameService.initializePlayers(players);
      this.router.navigate(['/game/play'])
    } else{
      this.alertService.displayAlert("Error", "Form invalid");
    }


  }
}
