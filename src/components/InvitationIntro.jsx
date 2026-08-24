import Reveal from './Reveal';
export default function InvitationIntro({w}){return <section id="intro" className="section intro"><Reveal><div className="intro__mark">01</div><span className="eyebrow">{w.intro.greeting}</span><h2>{w.intro.title}</h2><div className="ornament"><span/>✦<span/></div><p className="lead">{w.intro.text}</p></Reveal></section>}
