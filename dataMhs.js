const dataMahasiswa = [ 
  {
    id: 1,
    nama: "Budi Santoso",
    tanggalLahir: "2000-01-15",
    fakultas: "Fakultas Teknik",
    programStudi: "Teknik Informatika",
    semester: 6,
    nilai: {
      algoritma: 85,
      basisData: 88,
      pemrogramanWeb: 90,
    },
    aktif: true,
    organisasi: ["Himpunan Mahasiswa Teknik", "Komunitas Pemrograman"],
  },
  {
    id: 2,
    nama: "Siti Aminah",
    tanggalLahir: "1999-05-10",
    fakultas: "Fakultas Ekonomi",
    programStudi: "Manajemen",
    semester: 4,
    nilai: {
      manajemenKeuangan: 78,
      akuntansi: 82,
      pemasaran: 75,
    },
    aktif: true,
    organisasi: ["Koperasi Mahasiswa"],
  },
  {
    id: 3,
    nama: "Rudi Hartono",
    tanggalLahir: "1998-12-01",
    fakultas: "Fakultas Teknik",
    programStudi: "Teknik Sipil",
    semester: 8,
    nilai: {
      mekanikaTanah: 85,
      strukturBangunan: 89,
    },
    aktif: false,
    organisasi: ["Himpunan Mahasiswa Teknik Sipil"],
  },
];

console.log("---- Destructuring Field ----");
// Ambil data mahasiswa pertama
const mahasiswaPertama = dataMahasiswa[0];
// Destructuring seluruh field mahasiswa
const { id, nama, tanggalLahir, fakultas, programStudi, semester, nilai, aktif, organisasi } = mahasiswaPertama;
console.log(nama, fakultas, programStudi, semester);

// Destructuring pada field nilai
const { algoritma, basisData, pemrogramanWeb } = nilai;
console.log(algoritma, basisData, pemrogramanWeb);

// Destructuring pada field organisasi
const [organisasi1, organisasi2] = organisasi;
console.log(organisasi1, organisasi2);

console.log("---- Spread Operator ----");
// Spread operator untuk menambahkan organisasi baru
const organisasiBaru = [...organisasi, "Futsal"];
console.log(organisasiBaru);

console.log("---- Update Field ----");
// Update field fakultas dan semester
const mahasiswaUpdate = {
  ...mahasiswaPertama,
  fakultas: "Fakultas Ilmu Komputer",
  semester: 7,
};
console.log(mahasiswaUpdate);

console.log("---- Split Tanggal Lahir ----");
// Split pada field tanggal lahir dan tampilkan tahun saja
const tahunLahir = tanggalLahir.split('-')[0];
console.log(tahunLahir);

console.log("---- Conditional Operator ----");
// Conditional operator untuk menampilkan status mahasiswa aktif
const statusMahasiswa = aktif ? "Mahasiswa Aktif" : "Mahasiswa Tidak Aktif";
console.log(statusMahasiswa);

console.log("---- Map Tampilkan Nama Mahasiswa ----");
// Map untuk menampilkan semua nama mahasiswa
const listNamaMhs = dataMahasiswa.map((mhs) => mhs.nama);
console.log(listNamaMhs);

console.log("---- Filtering Mahasiswa Aktif dari Fakultas Ilmu Komputer ----");
// Filter mahasiswa yang aktif dan dari Fakultas Ilmu Komputer
// Perlu menambahkan Fakultas Ilmu Komputer agar filter ada hasilnya
const listMhsUpdate = [...dataMahasiswa, mahasiswaUpdate];
const mahasiswaAktifIlkom = listMhsUpdate.filter(
  (mhs) => mhs.aktif && mhs.fakultas === "Fakultas Ilmu Komputer"
);
console.log(mahasiswaAktifIlkom);

console.log("---- Totalkan Nilai Semua Mahasiswa ----");
// Totalkan nilai seluruh mahasiswa
const totalNilai = dataMahasiswa.reduce((total, mhs) => {
  const nilaiMahasiswa = Object.values(mhs.nilai).reduce((a, b) => a + b, 0);
  return total + nilaiMahasiswa;
}, 0);
console.log(totalNilai);

console.log("---- Sort Berdasarkan Semester ----");
// Sort mahasiswa berdasarkan semester
const urutSemester = dataMahasiswa.slice().sort((a, b) => a.semester - b.semester);
console.log(urutSemester);

console.log("---- Menambahkan Mahasiswa Baru ----");
// Menambahkan mahasiswa baru
const mahasiswaBaru = {
  id: 4,
  nama: "Andi Wijaya",
  tanggalLahir: "2001-07-22",
  fakultas: "Fakultas Teknik",
  programStudi: "Teknik Mesin",
  semester: 3,
  nilai: {
    mekanikaFluida: 80,
    termodinamika: 78,
  },
  aktif: true,
  organisasi: ["Himpunan Mahasiswa Teknik Mesin"],
};
const listMhsUpdateWithNew = [...listMhsUpdate, mahasiswaBaru];
console.log(listMhsUpdateWithNew);

console.log("---- Delete Mahasiswa ----");
// Delete mahasiswa dengan id tertentu (misalnya id = 2)
const listMhsDelete = listMhsUpdateWithNew.filter((mhs) => mhs.id !== 2);
console.log(listMhsDelete);

console.log("---- Update Mahasiswa ----");
// Update mahasiswa dengan id = 1
const listMhsUpdateAfterEdit = listMhsDelete.map((mhs) =>
  mhs.id === 1 ? { ...mhs, semester: 8, programStudi: "Teknik Informatika" } : mhs
);
console.log(listMhsUpdateAfterEdit);

