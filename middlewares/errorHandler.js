const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Something went wrong";

    // Handle Mongoose cast errors (invalid ObjectIds)
    if (err.name === 'CastError') {
        statusCode = 400;
        message = `Invalid ${err.path}: ${err.value}`;
    }

    // Handle Mongoose validation errors
    if (err.name === 'ValidationError') {
        statusCode = 400;
        message = Object.values(err.errors).map((val) => val.message).join('. ');
    }

    // Handle Zod validation errors
    if (err.name === 'ZodError') {
        statusCode = 400;
        const issues = err.issues || err.errors || [];
        message = issues.map((e) => e.message).join(". ");
    }

    if (statusCode === 500) {
        console.error("Unhandled Error:", err);
    }

    res.status(statusCode).json({ message });
};

export default errorHandler;
