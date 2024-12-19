const request = require('supertest')
const app = require('../app')

let token = null

describe("Tests Usuarios", () => {
    it("should register a new user", async () => {
        const response = await request(app)
            .post("/api/usuarios/register")
            .send({ email: "antonio@example.com", contraseña: "123456", role: "admin" })
            .set("Accept", "application/json")
            .expect(200)

        expect(response.body.usuario.email).toEqual("antonio@example.com")
        expect(response.body.usuario.role).toEqual("admin")
    })

    it("should login a user", async () => {
        const response = await request(app)
            .post("/api/usuarios/login")
            .send({ email: "antonio@example.com", contraseña: "123456" })
            .set("Accept", "application/json")
            .expect(200)

        expect(response.body.usuario.email).toEqual("antonio@example.com")
        expect(response.body.usuario.role).toEqual("admin")
        token = response.body.token
    })
})
