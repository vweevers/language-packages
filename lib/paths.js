import { homedir } from 'node:os'
import path from 'node:path'

export const getStoragePath = () => path.join(homedir(), '.language-packages')
