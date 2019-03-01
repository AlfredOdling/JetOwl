export const colors = {
  black: 'rgb(0, 0, 0)',
  white: 'rgb(255, 255, 255)',
  yellow: 'rgb(248, 231, 28)',
  green: 'rgb(84, 137, 26)',
  grey: 'rgb(60, 60, 60)',
  lightgrey: 'rgb(130, 129, 129)',
}

export const fonts = {
  rr: 'roboto-regular',
  mb: 'montserrat-bold',
}

const _spaceMainAxis = {
  flexStart: {
    justifyContent: 'flex-start',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  center: {
    justifyContent: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },
}

const _spaceCrossAxis = {
  flexStart: {
    alignItems: 'flex-start',
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
  center: {
    alignItems: 'center',
  },
  stretch: {
    alignItems: 'stretch',
  },
}

export const layout = {
  _flexColumn: { display: 'flex', flexDirection: 'column' },
  _flexRow: { display: 'flex', flexDirection: 'row' },
  _column: 'flexDirection: column',
  _row: 'flexDirection: row',
  _spaceMainAxis,
  _spaceCrossAxis,
}

export const _text = {
  mb_24_white: getTextStyle(fonts.mb, 24, colors.white),
  mb_20_white: getTextStyle(fonts.mb, 20, colors.white),
  mb_18_white: getTextStyle(fonts.mb, 18, colors.white),
  mb_16_white: getTextStyle(fonts.mb, 16, colors.white),
  mb_16_green: getTextStyle(fonts.mb, 16, colors.green),
  mb_14_black: getTextStyle(fonts.mb, 14, colors.black),
  rr_16_yellow: getTextStyle(fonts.rr, 16, colors.yellow),
  rr_16_white: getTextStyle(fonts.rr, 16, colors.white),
  rr_16_lightgrey: getTextStyle(fonts.rr, 16, colors.lightgrey),
  rr_14_white: getTextStyle(fonts.rr, 14, colors.white),
  rm_16_white: getTextStyle(fonts.rm, 16, colors.white),
}

function getTextStyle(fontFamily, fontSize, color) {
  return {
    fontFamily,
    fontSize,
    color,
  }
}
