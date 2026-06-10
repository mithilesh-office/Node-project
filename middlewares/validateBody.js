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

        return res.status(400).json({
            errors: result.error.issues.map(issue => ({
                field: issue.path[0],
                message: issue.message
            }))
        });
        // return res.status(400).json({
        //     message: result.error.issues[0].message
        // });
    }

    req.body = result.data;

    next();
};

export default validateBody;