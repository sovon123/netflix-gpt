export const validateForm = (email, password, name, isSignInForm) => {

    const isEmailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email); 
    const isPasswordValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!isSignInForm) {
        const isNameValidate = /^[a-zA-Z\s\-\']{2,50}$/.test(name);
        if(!isNameValidate) return "Name not valid";
    }

    if(!isEmailValidate) return "Email Id not valid!!";
    if(!isPasswordValidate) return "Password not valid!!";

    return null;

}