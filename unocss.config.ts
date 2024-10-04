import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
    ],
    theme: {
        colors: {
            'pastelgreen': {
                '50': '#f0fdf1',
                '100': '#ddfbdf',
                '200': '#bdf5c2',
                '300': '#6be677',
                '400': '#4fd95d',
                '500': '#28bf38',
                '600': '#1b9e28',
                '700': '#197c24',
                '800': '#196222',
                '900': '#16511d',
                '950': '#062d0c',
            },
            'deyork': {
                '50': '#f1f8f1',
                '100': '#dfedde',
                '200': '#bfdbc0',
                '300': '#92bf96',
                '400': '#67a06e',
                '500': '#468350',
                '600': '#33683c',
                '700': '#295331',
                '800': '#224329',
                '900': '#1d3723',
                '950': '#0f1f13',
            },

        },
    },
})
