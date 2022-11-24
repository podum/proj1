import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  msg: any = new SpeechSynthesisUtterance();
  s:any = {
    nope: new Audio('assets/audio/nope.mp3'),
    click: new Audio('assets/audio/click.wav'),
    activate: new Audio('assets/audio/activate.wav')
  }

  constructor() {}

  bzt(snd: string) {
    this.s[snd].play();
  }

  speak(txt: string, noclk?: boolean) {
    if(noclk != true) {
      this.bzt('click');
    }
    this.msg.text = txt;
    window.speechSynthesis.speak(this.msg);
  };

  name (noclk?:boolean) {
    this.speak("Gax.", noclk);
  }

  desc() {
    // this.name(true);
    this.speak("Gax. The Wife'd Up poota. This poota has been seen stripping in Guadalajara. Her greatest attack is Buy Me A House Simp Husband");
  }

  price() {
    this.speak("Her last recorded price is $150")
  }

  loc() {
    this.speak("Last spotted in the Tulum region of Mexico")
  }

  atk() {
    this.speak('Her attacks include: Mean look, Keagal, BBBJ, & Buy me a House simp Husband')
  }
  
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
