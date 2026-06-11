import request from "supertest";
import app from "../../app.js";

describe("User API", () => {

    
    it("creates a user", async () => {

        const response = await request(app)
            .post("/api/users/create")
            .send({
                name: "John",
                email: "john@test.com",
                phone: "9994567890",
                notificationType: "email"
            });

        expect(response.status).toBe(201);

        expect(response.body.name).toBe("John");

        expect(response.body.email).toBe("john@test.com");
    });

});