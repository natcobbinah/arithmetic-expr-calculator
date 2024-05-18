import CustomErrorHandler from "../Error/customError";

let my_error = new CustomErrorHandler("test", { cause: new Error("cause") }).message
console.log(my_error) 