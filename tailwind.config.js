module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '894px': '894px',
        '489px': '489px',
        '498px': '498px',
        '62px': '62px',
        '750px':'750px',
        '23px':'23px',
        '207px':'207px',
        '63px':'63px',
        '432px':'432px',
        '18px':'18px',
        '67px':'67px',
      }
    },
    inset: {
      '61px':'61px',
      '6px':'6px',
      '168px':'168px',
      '98px':'98px',
      '231px':'231px',
      '456px':'456px',
      '172px':'172px',
      '246px':'246px',
      '321px':'321px',
      '398px':'398px',
    },
    fontSize: {
      '30px':'30px',
      '18px':'18px',
      '20px':'20px',
    },
    colors: {
      'joinGreen': '#00B241',
      'formInput': '#F2F2F2',
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
