import Gamma_Function from "./gamma_impl";
import Math_Functions from "./fact_comb_perm_impl";
import Trignometry from "./trig_functions_impl";

console.log(Gamma_Function.gamma(2))     // 1.0018253348416761
console.log(Math_Functions.factorial(5)) // 120
console.log(Math_Functions.combination(6, 2)) //15
console.log(Math_Functions.permutation(6, 2)) //30
console.log(Trignometry.log10(2)) // 0.30103
console.log(Trignometry.ln(2)) // 0.69314718056
console.log(Trignometry.sin_inverse(0.5)) //0.5235987755982989
console.log(Trignometry.cos_inverse(0.5)) //1.0471975511965979
console.log(Trignometry.tan_inverse(0.5)) //0.4636476090008061
console.log(Trignometry.cosec(0.5)) //2.08582964293
console.log(Trignometry.sec(0.5)) //1.13949
console.log(Trignometry.cot(0.5)) //1.83048772171
console.log(Math.sin(0.5)) //0.479425538604203
console.log(Math.cos(0.5)) //0.8775825618903728
console.log(Math.tan(0.5)) //0.5463024898437905