'use client';
import { useRef, useState } from 'react';

export function Artwork({ name, alt }: { name: string; alt: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  return <><button className="p-artwork" type="button" onClick={() => dialog.current?.showModal()} aria-label={`Enlarge: ${alt}`}><img src={`/pendulum/${name}.webp`} alt={alt} loading="lazy" /><span className="p-enlarge" aria-hidden="true">↗</span></button><dialog ref={dialog} className="p-lightbox" onClick={e => {if(e.target === dialog.current) dialog.current.close();}}><button className="p-lightbox-close" onClick={() => dialog.current?.close()} autoFocus aria-label="Close enlarged image">Close ×</button><img src={`/pendulum/${name}.webp`} alt={alt}/></dialog></>;
}
const spreads = [[2,3],[4,5],[8,12],[16,17]];
const labels = ['The opening pages','Findings and data','Different information, different layouts','The action plan'];
export function ReportReader(){
 const [index,setIndex]=useState(1);
 return <div className="p-reader"><div className="p-reader-tools"><p aria-live="polite">{labels[index]} <span> / {String(index+1).padStart(2,'0')}</span></p><div><button onClick={()=>setIndex((index+3)%4)} aria-label="Previous report pages">←</button><button onClick={()=>setIndex((index+1)%4)} aria-label="Next report pages">→</button></div></div><div className="p-spread" key={index}>{spreads[index].map(n=><figure key={n}><Artwork name={`report-${n}`} alt={`Brand Risk Report, page ${n}: ${labels[index].toLowerCase()}`}/><figcaption>Page {n}</figcaption></figure>)}</div><div className="p-reader-dots" aria-label="Choose report pages">{labels.map((label,i)=><button key={label} aria-label={label} aria-pressed={index===i} onClick={()=>setIndex(i)}><span/></button>)}</div></div>;
}
const campaigns=[{label:'One brief',images:['campaign','campaign-2','campaign-3'],alts:['Conversational questions arranged as message bubbles','Data-led visual composition from the same paid social brief','Third paid social composition from the same brief']},{label:'Photography & data',images:['photo','data'],alts:['Photographic ad using the creator image and a data comparison','Data-led campaign carousel page']}];
export function CampaignGallery(){
 const [index,setIndex]=useState(0);
 return <div className="p-campaign-gallery"><div className="p-campaign-tabs" aria-label="Campaign selections">{campaigns.map((c,i)=><button key={c.label} onClick={()=>setIndex(i)} aria-pressed={index===i}>{c.label}<span> ↗</span></button>)}</div><div className={`p-campaign-art p-campaign-count-${campaigns[index].images.length}`} key={index}>{campaigns[index].images.map((name,i)=><Artwork key={name} name={name} alt={campaigns[index].alts[i]}/>)}</div></div>;
}
