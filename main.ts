/**
 * Cenote - Main entry point
 */

import { stoat } from '@albedosehen/stoat'

const logger = stoat.create({
  module: 'Cenote',
  level: 'info',
  prettyPrint: false,
  metadata: {
    version: '0.0.1',
  },
})

logger.info('Cenote!')
