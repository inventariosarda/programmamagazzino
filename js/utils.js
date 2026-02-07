export function $(sel, root=document) { return root.querySelector(sel); }
export function $$(sel, root=document) { return Array.from(root.querySelectorAll(sel)); }

export function pad2(n){ return String(n).padStart(2,"0"); }

export function formatISODate(d){
  const y=d.getFullYear(), m=pad2(d.getMonth()+1), day=pad2(d.getDate());
  return `${y}-${m}-${day}`;
}

export function parseISODate(s){
  // s = YYYY-MM-DD
  const [y,m,d]=s.split("-").map(Number);
  return new Date(y, m-1, d);
}

export function startOfWeek(date){
  // Lunedì come inizio settimana
  const d = new Date(date);
  const day = (d.getDay()+6)%7; // Mon=0
  d.setDate(d.getDate()-day);
  d.setHours(0,0,0,0);
  return d;
}

export function weekIdFromDate(date){
  // ISO-like: YYYY-WW (semplice, non perfetto ISO per edge cases, ma ok per gestione magazzino)
  const d = startOfWeek(date);
  const year = d.getFullYear();
  const oneJan = new Date(year,0,1);
  const diffDays = Math.floor((d - oneJan) / 86400000);
  const week = Math.floor(diffDays/7)+1;
  return `${year}-${String(week).padStart(2,"0")}`;
}

export function humanDate(date, locale="it-IT"){
  return date.toLocaleDateString(locale, { weekday:"long", year:"numeric", month:"2-digit", day:"2-digit" });
}

export function debounce(fn, wait=350){
  let t=null;
  return (...args)=>{
    clearTimeout(t);
    t=setTimeout(()=>fn(...args), wait);
  };
}

export function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}
