import {ChevronDown, Volume2} from 'lucide-react';

export default function Hero({w}){
  return <section className="hero" style={{'--hero-image':`url(${w.hero.image})`}}>
    <div className="hero__veil" />
    <div className="hero__frame" />
    <div className="hero__topline">
      <span>{w.hero.label}</span>
      <span>{w.dateText}</span>
    </div>
    <div className="hero__content">
      <p className="hero__kicker">Мы приглашаем вас разделить</p>
      <h1><span>{w.couple.groom}</span><em>&amp;</em><span>{w.couple.bride}</span></h1>
      <div className="hero__meta"><span>{w.hero.subLabel}</span><i /></div>
    </div>
    <div className="hero__bottomline">
      <span>Save the date</span>
      <a href="#intro" aria-label="Прокрутить вниз"><ChevronDown size={17}/></a>
      <span>С любовью</span>
    </div>
  </section>
}
