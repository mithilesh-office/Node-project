/**
 * Generic validation middleware (industry standard pattern).
 * Usage: router.post("/", validateBody(mySchema), myController)
 *
 * Parses and validates req.body against the given Zod schema.
 * On success, replaces req.body with the parsed (sanitized) data.
 * On failure, throws a ZodError which is caught by the global errorHandler.
 */
const validateBody = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
        return next(result.error);
    }

    req.body = result.data;
    next();
};

export default validateBody;