export const overrides = {
  MuiCssBaseline: {
    '@global': {
      '& .MuiGridPanel-root': {
        background: 'red !important',
      },
    },
  },
  MuiCard: {
    borderRadius: 12,
  },
  MuiBox: {
    borderRadius: 12,
  },
  MuiGridPanel: {
    background: 'red',
  },
  MuiTooltip: {
    tooltip: {
      fontSize: '1rem',
    },
  },
  MuiTabs: {
    indicator: {
      background: 'transparent',
    },
  },
}
