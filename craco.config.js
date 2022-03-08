const CracoLessPlugin = require("craco-less")

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@font-family": "Poppins, sans-serif",
              "@primary-color": " #34D399", // primary color for all components
              "@link-color": "#34D399", // link color
              "@success-color": "#34D399", // success state color
              "@warning-color": "#FFD600", // warning state color
              "@error-color": "#FF1700", // error state color
              "@border-radius-base": "8px", // major border radius
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
