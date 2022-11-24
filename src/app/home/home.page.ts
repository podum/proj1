import { Component } from '@angular/core';
import { TextToSpeechAdvanced } from '@awesome-cordova-plugins/text-to-speech-advanced/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  s:any = {
    nope: new Audio('assets/audio/nope.mp3'),
    click: new Audio('assets/audio/click.wav'),
    activate: new Audio('assets/audio/activate.wav')
  }

  constructor(private tts: TextToSpeechAdvanced) {}

  bzt(snd: string) {
    this.s[snd].play();
  }

  async speak() {
    this.tts.speak('Hello World')
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  };
  
  // async stop (){
  //   await TextToSpeech.stop();
  // };
  
  // async getSupportedLanguages () {
  //   const languages = await TextToSpeech.getSupportedLanguages();
  // };
  
  // async getSupportedVoices () {
  //   const voices = await TextToSpeech.getSupportedVoices();
  // };
  
  // async isLanguageSupported (lang: string) {
  //   const isSupported = await TextToSpeech.isLanguageSupported({ lang });
  // };

}
