import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { TeamComponent } from './game/team/team.component'
import { GameComponent } from './game/game.component'
import { EnemyComponent } from './game/enemy/enemy.component'
import { MeComponent } from './game/me/me.component'
import { ControlsComponent } from './game/controls/controls.component'
import { KpComponent } from './game/kp/kp.component'
import { MaleIconComponent } from './game/kp/male-icon/male-icon.component'
import { FemaleIconComponent } from './game/kp/female-icon/female-icon.component'
import { BarComponent } from './game/kp/bar/bar.component'
import { GameboyButtonsComponent } from './gameboy-buttons/gameboy-buttons.component'
import { FooterComponent } from './game/footer/footer.component'
import { MessageComponent } from './game/message/message.component'

@NgModule({
  declarations: [
    BarComponent,
    MaleIconComponent,
    FemaleIconComponent,
    TeamComponent,
    AppComponent,
    GameComponent,
    EnemyComponent,
    MeComponent,
    ControlsComponent,
    KpComponent,
    GameboyButtonsComponent,
    FooterComponent,
    MessageComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
