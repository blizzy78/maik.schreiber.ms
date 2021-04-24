module.exports = {
  purge: [
    './src/pages/*.js',
    './src/pages/*.css',
    './src/components/*.js',
    './src/components/*.css'
  ],
  variants: {
    extend: {
      padding: ['first', 'last']
    }
  },
  theme: {
    extend: {
      colors: {
        'bzyellow': '#E7B232',
        'bzorange': '#DB8935',
        'bzred': '#E87759',
        'bzlight': '#F7F0DF',
        'bzblue': '#64A09E',
        'bzbrown': '#694823'
      },
      height: {
        'stripe': '4px',
        'stripe-lg': '12px'
      },
      width: {
        'stripe': '4px'
      },
      borderWidth: {
        'stripe': '4px'
      }
    }
  }
}
