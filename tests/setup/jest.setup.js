import { connectDB, closeDB, clearDB } from "./db.js";

beforeAll(async () => {
    await connectDB();
});

afterEach(async () => {
    await clearDB();
});

afterAll(async () => {
    await closeDB();
});