// uno.config.ts
import { defineConfig, presetTypography } from 'unocss';
import presetWind3 from '@unocss/preset-wind3'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetWind3(),
    presetIcons(),
    presetTypography(),
  ],
})
