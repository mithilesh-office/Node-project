import AppError from "../errors/AppError.js";

const emailRegex =/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const phoneRegex =/^[0-9]{10}$/;

export function validateUser(user) {

    if (!user) {
        throw new AppError("User data is required", 400);
    }
    // Sanitization
    const name = user.name?.trim().replace(/\s+/g, " ");

    if (typeof user.email !== "string") {
        throw new AppError("Email must be a string", 400);
    }
    const email = user.email?.trim().toLowerCase();
    const phone = user.phone?.trim();

    // handle missing fields
    if (!name) {
        throw new AppError("Name is required", 400);
    }

    if (!email) {
        throw new AppError("Email is required", 400);
    }

    if (!phone) {
        throw new AppError("Phone number is required", 400);
    }

    // Email validation
    if (!emailRegex.test(email)) {
        throw new AppError("Invalid email", 400);
    }

    // Phone validation
    if (!phoneRegex.test(phone)) {
        throw new AppError("Invalid phone number", 400);
    }

    // Return Validated data
    return {
        ...user,
        name,
        email,
        phone
    };
}