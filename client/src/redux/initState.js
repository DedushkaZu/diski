const initState = {
  loader: false,
  error: {
    status: false,
    errorMessage: '',
  },
  auth: false,
  cars:
  {
    m: {
      e: {
        disks: ['d1', 'd2'],
        color: ['b', 'r'],
        linkDisksSmall: ['discs/m-e-d1-DEZENT-TH-DARK-small.png', 'discs/m-e-d2-AEZ-PANAMA-DARK-small.png'],
        linkDisksBig: ['discs/m-e-d1-DEZENT-TH-DARK-big.png', 'discs/m-e-d2-AEZ-PANAMA-DARK-big.png'],
        nameDisks: ['DEZENT TH DARK', 'AEZ PANAMA DARK'],
        photoCount: 24
      }
    },
    v: {
      g: {
        disks: ['d1', 'd2', 'd3'],
        linkDisksSmall: ['/discs/v-g-d1-AEZ-STEAM-small.png', 'discs/g-d2-DEZENT-TA-SILVER-small.png', 'discs/g-d3-DOTZ-REVVO-DARK-small.png'],
        linkDisksBig: ['/discs/v-g-d1-AEZ-STEAM-big.png', 'discs/g-d2-DEZENT-TA-SILVER-big.png', 'discs/g-d3-DOTZ-REVVO-DARK-big.png'],
        nameDisks: ['AEZ STEAM', 'DEZENT TA SILVER', 'DOTZ REVVO DARK'],
        color: ['g', 'b', 'r'],
        photoCount: 24
      }
    },
    b: {
      z: {
        disks: ['d1', 'd2',],
        linkDisksSmall: ['discs/b-z-d1-DOTZ-LAGUNASECA-DARK-small.png', 'discs/b-z-d2-DOTZ-SUZUKA-BLAZE-small.png'],
        linkDisksBig: ['discs/b-z-d1-DOTZ-LAGUNASECA-DARK-big.png', 'discs/b-z-d2-DOTZ-SUZUKA-BLAZE-big.png'],
        nameDisks: ['DOTZ LAGUNASECA DARK', 'DOTZ SUZUKA BLAZE'],
        color: ['b', 'r'],
        photoCount: 23
      }
    },
    l: {
      n: {
        disks: ['d1'],
        linkDisksSmall: ['discs/l-n-d1-DOTZ-4X4-PHARAO-DARK-small.png'],
        linkDisksBig: ['discs/l-n-d1-DOTZ-4X4-PHARAO-DARK-big.png'],
        nameDisks: ['DOTZ 4X4 PHARAO DARK'],
        color: ['g'],
        photoCount: 24
      }
    }
  },
  wrongAuthData: false,
  basket: [],
  config: false,
}
export default initState
