import { cosineSum } from './util.js'
export default function exactBlackman (i, N) { return cosineSum(i, N, [7938 / 18608, 9240 / 18608, 1430 / 18608]) }
export { exactBlackman }
