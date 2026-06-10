const emailRegex =/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const phoneRegex =/^[0-9]{10}$/;

export function validateUser(user) {

    if (!user) {
        throw new Error("User data is required");
    }
    // Sanitization
    const name = user.name?.trim().replace(/\s+/g, " ");

    if (typeof user.email !== "string") {
    throw new Error("Email must be a string");
}
    const email = user.email?.trim().toLowerCase();
    const phone = user.phone?.trim();

    // handle missing fields
    if (!name) {
        throw new Error("Name is required");
    }

    if (!email) {
        throw new Error("Email is required");
    }

    if (!phone) {
        throw new Error("Phone number is required");
    }

    // Email validation
    if (!emailRegex.test(email)) {
        throw new Error("Invalid email");
    }

    // Phone validation
    if (!phoneRegex.test(phone)) {
        throw new Error("Invalid phone number");
    }

    // Return Validated data
    return {
        ...user,
        name,
        email,
        phone
    };
}