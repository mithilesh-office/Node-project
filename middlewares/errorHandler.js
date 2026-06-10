const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Something went wrong";

    if (err.name === 'CastError') {
        statusCode = 400;
        message = `Invalid ${err.path}: ${err.value}`;
    }

    if (err.name === 'ValidationError') {
        statusCode = 400;
        message = Object.values(err.errors).map((val) => val.message).join('. ');
    }

    // Handle Zod validation errors
    if (err.name === "ZodError") {
        statusCode = 400;
        const issues = err.issues || err.errors || [];

        return res.status(statusCode).json({
            errors: issues.map((issue) => ({
                field: issue.path.length ? issue.path.join(".") : undefined,
                message: issue.message
            }))
        });
    }

    if (statusCode === 500) {
        console.error("Unhandled Error:", err);
    }

    res.status(statusCode).json({ message });
};

export default errorHandler;
