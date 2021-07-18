const device = {
  mobile: 375,
  tablet: 768,
  laptop: 992,
  desktop: 1200,
}

const deviceBreakpoints = {
  mobileAndMore: `(min-width: ${device.mobile + 1}px)`,
  mobileAndLess: `(max-width: ${device.tablet}px)`,
  tabletAndMore: `(min-width: ${device.tablet + 1}px)`,
  tabletAndLess: `(max-width: ${device.laptop}px)`,
  laptopAndMore: `(min-width: ${device.laptop + 1}px)`,
  laptopAndLess: `(max-width: ${device.desktop}px)`,
  desktopAndMore: `(min-width: ${device.desktop + 1}px)`,
};

export default deviceBreakpoints;