const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]; 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}


const pAequorFactory = (num, func) => {
  return {
    specimenNum: num,

    dna: func(),

    mutate() {
      let i = Math.floor(Math.random() * 15); 
      switch(this.dna[i]) {  
        case 'A':
          let dnaBaseSet1 = ['T', 'C', 'G'];
   this.dna[i] = dnaBaseSet1[Math.floor(Math.random() * 3)];
          return this.dna;

          break;
        case 'T':
          let dnaBaseSet2 = ['A', 'C', 'G'];
   this.dna[i] = dnaBaseSet2[Math.floor(Math.random() * 3)];
          return this.dna;

          break;
        case 'C':
          let dnaBaseSet3 = ['A', 'T', 'G']
   this.dna[i] = dnaBaseSet3[Math.floor(Math.random() * 3)];
          return this.dna;

          break;
        case 'G':
          let dnaBaseSet4 = ['A', 'T', 'C']
   this.dna[i] = dnaBaseSet4[Math.floor(Math.random() * 3)];
          return this.dna;

          break;
        default: return 'woops!'
      };           
    },

    compareDNA(obj) {
      let match = 0;
      for (let i = 0; i < this.dna.length; i += 1) {
        if (this.dna[i] === obj.dna[i]) {
            match++;
          };
      };
      let percent = (match/this.dna.length * 100).toFixed(1)
      return `Specimen #${this.specimenNum} and Specimen #${obj.specimenNum} have ${percent}% DNA in common.`;
    },

    willLikelySurvive() {
      let match = 0;
      for (let i = 0; i < this.dna.length; i += 1) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
            match++;
        };
      };
      if (match >= 0.6*this.dna.length) {
        return true;
      } else {
        return false; 
      };
    },
  };
};

let array = [];
let count = 0;
let match = 0;
let specNum = 1;
do {
  let newObj = pAequorFactory(specNum, mockUpStrand);
  specNum++
  count++
  if (newObj.willLikelySurvive()) {
    match++
    array.push(newObj)
  }
} while (match < 30);
console.log(match);
console.log(count);
console.log(array);
