export const colors = {
  black: 'rgb(0, 0, 0)',
  white: 'rgb(255, 255, 255)',
  yellow: 'rgb(248, 231, 28)',
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
