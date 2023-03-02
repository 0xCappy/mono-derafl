import { MantineTheme, MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
  other: {
    strong: {
      color: 'red'
    }
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'xl',
      },
    },
    Anchor: {
      // Subscribe to theme and component params
      styles: (theme, params) => ({
        root: {
          color: theme.colorScheme === 'dark' ? 'white' : 'black'
        }
      }),
    },
    Title: {
      // Subscribe to theme and component params
      styles: (theme, params) => ({
        root: {
          color: theme.colorScheme === 'dark' ? 'white' : 'black'
        }
      }),
    },
  },
  // primaryColor: 'gray',
  fontFamily: 'Work Sans, sans-serif',
  fontFamilyMonospace: 'Work Sans, sans-serif',
  headings: { fontFamily: 'Work Sans, sans-serif' },
};

export default theme;