import { ErrorResponse } from "./models/error"

export function getInvalidUsernameErrorResponse(username: string): ErrorResponse {
    let errorResponse: ErrorResponse
    if (!username.match(/^[0-9A-Za-z]+$/)) {
        errorResponse = {
            errorCode: 400,
            errorMessage: `Invalid username ${username}. Username can only contain digits or alphabets`
        }
        return errorResponse
    }
    return null
}

export function checkValidNum(number: any, paramName: string): ErrorResponse {
    if (number !== undefined) {
        let value = Number(number)
        if (isNaN(number)) {
            return {
                errorCode: 400,
                errorMessage: `The provided ${paramName} value ${value} is not a number, please provide a correct limit numeric value greater than zero`
            }
        }
        if (value < 0) {
            return {
                errorCode: 400,
                errorMessage: `The provided ${paramName} value should be greater than or equal to zero, but you have provided ${number}`
            }
        }
    }
    return null
}