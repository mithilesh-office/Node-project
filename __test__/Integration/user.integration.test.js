import request from "supertest";
import app from "../../app.js";
import UserModel from "../../models/User.js";

describe("User API", () => {
    it("should create a user and persist it in the database", async () => {
        const response = await request(app)
            .post("/api/users/create")
            .send({
                name: "John",
                email: "john@test.com",
                phone: "9994567890",
                notificationType: "email"
            })
            .expect(201);


        const saved = await UserModel.findOne({email: response.body.email});
        expect(saved).not.toBeNull();
        expect(saved.name).toBe("John");
        expect(saved.email).toBe("john@test.com");
    });

    it("should return 400 for invalid email", async () => {
        const response = await request(app)
            .post("/api/users/create")
            .send({
                name: "John",
                email: "invalid",
                phone: "9994567890",
                notificationType: "email"
            })
            .expect(400);

    });
});