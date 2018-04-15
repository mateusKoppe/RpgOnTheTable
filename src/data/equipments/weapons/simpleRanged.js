export default {
  crossbowLight: {
    name: 'Crossbow, light',
    cost: '25gp',
    damageRoll: '1d8',
    damageType: 'piercing',
    properties: [
      'ammunition',
      'loading',
      'twoHanded'
    ],
    ammunition: 'range (80, 320)',
    weight: '5lb',
  },
  dart: {
    name: 'Dart',
    cost: '5cp',
    damageRoll: '1d4',
    damageType: 'piercing',
    properties: [
      'finesse',
      'thrown'
    ],
    thrown: 'range (20, 60)',
    weight: '1/4lb',
  },
  shortbow: {
    name: 'Shortbow',
    cost: '25gp',
    damageRoll: '1d6',
    damageType: 'piercing',
    properties: [
      'ammunition',
      'twoHanded'
    ],
    ammunition: 'range (80, 320)',
    weight: '2lb',
  },
  sling: {
    name: 'Shortbow',
    cost: '1sp',
    damageRoll: '1d4',
    damageType: 'bludgeoning',
    properties: [
      'ammunition'
    ],
    ammunition: 'range (30, 120)',
    weight: '0',
  }
}