module.exports = {
  purge: [
    './src/pages/*.js',
    './src/components/*.js'
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
        'bzred': '#E87759',
        'bzlight': '#F7F0DF',
        'bzbrown': '#694823'
      },
      borderWidth: {
        'stripe': '4px'
      }
    }
  }
}
