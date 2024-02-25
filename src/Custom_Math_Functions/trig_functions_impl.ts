//source: Technical Java: Developing Scientific and Engineering applications
//Author: Grant Palmer
class Trignometry {

    private static LN10: number = Math.log(10.0)

    static degToRad(degrees: number): number {
        return degrees * (Math.PI / 180)
    }

    static radToDeg(radians: number): number {
        return radians / (Math.PI / 180)
    }

    static log10(value: number): number {
        return Math.log(value) / Trignometry.LN10;
    }

    static ln(value: number): number {
        return Math.log(value)
    }

    //result in radians
    //to get result in degrees, we wrap it around 
    //Trignometry.radToDeg(Math.asin(value))
    static sin_inverse(value: number): number {
        return Math.asin(value)
    }

    static cos_inverse(value: number): number {
        return Math.acos(value)
    }

    static tan_inverse(value: number): number {
        return Math.atan(value)
    }

    static cosec(value: number): number {
        return 1 / Math.sin(value)
    }

    static sec(value: number): number {
        return 1 / Math.cos(value)
    }

    static cot(value: number): number {
        return 1 / Math.tan(value)
    }
}

export default Trignometry