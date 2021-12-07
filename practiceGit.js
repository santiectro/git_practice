// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  function pAequorFactory(number, arr) {
    return {
      _specimenNum : number,
      _dna : arr,
      mutate () {
        let randomNew = Math.floor(Math.random() * 3)
        let randomBase = Math.floor(Math.random() * this._dna.length)
        switch ( this._dna[randomBase] ) {
          case 'A':
            this._dna[randomBase] = ['T', 'C', 'G'][randomNew]
            break;
          case 'T':
            this._dna[randomBase] = ['A', 'C', 'G'][randomNew]
            break;
          case 'C':
            this._dna[randomBase] = ['T', 'A', 'G'][randomNew]
            break;
          case 'G':
            this._dna[randomBase] = ['T', 'C', 'A'][randomNew]
            break;
        }
      },
      compareDNA (pAequorObj) {
        let sameDNa = 0
        for (let i = 0; i < this._dna.length; i++){
          if (pAequorObj._dna[i] === this._dna[i]){
            sameDNa++
          }
        }
        console.log(`specimen ${this._specimenNum} and specimen ${pAequorObj._specimenNum} have ${100 *(sameDNa / this._dna.length)}% DNA in common`)
      },
      willLikelySurvive () {
        let survival = 0
        for (element of this._dna){
          if (element === 'G' || element === 'C'){
            survival++
          }
        }
        if ((survival / this._dna.length )* 100 >= 60){
          return true
        }else {
          return false
        }
      }
    }
  }
  
  
  
  const chekcSurvival = () => {
    const survivalGuys = []
    let specimen = 0
    do {
      this['specimen '+ specimen] = pAequorFactory(specimen, mockUpStrand)
      if (this['specimen '+ specimen].willLikelySurvive){
        survivalGuys.push(this['specimen '+ specimen])
        specimen++
      }else{
        specimen++
        continue
      }
    } while (survivalGuys.length < 30)
    return survivalGuys
  }
  
  console.log(chekcSurvival())