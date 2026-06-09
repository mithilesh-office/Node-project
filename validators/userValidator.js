const emailRegex =/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const phoneRegex =/^[6-9][0-9]{9}$/;

export function validateUser(user) {

    if (!user.name?.trim()) {
        throw new Error("Name is required");
    }

    if (!emailRegex.test(user.email)) {
        throw new Error("Invalid email");
    }

    if (!phoneRegex.test(user.phone)) {
        throw new Error("Invalid phone number");
    }
}