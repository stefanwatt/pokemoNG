import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { GameComponent } from './game/game.component'
import { EnemyComponent } from './game/enemy/enemy.component'
import { MeComponent } from './game/me/me.component'
import { ControlsComponent } from './game/controls/controls.component'
import { KpComponent } from './game/kp/kp.component'
import { StoreModule } from '@ngrx/store'
import { controlsReducer } from './game/controls/controls.reducer'
import { GameboyButtonsComponent } from './gameboy-buttons/gameboy-buttons.component'

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    EnemyComponent,
    MeComponent,
    ControlsComponent,
    KpComponent,
    GameboyButtonsComponent,
  ],
  imports: [BrowserModule, StoreModule.forRoot({ controls: controlsReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
