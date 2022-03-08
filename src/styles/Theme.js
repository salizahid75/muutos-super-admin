const theme = {
    colors: {
        primary: "#34D399",
        gray900: "#18181B",
        gray800: "#222225",
        gray700: "#3F3F46",
        gray600: "#52525B",
        gray500: "#71717A",
        gray400: "#A1A1AA",
        gray300: "#D4D4D8",
        gray200: "#E4E4E7",
        gray100: "#F4F4F5",
        gray50: "#FAFAFA",

        assetBlue: "#75A6D7",
        assetGreen: "#ABEDE6",
        assetYellow: "#FAF7B8",
        assetPink: "#F2C0E9",
        assetRed: "#E0766C",
        assetTeal: "#ABEDE6",
        assetSun: "#FAF7B8",
        assetDark: "#3F3F46",
        assetPrimary: "#34D399",
        assetGray300: "#D4D4D8",
    },
    font: {
        family: "Poppins, sans-serif",
        weight: {
            thin: 100,
            extraLight: 200,
            light: 300,
            regular: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
            extraBold: 800,
        },
    },
    media: {
        md: 768,
        sm: 500,
        lg: 968,
        xl: 1368,
    },

    utils: {
        toRgba: (hex, opacity = 1) => {
            hex = hex.slice(1, hex.length)

            if (hex.length !== 6) {
                throw new Error("Only six-digit hex colors are allowed.")
            }

            var aRgbHex = hex.match(/.{1,2}/g)
            var aRgb = [
                parseInt(aRgbHex[0], 16),
                parseInt(aRgbHex[1], 16),
                parseInt(aRgbHex[2], 16),
            ]
            return `rgba(${[...aRgb, opacity].join(",")})`
        },
    },
}

export default theme
