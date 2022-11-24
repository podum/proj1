import { Component } from '@angular/core';

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

  constructor() {}

  bzt(snd: string) {
    this.s[snd].play();
  }

  async speak() {
    let msg = new SpeechSynthesisUtterance();
    msg.text = "Gax. The Wifed Up poota. This poota has been seen stripping in Guadalajara. Her greatest attack is Buy Me A House Simp Husband";
    window.speechSynthesis.speak(msg);
    // this.tts.speak('Hello World')
    //   .then(() => console.log('Success'))
    //   .catch((reason: any) => console.log(reason));
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
