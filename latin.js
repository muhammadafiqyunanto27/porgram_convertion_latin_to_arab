function konversi() {
  const latinText = document.getElementById("latinText").value;
  const arabicText = textToArabicWithHarokat(latinText);
  document.getElementById("arabicText").textContent = arabicText;
}

async function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

// Kamus dasar, perlu diperluas untuk mencakup lebih banyak kata dan aturan
const arabicMapping = {
  a: "اَ", // Alif dengan fatha
  b: "ب", // Ba
  c: "ج", // Jim
  d: "د", // Dal
  e: "هَ", // Ha dengan fatha
  f: "ف", // Fa
  g: "غ", // Ghayn
  h: "ح", // Ha
  i: "يِ", // Ya dengan kasra
  j: "يَ", // Ya dengan fatha
  k: "ك", // Kaf
  l: "ل", // Lam
  m: "م", // Mim
  n: "ن", // Nun
  o: "و", // Waw
  p: "ب", // Tidak ada padanan langsung, gunakan Ba
  q: "ق", // Qaf
  r: "ر", // Ra
  s: "س", // Seen
  t: "ت", // Ta
  u: "وُ", // Waw dengan damma
  v: "ف", // Tidak ada padanan langsung, gunakan Fa
  w: "و", // Waw
  x: "س", // Tidak ada padanan langsung, gunakan Seen
  y: "ي", // Ya
  z: "ز", // Zay
  " ": " ", // Spasi
};

// Fungsi untuk mengonversi teks Latin ke Arab dengan harokat
function textToArabicWithHarokat(text) {
  let arabicText = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    // Logika untuk menentukan harakat berdasarkan konteks
    // ... (implementasikan logika yang lebih kompleks di sini)
    arabicText += arabicMapping[char] || char;
  }
  return arabicText;
}

// Contoh penggunaan
async function main() {
  const latinText = await askQuestion("Masukkan teks Latin: ");
  const arabicText = textToArabicWithHarokat(latinText);
  console.log(`Teks dalam Arab: ${arabicText}`);
  rl.close();
}

main();
