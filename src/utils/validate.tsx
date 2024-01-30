export const checkValidData = (email: string, password: string) => {
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password);

    if (!isEmailValid ) return 'Enter valid Email address';
    if (!isPasswordValid ) return 'Enter valid password';

    return null;
}