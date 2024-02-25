//source: Technical Java: Developing Scientific and Engineering applications
//Author: Grant Palmer
class Gamma_Function {
    private static grp1: number
    private static grp2: number
    private static grp3: number

    static j: number
    private static TWOPI: number = Math.sqrt(2.0 * Math.PI)
    private static c: number[] = [1.000000000190015, 76.18009172947146, -86.50532032941677, 24.01409824083091,
        -1.231739572450155, 0.1208650973866179, -0.539523938495e-5]

    static gamma(z: number): number {
        this.grp1 = z + 0.5;
        this.grp2 = z + 5.5;

        this.grp3 = this.c[0];

        for (this.j = 1; this.j < 7; ++this.j) {
            this.grp3 += this.c[this.j] / (z + this.j)
        }

        return Math.pow(this.grp2, this.grp1) * Math.exp(-this.grp2) * this.TWOPI * this.grp3 / z;
    }

}

export default Gamma_Function