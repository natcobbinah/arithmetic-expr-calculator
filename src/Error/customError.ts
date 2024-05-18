//source : mdn
class CustomErrorHandler extends Error {
    constructor(message: string, options: any) {
        super(message);
    }
}

export default CustomErrorHandler