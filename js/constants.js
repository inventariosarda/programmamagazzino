export const FIXED_DEPARTMENTS = [
  { id: "confezione", name: "Confezione", order: 10 },
  { id: "grattugiatura", name: "Grattugiatura", order: 20 },
  { id: "etichettatura", name: "Etichettatura", order: 30 },
  { id: "spedizioni_forme", name: "Spedizioni (forme)", order: 40 },
  { id: "spedizioni_porzionati", name: "Spedizioni (porzionati)", order: 50 },
  { id: "trattamento_stagionati", name: "Trattamento Stagionati", order: 60 },
  { id: "trattamento_in_crosta_formaggi", name: "Trattamento in crosta Formaggi", order: 70 },
  { id: "attivita_saltuarie", name: "Attività saltuarie", order: 80 },
  { id: "gestione_scarti_peso", name: "Gestione scarti peso", order: 90 },
  { id: "qualita_resi_scarico_camion", name: "Qualità / Resi Scarico Camion", order: 100 },
  { id: "manutenzioni_depuratore", name: "Manutenzioni / Depuratore", order: 110 },
  { id: "magazzinieri", name: "Magazzinieri", order: 120 },
  { id: "pulizie", name: "Pulizie", order: 130 },
  { id: "smaltimento_rifiuti", name: "SMALTIMENTO RIFIUTI", order: 140 },
  { id: "macchinari_lavapavimenti", name: "Macchinari Lavapavimenti", order: 150 },
  { id: "chiusura", name: "Chiusura", order: 160 },
  { id: "assenti_ferie", name: "Assenti (Ferie)", order: 170 },
  { id: "assenti_malattia", name: "Assenti (Malattia)", order: 180 },
];

// Default turni (puoi cambiare in SETUP)
export const DEFAULT_SHIFTS = {
  s1: { label: "Turno 1", start: "07:00", end: "13:00" },
  s2: { label: "Turno 2", start: "13:00", end: "19:00" }
};
